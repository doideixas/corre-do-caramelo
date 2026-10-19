'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import {
  type GameScreenState,
  type ObstacleEntity,
  type CoinEntity,
  type CarameloDog,
  type ObstacleType,
  type DeliveryDestination,
  INITIAL_HEARTS,
  INITIAL_TIME,
  HORN_COOLDOWN,
  clampPlayerX,
  getTargetMaxSpeed,
  getDeliveryDistanceForStage,
  getDeliveryDestination,
  isPlayerInDeliveryZone,
  checkObstacleCollision,
  checkCoinCollection,
  canFireHorn,
  doesHornSpookCaramelo,
  stepCarameloDog,
  triggerCarameloSpook,
  calculateFinalScore,
} from '../lib/game-rules';
import {
  createRoadTexture,
  createLombadaTexture,
  createDeliveryZoneTexture,
  createNeighborhoodChunk,
  createDeliveryZoneGroup,
  type MotoboyRig,
  type CarameloRig,
} from '../lib/three-models';
import { soundFX } from '../lib/sound-effects';
import {createMotoboyGroup,createCarameloGroup} from '../lib/approved-characters';
import {obstacle as createObstacleMesh, person, vendor, kids, cat, animateResident} from '../lib/bairro';
import {batchNeighborhood} from '../lib/static-batch';

interface HudSnapshot {
  hearts: number;
  coins: number;
  deliveries: number;
  timeRemaining: number;
  speedKmh: number;
  distanceToDelivery: number;
  totalStageDistance: number;
  inDeliveryZone: boolean;
  hornCooldown: number;
  carameloState: CarameloDog['state'];
  carameloSide: -1 | 1;
  currentDestination: DeliveryDestination;
  toastMessage: string | null;
}

interface EndRunStats {
  reason: 'tempo' | 'coracoes';
  score: number;
  highScore: number;
  deliveries: number;
  coins: number;
  caramelosSpooked: number;
  distanceMeters: number;
}

const HIGH_SCORE_STORAGE_KEY = 'motoboy_caramelo_highscore_v1';
const TUTORIAL_SEEN_STORAGE_KEY = 'motoboy_caramelo_tutorial_v1';

export default function MotoboyGame() {
  const canvasMountRef = useRef<HTMLDivElement | null>(null);

  const [screenState, setScreenState] = useState<GameScreenState>('title');
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [showTutorialBanner, setShowTutorialBanner] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);

  const [hud, setHud] = useState<HudSnapshot>(() => ({
    hearts: INITIAL_HEARTS,
    coins: 0,
    deliveries: 0,
    timeRemaining: INITIAL_TIME,
    speedKmh: 0,
    distanceToDelivery: getDeliveryDistanceForStage(0),
    totalStageDistance: getDeliveryDistanceForStage(0),
    inDeliveryZone: false,
    hornCooldown: 0,
    carameloState: 'hidden',
    carameloSide: 1,
    currentDestination: getDeliveryDestination(0),
    toastMessage: null,
  }));

  const [endStats, setEndStats] = useState<EndRunStats>({
    reason: 'coracoes',
    score: 0,
    highScore: 0,
    deliveries: 0,
    coins: 0,
    caramelosSpooked: 0,
    distanceMeters: 0,
  });

  // Mutable simulation state stored in ref so 60Hz loop never tears down Three.js canvas
  const simRef = useRef({
    screen: 'title' as GameScreenState,
    brake: false,
    spookVariant: 0,
    spookAge: 0,
    playerX: 0,
    playerZ: 0,
    targetSteerVelX: 0,
    currentLeanZ: 0,
    speed: 0,
    hearts: INITIAL_HEARTS,
    coins: 0,
    deliveries: 0,
    timeRemaining: INITIAL_TIME,
    hornCooldown: 0,
    invulnerableTimer: 0,
    carameloSlowTimer: 0,
    hitstopTimer: 0,
    cameraTrauma: 0,
    deliveryStartZ: 0,
    deliveryTargetZ: -getDeliveryDistanceForStage(0),
    inDeliveryZone: false,
    caramelo: {
      state: 'hidden',
      x: 3.8,
      distanceAhead: 15,
      lateralSide: 1,
      stateTimer: 3.8, // First Caramelo arrives ~3.8s into the ride!
      barkCooldown: 0,
      totalSpookedCount: 0,
    } as CarameloDog,
    toastMessage: null as string | null,
    toastTimer: 0,
    highScore: 0,
    keysPressed: new Set<string>(),
    touchDragActive: false,
    touchLastClientX: 0,
    touchSteerDir: 0, // -1 left, 1 right, 0 none
    triggerHornRequested: false,
    triggerDeliveryRequested: false,
    resetRequested: false,
  });

  // Sync body dataset state for testing & CSS hooks
  useEffect(() => {
    document.body.dataset.state = screenState;
    simRef.current.screen = screenState;
  }, [screenState]);

  // Load saved high score and check ?autostart=1 on mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(HIGH_SCORE_STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!Number.isNaN(parsed)) {
          simRef.current.highScore = parsed;
          setEndStats((prev) => ({ ...prev, highScore: parsed }));
        }
      }
    } catch {
      // Ignore storage errors in restricted iframes
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      startNewGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showToast = useCallback((msg: string, duration = 2.6) => {
    simRef.current.toastMessage = msg;
    simRef.current.toastTimer = duration;
  }, []);

  const startNewGame = useCallback(() => {
    const s = simRef.current;
    s.screen = 'playing';
    s.brake = false;
    s.spookAge = 0;
    s.triggerHornRequested = false;
    s.triggerDeliveryRequested = false;
    soundFX.unlock();
    s.playerX = 0;
    s.playerZ = 0;
    s.targetSteerVelX = 0;
    s.currentLeanZ = 0;
    s.speed = 14;
    s.hearts = INITIAL_HEARTS;
    s.coins = 0;
    s.deliveries = 0;
    s.timeRemaining = INITIAL_TIME;
    s.hornCooldown = 0;
    s.invulnerableTimer = 0;
    s.carameloSlowTimer = 0;
    s.hitstopTimer = 0;
    s.cameraTrauma = 0;
    s.deliveryStartZ = 0;
    s.deliveryTargetZ = -getDeliveryDistanceForStage(0);
    s.inDeliveryZone = false;
    s.caramelo = {
      state: 'hidden',
      x: 3.8,
      distanceAhead: 15,
      lateralSide: 1,
      stateTimer: 3.8,
      barkCooldown: 0,
      totalSpookedCount: 0,
    };
    s.keysPressed.clear();
    s.touchSteerDir = 0;
    s.resetRequested = true;

    showToast('🛵 Acelera, Motoca! Entrega da Dona Neide na sacola!', 3.0);

    try {
      const seen = window.localStorage.getItem(TUTORIAL_SEEN_STORAGE_KEY);
      if (!seen) {
        setShowTutorialBanner(true);
        window.localStorage.setItem(TUTORIAL_SEEN_STORAGE_KEY, '1');
      } else {
        setShowTutorialBanner(true);
      }
    } catch {
      setShowTutorialBanner(true);
    }

    document.body.dataset.state = 'playing';
    setScreenState('playing');
    setShowInstructionsModal(false);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [showToast]);

  const handleFireHorn = useCallback(() => {
    const s = simRef.current;
    if (s.screen !== 'playing') return;
    s.triggerHornRequested = true;
  }, []);

  const handleCompleteDelivery = useCallback(() => {
    const s = simRef.current;
    if (s.screen !== 'playing') return;
    s.triggerDeliveryRequested = true;
  }, []);

  const handleTogglePause = useCallback(() => {
    setScreenState((prev) => {
      if (prev === 'playing') {
        simRef.current.keysPressed.clear();
        return 'paused';
      }
      if (prev === 'paused') {
        return 'playing';
      }
      return prev;
    });
  }, []);

  const handleToggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      soundFX.muted = next;
      return next;
    });
  }, []);

  // Auto-hide tutorial banner after 6.5s of playing
  useEffect(() => {
    if (screenState !== 'playing' || !showTutorialBanner) return;
    const timer = window.setTimeout(() => {
      setShowTutorialBanner(false);
    }, 6500);
    return () => window.clearTimeout(timer);
  }, [screenState, showTutorialBanner]);

  // Global keyboard shortcuts
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const code = e.code;
      const s = simRef.current;

      if (s.screen === 'title') {
        if (code === 'Enter' || code === 'Space') {
          e.preventDefault();
          startNewGame();
        }
        return;
      }

      if (s.screen === 'gameover') {
        if (code === 'Enter' || code === 'Space') {
          e.preventDefault();
          startNewGame();
        }
        return;
      }

      if (code === 'KeyP' || code === 'Escape') {
        e.preventDefault();
        handleTogglePause();
        return;
      }

      if (code === 'KeyM') {
        e.preventDefault();
        handleToggleMute();
        return;
      }

      if (s.screen !== 'playing') return;

      if (code === 'Space') {
        e.preventDefault();
        if (!s.keysPressed.has('Space')) {
          s.triggerHornRequested = true;
        }
      }

      if (code === 'KeyE' || code === 'Enter') {
        e.preventDefault();
        if (s.inDeliveryZone) {
          s.triggerDeliveryRequested = true;
        }
      }

      s.keysPressed.add(code);
    };

    const onKeyUp = (e: KeyboardEvent) => {
      simRef.current.keysPressed.delete(e.code);
    };

    const onBlur = () => {
      simRef.current.keysPressed.clear();
      simRef.current.touchDragActive = false;
      simRef.current.brake = false;
      simRef.current.touchSteerDir = 0;
    };

    const onVisibility = () => { if(document.hidden && simRef.current.screen === 'playing'){simRef.current.screen='paused';setScreenState('paused');onBlur();} };
    document.addEventListener('visibilitychange',onVisibility);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onBlur);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
      document.removeEventListener('visibilitychange',onVisibility);
    };
  }, [startNewGame, handleTogglePause, handleToggleMute]);

  // Isolated Three.js WebGL setup & 60Hz game loop
  useEffect(() => {
    const container = canvasMountRef.current;
    if (!container) return;

    const isHeadless =
      navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent);

    const scene = new THREE.Scene();
    const skyColor = new THREE.Color(0xc6cfc7);
    scene.background = skyColor;
    scene.fog = new THREE.FogExp2(0xc6cfc7, 0.007);

    const camera = new THREE.PerspectiveCamera(
      58,
      container.clientWidth / Math.max(1, container.clientHeight),
      0.1,
      190
    );
    camera.position.set(0, 4.2, 6.8);
    camera.lookAt(0, 1.2, -10);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isHeadless,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.setPixelRatio(
      isHeadless ? 1 : Math.min(window.devicePixelRatio || 1, 1.5)
    );
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = !isHeadless;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Studio environment reflection
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture;
    pmremGenerator.dispose();

    // Warm Brazilian afternoon sunlight + cool tropical sky HemisphereLight
    const hemiLight = new THREE.HemisphereLight(0xe6e4d3, 0x697c72, 1.5);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xffdfab, 2.2);
    sunLight.position.set(16, 28, 18);
    if (!isHeadless) {
      sunLight.castShadow = true;
      sunLight.shadow.mapSize.width = 1024;
      sunLight.shadow.mapSize.height = 1024;
      sunLight.shadow.camera.near = 2;
      sunLight.shadow.camera.far = 85;
      const d = 24;
      sunLight.shadow.camera.left = -d;
      sunLight.shadow.camera.right = d;
      sunLight.shadow.camera.top = d;
      sunLight.shadow.camera.bottom = -d;
      sunLight.shadow.bias = -0.0005;
    }
    scene.add(sunLight);

    const maxAnisotropy = Math.min(4,renderer.capabilities.getMaxAnisotropy());
    const disposeEntity=(group:THREE.Object3D)=>{group.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();const materials=Array.isArray(o.material)?o.material:[o.material];for(const m of materials)if(!m.userData.shared)m.dispose();}});};
    const roadTex = createRoadTexture(maxAnisotropy);
    roadTex.repeat.set(1, 5);
    const lombadaTex = createLombadaTexture(maxAnisotropy);
    const deliveryTex = createDeliveryZoneTexture(maxAnisotropy);

    // Recycling Neighborhood Road Chunks
    const lady=person('lady');const seller=vendor();const soccer=kids();const mingau=cat();
    lady.root.rotation.y=-Math.PI/2;seller.root.rotation.y=-Math.PI/2;mingau.rotation.y=-Math.PI/2;
    const crosswalk=new THREE.Group();
    for(let x=-4;x<=4;x+=1){const stripe=new THREE.Mesh(new THREE.PlaneGeometry(.55,3.8),new THREE.MeshStandardMaterial({color:0xf3e6cf,roughness:1}));stripe.rotation.x=-Math.PI/2;stripe.position.set(x,.035,0);crosswalk.add(stripe);}
    scene.add(lady.root,seller.root,soccer.root,mingau,crosswalk);
    let ladyZ=-130,ladyTime=0,ladyReward=false,ladyWarned=false,sellerZ=-85,sellerUsed=false,soccerZ=-205,catZ=-285;
    const resetResidents=()=>{ladyZ=-130;ladyTime=0;ladyReward=false;ladyWarned=false;sellerZ=-85;sellerUsed=false;soccerZ=-205;catZ=-285;lady.reaction=0;seller.reaction=0;mingau.userData.reaction=0;};
    const CHUNK_LENGTH = 60;
    const NUM_CHUNKS = 5;
    const chunks: THREE.Group[] = [];
    for (let i = 0; i < NUM_CHUNKS; i++) {
      const c = batchNeighborhood(createNeighborhoodChunk(i, roadTex));
      c.position.z = -i * CHUNK_LENGTH + 20;
      scene.add(c);
      chunks.push(c);
    }

    // Motoboy Hero Rig
    const motoboyRig: MotoboyRig = createMotoboyGroup();
    scene.add(motoboyRig.root);

    // Caramelo Dog Rig
    const carameloRig: CarameloRig = createCarameloGroup();
    carameloRig.root.rotation.y = 0;
    scene.add(carameloRig.root);

    // Delivery Zone Rig (positioned at targetZ = -250 initially so title screen is clean)
    const deliveryZoneRig = createDeliveryZoneGroup(deliveryTex);
    deliveryZoneRig.root.position.set(0, 0, -getDeliveryDistanceForStage(0));
    scene.add(deliveryZoneRig.root);

    // Sonic Wave Rings Pool (4 dramatic expanding rings per horn blast)
    interface SonicRingVisual {
      mesh: THREE.Mesh;
      active: boolean;
      age: number;
      maxAge: number;
    }
    const sonicRings: SonicRingVisual[] = [];
    const ringGeo = new THREE.TorusGeometry(0.75, 0.14, 12, 28);
    for (let i = 0; i < 8; i++) {
      const ringMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xfacc15 : 0x22d3ee,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(ringGeo, ringMat);
      mesh.visible = false;
      scene.add(mesh);
      sonicRings.push({
        mesh,
        active: false,
        age: 0,
        maxAge: 0.9,
      });
    }

    // Pooled Celebratory / Crash Particle Burst (Zero GC)
    const PARTICLE_COUNT = 32;
    const particleGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const particleMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    const particleInstanced = new THREE.InstancedMesh(
      particleGeo,
      particleMat,
      PARTICLE_COUNT
    );
    particleInstanced.frustumCulled = false;
    scene.add(particleInstanced);

    const particleData = Array.from({ length: PARTICLE_COUNT }, () => ({
      active: false,
      pos: new THREE.Vector3(),
      vel: new THREE.Vector3(),
      age: 0,
      maxAge: 0.6,
      color: new THREE.Color(0xfacc15),
    }));
    const _dummyMatrix = new THREE.Matrix4();
    const _zeroScaleMatrix = new THREE.Matrix4().makeScale(0, 0, 0);

    const spawnParticles = (
      originX: number,
      originY: number,
      originZ: number,
      hexColor: number,
      count = 18
    ) => {
      let spawned = 0;
      for (let i = 0; i < PARTICLE_COUNT && spawned < count; i++) {
        const p = particleData[i];
        if (!p.active) {
          p.active = true;
          p.age = 0;
          p.maxAge = 0.45 + Math.random() * 0.35;
          p.pos.set(originX, originY, originZ);
          const angle = Math.random() * Math.PI * 2;
          const speed = 2.5 + Math.random() * 5.5;
          p.vel.set(
            Math.cos(angle) * speed,
            3.0 + Math.random() * 4.5,
            Math.sin(angle) * speed
          );
          p.color.setHex(hexColor);
          particleInstanced.setColorAt(i, p.color);
          spawned++;
        }
      }
      if (particleInstanced.instanceColor) {
        particleInstanced.instanceColor.needsUpdate = true;
      }
    };

    // Obstacles & Coins pools in world
    interface ActiveObstacle {
      data: ObstacleEntity;
      mesh: THREE.Group;
    }
    interface ActiveCoin {
      data: CoinEntity;
      mesh: THREE.Mesh;
    }

    const activeObstacles: ActiveObstacle[] = [];
    const activeCoins: ActiveCoin[] = [];
    let nextEntityId = 1;
    let lastSpawnedZ = -18;

    const coinGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.14, 16);
    coinGeo.rotateX(Math.PI / 2);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      emissive: 0xd97706,
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.85,
    });

    const clearEntities = () => {
      for (const ob of activeObstacles) {
        scene.remove(ob.mesh);disposeEntity(ob.mesh);
      }
      activeObstacles.length = 0;
      for (const c of activeCoins) {
        scene.remove(c.mesh);
      }
      activeCoins.length = 0;
      lastSpawnedZ = simRef.current.playerZ - 24;
    };

    const spawnWaveAhead = (targetZ: number, deliveries: number) => {
      const lanes = [-2.7, 0, 2.7];
      const obstacleTypes: ObstacleType[] = [
        'buraco',
        'cone',
        'lombada',
        'caminhao', 'lixeira', 'perua', 'obra', 'carrinho', 'bola',
      ];
      let chosenType =
        obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
      if(targetZ>-265&&chosenType==='bola')chosenType='lixeira';
      // Keep center lane (idx 1) clear near the start of each run so the player survives the opening seconds without input
      const obstacleLaneIdx =
        targetZ > -265
          ? Math.random() < 0.5
            ? 0
            : 2
          : Math.floor(Math.random() * 3);
      const obX = lanes[obstacleLaneIdx];

      const dims: Record<ObstacleType, { w: number; l: number }> = {
        lombada: { w: 2.8, l: 0.9 },
        buraco: { w: 1.5, l: 1.5 },
        cone: { w: 1.4, l: 0.8 },
        carro: { w: 1.75, l: 3.3 },
        caminhao:{w:2.05,l:5.1},lixeira:{w:.9,l:.9},perua:{w:1.85,l:3.7},obra:{w:2.0,l:.9},carrinho:{w:.75,l:.6},bola:{w:.7,l:.7},
      };

      const distToDelivery = Math.abs(targetZ - simRef.current.deliveryTargetZ);
      if (distToDelivery > 25 && Math.abs(targetZ-ladyZ)>18) {
        const mesh = createObstacleMesh(chosenType, lombadaTex);
        mesh.position.set(obX, 0, targetZ);
        scene.add(mesh);
        activeObstacles.push({
          data: {
            id: nextEntityId++,
            type: chosenType,
            x: obX,
            z: targetZ,
            width: dims[chosenType].w,
            length: dims[chosenType].l,
            hit: false,
          },
          mesh,
        });

        if (deliveries >= 2 && Math.random() < 0.4) {
          const secondLaneIdx =
            (obstacleLaneIdx + 1 + Math.floor(Math.random() * 2)) % 3;
          const secondType: ObstacleType =
            Math.random() < 0.5 ? 'cone' : 'buraco';
          const mesh2 = createObstacleMesh(secondType, lombadaTex);
          mesh2.position.set(lanes[secondLaneIdx], 0, targetZ);
          scene.add(mesh2);
          activeObstacles.push({
            data: {
              id: nextEntityId++,
              type: secondType,
              x: lanes[secondLaneIdx],
              z: targetZ,
              width: dims[secondType].w,
              length: dims[secondType].l,
              hit: false,
            },
            mesh: mesh2,
          });
        }
      }

      // Spawn a trail of 3 golden coins in a safe lane
      const coinLaneIdx = (obstacleLaneIdx + 1) % 3;
      const coinX = lanes[coinLaneIdx];
      for (let c = 0; c < 3; c++) {
        const cz = targetZ - c * 3.2;
        const cMesh = new THREE.Mesh(coinGeo, coinMat);
        cMesh.position.set(coinX, 0.72, cz);
        scene.add(cMesh);
        activeCoins.push({
          data: {
            id: nextEntityId++,
            x: coinX,
            z: cz,
            collected: false,
          },
          mesh: cMesh,
        });
      }
    };

    for (let z = -28; z >= -160; z -= 22) {
      spawnWaveAhead(z, 0);
      lastSpawnedZ = z;
    }

    renderer.compile(scene, camera);

    const ResizeObs = window.ResizeObserver;
    const ro = ResizeObs
      ? new ResizeObs(() => {
          if (!container) return;
          const w = container.clientWidth;
          const h = Math.max(1, container.clientHeight);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        })
      : null;
    if (ro) ro.observe(container);

    let rafId = 0;
    let lastTime = performance.now();
    let lastHudSyncTime = 0;
    let lastHeadlessRenderTime = 0;

    const triggerEndOfRun = (reason: 'tempo' | 'coracoes') => {
      const s = simRef.current;
      s.screen = 'gameover';
      document.body.dataset.state = 'gameover';
      soundFX.playGameOver();

      const distanceMeters = Math.round(Math.abs(s.playerZ));
      const finalScore = calculateFinalScore({
        coins: s.coins,
        deliveries: s.deliveries,
        caramelosSpooked: s.caramelo.totalSpookedCount,
        distanceMeters,
      });

      const best = Math.max(s.highScore, finalScore);
      setHud(prev=>({...prev,hearts:s.hearts,timeRemaining:s.timeRemaining,coins:s.coins,deliveries:s.deliveries,speedKmh:0}));
      s.highScore = best;
      try {
        window.localStorage.setItem(HIGH_SCORE_STORAGE_KEY, String(best));
      } catch {
        // ignore
      }

      setEndStats({
        reason,
        score: finalScore,
        highScore: best,
        deliveries: s.deliveries,
        coins: s.coins,
        caramelosSpooked: s.caramelo.totalSpookedCount,
        distanceMeters,
      });
      setScreenState('gameover');
    };

    const animate = (now: number) => {
      rafId = requestAnimationFrame(animate);

      if (isHeadless && now - lastHeadlessRenderTime < 55) {
        return;
      }
      lastHeadlessRenderTime = now;

      const rawDt = (now - lastTime) / 1000;
      lastTime = now;
      const dt = Math.min(rawDt, 0.05);
      const elapsed = now * 0.001;

      const s = simRef.current;

      if (s.resetRequested) {
        s.resetRequested = false;
        clearEntities();
        resetResidents();
        for (let i = 0; i < NUM_CHUNKS; i++) {
          chunks[i].position.z = -i * CHUNK_LENGTH + 20;
        }
        for (let z = -28; z >= -160; z -= 22) {
          spawnWaveAhead(z, 0);
          lastSpawnedZ = z;
        }
      }

      // TITLE SCREEN LIVE WORLD SHOWCASE
      if (s.screen === 'title') {
        deliveryZoneRig.root.position.set(0, 0, -250);
        motoboyRig.root.position.set(0, 0, 0);
        motoboyRig.tiltGroup.rotation.z = Math.sin(elapsed * 2.2) * 0.05;
        motoboyRig.tiltGroup.position.y =
          Math.abs(Math.sin(elapsed * 12)) * 0.02;
        motoboyRig.frontWheel.rotation.x -= dt * 4;
        motoboyRig.rearWheel.rotation.x -= dt * 4;

        carameloRig.root.visible = true;
        carameloRig.dizzyHalo.visible = false;
        carameloRig.root.position.set(
          2.1,
          Math.abs(Math.sin(elapsed * 6)) * 0.22,
          -2.4
        );
        carameloRig.root.rotation.y = Math.PI -0.5 + Math.sin(elapsed * 2) * 0.2;
        carameloRig.tailMesh.rotation.z = Math.sin(elapsed * 18) * 0.45;
        carameloRig.jawGroup.rotation.x =
          Math.max(0, Math.sin(elapsed * 8)) * 0.35;

        camera.position.set(
          Math.sin(elapsed * 0.45) * 1.4,
          3.3 + Math.sin(elapsed * 0.8) * 0.18,
          5.2
        );
        camera.lookAt(0.35, 1.15, -3.5);

        renderer.render(scene, camera);
        return;
      }

      if (s.screen === 'paused' || s.screen === 'gameover') {
        renderer.render(scene, camera);
        return;
      }

      // --- PLAYING STATE ---
      if (s.toastTimer > 0) {
        s.toastTimer -= dt;
        if (s.toastTimer <= 0) {
          s.toastMessage = null;
        }
      }

      if (s.hitstopTimer > 0) {
        s.hitstopTimer -= dt;
      }

      const simDt = s.hitstopTimer > 0 ? dt * 0.15 : dt;

      // Countdown timer
      s.timeRemaining = Math.max(0, s.timeRemaining - simDt);
      if (s.timeRemaining <= 0) {
        triggerEndOfRun('tempo');
        return;
      }

      s.hornCooldown = Math.max(0, s.hornCooldown - simDt);
      s.invulnerableTimer = Math.max(0, s.invulnerableTimer - simDt);
      s.carameloSlowTimer = Math.max(0, s.carameloSlowTimer - simDt);
      s.cameraTrauma = Math.max(0, s.cameraTrauma - dt * 2.2);

      // Handle Horn Fire Request
      if (s.triggerHornRequested) {
        s.triggerHornRequested = false;
        if (canFireHorn(s.hornCooldown)) {
          s.hornCooldown = HORN_COOLDOWN;
          soundFX.playHorn();

          // Activate 4 expanding sonic wave rings staggered slightly
          let activated = 0;
          for (const sr of sonicRings) {
            if (!sr.active && activated < 4) {
              sr.active = true;
              sr.age = -activated * 0.07;
              sr.maxAge = 0.9;
              activated++;
            }
          }

          for(const resident of [lady,seller,...soccer.people]){const z=resident===lady?ladyZ:resident===seller?sellerZ:soccerZ;const dist=s.playerZ-z;if(dist>0&&dist<24)resident.reaction=1.0;}
          if(s.playerZ-catZ>0&&s.playerZ-catZ<24)mingau.userData.reaction=1;
          // Check if Caramelo is within range and in direction of the shot
          if (doesHornSpookCaramelo(s.playerX, s.caramelo)) {
            s.caramelo = triggerCarameloSpook(s.caramelo);
            s.spookVariant=(s.caramelo.totalSpookedCount-1)%5;
            s.spookAge=0;
            soundFX.playCarameloSpooked();
            spawnParticles(
              s.caramelo.x,
              0.9,
              s.playerZ - s.caramelo.distanceAhead,
              0xf3e6cf,
              10
            );
            showToast(
              ['🐕 Pulo de pipoca! O caramelo se assustou!','🐕 Orelhas de antena! BIBI, caramelo!','🐕 Virou estátua com a patinha no ar!','🐕 Cadê o barulho? Olhou pro lado errado!','🐕 Que susto! Sacudiu e disfarçou!'][s.spookVariant] + ' +80 pts',
              2.6
            );
          } else {
            showToast('🔊 BIBI! É só um susto de brincadeira!', 1.4);
          }
        }
      }

      // Check Delivery Zone status
      s.inDeliveryZone = isPlayerInDeliveryZone(s.playerZ, s.deliveryTargetZ);

      if (s.playerZ - s.deliveryTargetZ < -18) {
        s.deliveryTargetZ = s.playerZ - 110;
        showToast(
          '📢 Passou direto do portão! Cliente chamou 100m à frente!',
          2.8
        );
      }

      // Handle Delivery Completion Request
      if (s.triggerDeliveryRequested) {
        s.triggerDeliveryRequested = false;
        if (s.inDeliveryZone) {
          const dest = getDeliveryDestination(s.deliveries);
          s.coins += dest.rewardCoins;
          s.deliveries += 1;
          s.timeRemaining = Math.min(90, s.timeRemaining + dest.bonusTime);
          s.deliveryStartZ = s.playerZ;
          const nextDist = getDeliveryDistanceForStage(s.deliveries);
          s.deliveryTargetZ = s.playerZ - nextDist;
          s.inDeliveryZone = false;

          soundFX.playDeliverySuccess();
          spawnParticles(s.playerX, 1.4, s.playerZ - 1.5, 0x10b981, 28);
          const nextDest = getDeliveryDestination(s.deliveries);
          showToast(
            `✅ Entregue p/ ${dest.customerName}! +${dest.rewardCoins} moedas · Próximo: ${nextDest.customerName}`,
            3.5
          );
        }
      }

      // Acceleration & Speed
      let targetMaxSpeed = getTargetMaxSpeed(
        s.deliveries,
        s.inDeliveryZone,
        s.carameloSlowTimer
      );
      const braking=s.brake||s.keysPressed.has('ArrowDown')||s.keysPressed.has('KeyS');
      if(braking)targetMaxSpeed=0;
      const ladyDistance=s.playerZ-ladyZ;
      if(ladyDistance<75&&ladyDistance>-8&&ladyTime<9){
        if(!ladyWarned){showToast('🚶 Dona Lurdes vai atravessar. Segure o FREIO!',3);ladyWarned=true;}
        ladyTime+=simDt;
        if(ladyDistance<16&&ladyDistance>0){targetMaxSpeed=0;if(ladyDistance<7)s.speed=0;}
        if(braking&&!ladyReward&&ladyDistance<26&&s.speed<3){ladyReward=true;s.coins+=5;showToast('👵 “Obrigada, meu filho!” +5 moedas por dar passagem',3);}
      }
      s.speed = THREE.MathUtils.damp(s.speed, targetMaxSpeed, braking?9:3.2, simDt);
      lady.root.position.set(-6+Math.min(9,ladyTime)*1.35,.15,ladyZ);crosswalk.position.z=ladyZ;
      animateResident(lady,elapsed,simDt,ladyTime>0&&ladyTime<9);
      seller.root.position.set(-6.2,.14,sellerZ);animateResident(seller,elapsed,simDt);
      if(!sellerUsed&&Math.abs(s.playerZ-sellerZ)<14&&braking&&s.speed<4){sellerUsed=true;s.hearts=Math.min(3,s.hearts+1);s.timeRemaining=Math.min(90,s.timeRemaining+6);soundFX.playDeliverySuccess();showToast('🍦 Pausa com Seu Nilo: moto recuperada e +6s!',3);}
      soccer.root.position.set(6.3,.14,soccerZ);soccer.people.forEach((a,i)=>{animateResident(a,elapsed+i,simDt,true);a.arms[0].rotation.x=Math.sin(elapsed*3+i)*.3;});
      mingau.position.set(-5.3,.14,catZ);const catScare=Math.max(0,(mingau.userData.reaction||0)-simDt);mingau.userData.reaction=catScare;mingau.scale.y=catScare>0?1.05:1;mingau.userData.tail.rotation.x=Math.sin(elapsed*2)*.1+(catScare>0?.5:0);
      if(ladyZ-s.playerZ>30){ladyZ=s.playerZ-480;ladyTime=0;ladyReward=false;ladyWarned=false;}
      if(sellerZ-s.playerZ>30){sellerZ=s.playerZ-480;sellerUsed=false;}
      if(soccerZ-s.playerZ>30)soccerZ=s.playerZ-480;
      if(catZ-s.playerZ>30)catZ=s.playerZ-480;

      // Lateral Steering
      let steerInput = s.touchSteerDir;
      if (s.keysPressed.has('ArrowLeft') || s.keysPressed.has('KeyA')) {
        steerInput -= 1;
      }
      if (s.keysPressed.has('ArrowRight') || s.keysPressed.has('KeyD')) {
        steerInput += 1;
      }

      const lateralMaxSpeed = 10.5;
      if (steerInput !== 0) {
        s.playerX = clampPlayerX(
          s.playerX + steerInput * lateralMaxSpeed * simDt
        );
      }
      const targetLean = -steerInput * 0.34 - s.targetSteerVelX * 0.04;
      s.currentLeanZ = THREE.MathUtils.damp(
        s.currentLeanZ,
        THREE.MathUtils.clamp(targetLean, -0.42, 0.42),
        10,
        simDt
      );
      s.targetSteerVelX = THREE.MathUtils.damp(
        s.targetSteerVelX,
        0,
        12,
        simDt
      );

      // Move Motorcycle Forward (-Z)
      s.playerZ -= s.speed * simDt;

      // Update Motoboy 3D Rig
      motoboyRig.root.position.set(s.playerX, 0, s.playerZ);
      motoboyRig.tiltGroup.rotation.z = s.currentLeanZ;
      motoboyRig.tiltGroup.rotation.y = s.currentLeanZ * 0.35;
      motoboyRig.tiltGroup.position.y =
        Math.abs(Math.sin(s.playerZ * 1.8)) * 0.025;
      motoboyRig.frontWheel.rotation.x -= s.speed * simDt * 1.8;
      motoboyRig.rearWheel.rotation.x -= s.speed * simDt * 1.8;

      if (s.invulnerableTimer > 0) {
        motoboyRig.root.visible = true;
        motoboyRig.tiltGroup.rotation.z +=
          Math.sin(s.invulnerableTimer * 35) * 0.08;
      } else {
        motoboyRig.root.visible = true;
      }

      // Position Delivery Zone Rig
      deliveryZoneRig.root.position.set(0, 0, s.deliveryTargetZ);
      deliveryZoneRig.beaconArrow.position.y =
        6.8 + Math.sin(elapsed * 5) * 0.55;
      deliveryZoneRig.beaconArrow.rotation.y = elapsed * 2.2;
      deliveryZoneRig.customerGroup.rotation.z = Math.sin(elapsed * 8) * 0.08;

      // Recycle Neighborhood Road Chunks seamlessly
      for (const chunk of chunks) {
        if (chunk.position.z - s.playerZ > CHUNK_LENGTH * 0.85) {
          chunk.position.z -= NUM_CHUNKS * CHUNK_LENGTH;
        }
      }

      // Spawn new Obstacles & Coins ahead
      const spawnHorizonZ = s.playerZ - 155;
      const waveSpacing = Math.max(15, 22 - s.deliveries * 1.1);
      while (lastSpawnedZ > spawnHorizonZ) {
        lastSpawnedZ -= waveSpacing;
        spawnWaveAhead(lastSpawnedZ, s.deliveries);
      }

      // Update & Check Obstacles
      for (let i = activeObstacles.length - 1; i >= 0; i--) {
        const ob = activeObstacles[i];
        if(ob.data.type==='bola'){ob.data.x=2.7*Math.sin(elapsed*1.1+ob.data.id);ob.mesh.position.x=ob.data.x;ob.mesh.rotation.z+=simDt*3;}
        if(ob.data.type==='caminhao'){ob.data.z-=simDt*2.5;ob.mesh.position.z=ob.data.z;}
        if (ob.data.z - s.playerZ > 18) {
          scene.remove(ob.mesh);disposeEntity(ob.mesh);
          activeObstacles.splice(i, 1);
          continue;
        }

        if (
          s.invulnerableTimer <= 0 &&
          checkObstacleCollision(s.playerX, s.playerZ, ob.data)
        ) {
          ob.data.hit = true;
          s.hearts = Math.max(0, s.hearts - 1);
          s.speed *= 0.38;
          s.invulnerableTimer = 1.6;
          s.hitstopTimer = 0.06;
          s.cameraTrauma = 0.65;

          soundFX.playCrash();
          spawnParticles(s.playerX, 0.8, s.playerZ - 0.8, 0xef4444, 22);

          const labelMap: Record<ObstacleType, string> = {
            buraco: '💥 Caiu na cratera da prefeitura! -1 Coração',
            lombada: '💥 Passou voando na lombada! -1 Coração',
            cone: '💥 Atropelou os cones da obra! -1 Coração',
            carro: '🛵 Raspou no carro! A moto perdeu integridade.',
            caminhao:'🚛 Encostou no caminhão. Cuide da moto!',lixeira:'🗑️ Ops, a lixeira! Dê mais espaço.',perua:'🚐 Raspou na perua. Olha o retrovisor!',obra:'🚧 Devagar na obra! Cuide da moto.',carrinho:'🛒 Olha o carrinho de feira!',bola:'⚽ A bola escapou! Atenção à pelada.',
          };
          showToast(labelMap[ob.data.type], 2.5);

          if (s.hearts <= 0) {
            triggerEndOfRun('coracoes');
            return;
          }
        }
      }

      // Update & Check Coins
      for (let i = activeCoins.length - 1; i >= 0; i--) {
        const c = activeCoins[i];
        c.mesh.rotation.y += dt * 3.2;

        if (c.data.z - s.playerZ > 15) {
          scene.remove(c.mesh);
          activeCoins.splice(i, 1);
          continue;
        }

        if (checkCoinCollection(s.playerX, s.playerZ, c.data)) {
          c.data.collected = true;
          c.mesh.visible = false;
          s.coins += 1;
          soundFX.playCoin();
          spawnParticles(c.data.x, 0.8, c.data.z, 0xfacc15, 6);
          scene.remove(c.mesh);
          activeCoins.splice(i, 1);
        }
      }

      // Step Caramelo Dog AI & Animation
      const carameloStep = stepCarameloDog(
        s.caramelo,
        s.playerX,
        simDt,
        s.deliveries
      );
      s.caramelo = carameloStep.nextCaramelo;

      if (carameloStep.justStartedWarning) {
        showToast('🐕 AU AU! O Caramelo apareceu! Aperte a BUZINA!', 2.4);
      }
      if (carameloStep.justBarked) {
        soundFX.playCarameloBark();
      }
      if (carameloStep.bitPlayer) {
        s.carameloSlowTimer = 2.2;
        s.speed *= 0.48;
        s.cameraTrauma = 0.45;
        soundFX.playCarameloSpooked();
        spawnParticles(s.playerX, 0.5, s.playerZ - 0.8, 0xd9822b, 14);
        showToast(
          '🐕 O caramelo fez graça na frente! A moto desacelerou.',
          2.6
        );
      }

      // Update Caramelo 3D Mesh
      if (s.caramelo.state === 'hidden') {
        carameloRig.root.visible = false;
      } else {
        carameloRig.root.visible = true;
        const dogWorldZ = s.playerZ - s.caramelo.distanceAhead;
        carameloRig.root.position.set(s.caramelo.x, 0, dogWorldZ);

        if (s.caramelo.state === 'spooked') {
          s.spookAge+=simDt;
          const p=Math.min(1,s.spookAge/1.25),hop=Math.sin(p*Math.PI);
          carameloRig.dizzyHalo.visible=false;
          carameloRig.root.rotation.y=Math.PI;
          carameloRig.bodyGroup.rotation.set(0,0,0);
          carameloRig.bodyGroup.position.y=s.spookVariant===0?hop*.45:s.spookVariant===4?Math.abs(Math.sin(p*20))*.04:0;
          carameloRig.headGroup.rotation.y=s.spookVariant===3?Math.sin(p*6)*.6:0;
          carameloRig.headGroup.rotation.z=s.spookVariant===4?Math.sin(p*22)*.13:0;
          carameloRig.legs.forEach((leg,i)=>{leg.rotation.x=s.spookVariant===2&&i===0?-.8:0;});
          const ears=carameloRig.root.userData.ears as THREE.Group[];
          ears[0].rotation.z=s.spookVariant===1?-.4:0;
          ears[1].rotation.z=s.spookVariant===1?.4:-.75;
          carameloRig.jawGroup.rotation.x=hop*.15;
          carameloRig.tailMesh.rotation.z=Math.sin(elapsed*18)*.25;
        } else {
          carameloRig.dizzyHalo.visible = false;
          carameloRig.headGroup.rotation.set(0,0,0);
          const ears=carameloRig.root.userData.ears as THREE.Group[];ears[0].rotation.z=0;ears[1].rotation.z=-.75;
          const lookAngle =
            s.caramelo.state === 'retreating'
              ? s.caramelo.lateralSide * 0.8
              : Math.PI + Math.PI * 0.12 * -s.caramelo.lateralSide;
          carameloRig.root.rotation.y = lookAngle;

          const gallop = elapsed * 24;
          carameloRig.bodyGroup.position.y = Math.abs(Math.sin(gallop)) * 0.14;
          carameloRig.bodyGroup.rotation.x = Math.cos(gallop) * 0.12;
          carameloRig.legs[0].rotation.x = Math.sin(gallop) * 0.75;
          carameloRig.legs[1].rotation.x = Math.sin(gallop + Math.PI) * 0.75;
          carameloRig.legs[2].rotation.x = Math.sin(gallop + Math.PI) * 0.75;
          carameloRig.legs[3].rotation.x = Math.sin(gallop) * 0.75;
          carameloRig.tailMesh.rotation.z = Math.sin(elapsed * 22) * 0.5;
          carameloRig.jawGroup.rotation.x =
            Math.max(0, Math.sin(elapsed * 14)) * 0.42;
        }
      }

      // Update Sonic Wave Rings (shooting forward from the motorcycle horn)
      for (const sr of sonicRings) {
        if (!sr.active) continue;
        sr.age += dt;
        if (sr.age < 0) {
          sr.mesh.visible = false;
          continue;
        }
        if (sr.age >= sr.maxAge) {
          sr.active = false;
          sr.mesh.visible = false;
          continue;
        }
        sr.mesh.visible = true;
        const progress = sr.age / sr.maxAge;
        const forwardDist = progress * 19;
        sr.mesh.position.set(
          s.playerX,
          1.05,
          s.playerZ - 1.3 - forwardDist
        );
        const scale = 0.85 + progress * 4.2;
        sr.mesh.scale.set(scale, scale, 1);
        const mat = sr.mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = (1 - progress * 0.85) * 0.92;
      }

      // Update Pooled Particle Bursts
      let anyParticleUpdated = false;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particleData[i];
        if (!p.active) {
          particleInstanced.setMatrixAt(i, _zeroScaleMatrix);
          continue;
        }
        anyParticleUpdated = true;
        p.age += dt;
        if (p.age >= p.maxAge) {
          p.active = false;
          particleInstanced.setMatrixAt(i, _zeroScaleMatrix);
          continue;
        }
        p.vel.y -= 12.0 * dt;
        p.pos.addScaledVector(p.vel, dt);
        const sFactor = Math.max(0.01, 1 - p.age / p.maxAge);
        _dummyMatrix.makeTranslation(p.pos.x, p.pos.y, p.pos.z);
        _dummyMatrix.scale(new THREE.Vector3(sFactor, sFactor, sFactor));
        particleInstanced.setMatrixAt(i, _dummyMatrix);
      }
      if (anyParticleUpdated) {
        particleInstanced.instanceMatrix.needsUpdate = true;
      }

      // Camera Chase Rig
      const shakeOffset =
        s.cameraTrauma > 0
          ? (Math.random() - 0.5) * s.cameraTrauma * s.cameraTrauma * 0.9
          : 0;
      const desiredCamX = s.playerX * 0.58 + shakeOffset;
      const desiredCamY = 4.35 + Math.abs(shakeOffset) * 0.5;
      const desiredCamZ = s.playerZ + 6.9;

      camera.position.x = THREE.MathUtils.damp(
        camera.position.x,
        desiredCamX,
        8,
        dt
      );
      camera.position.y = THREE.MathUtils.damp(
        camera.position.y,
        desiredCamY,
        8,
        dt
      );
      camera.position.z = desiredCamZ;
      camera.lookAt(s.playerX * 0.35, 1.0, s.playerZ - 14);

      renderer.render(scene, camera);

      if (now - lastHudSyncTime > 95) {
        lastHudSyncTime = now;
        const distRem = Math.max(0, Math.round(s.playerZ - s.deliveryTargetZ));
        const totalStageDist = Math.max(
          1,
          Math.round(s.deliveryStartZ - s.deliveryTargetZ)
        );
        setHud({
          hearts: s.hearts,
          coins: s.coins,
          deliveries: s.deliveries,
          timeRemaining: s.timeRemaining,
          speedKmh: Math.round(s.speed * 3.6),
          distanceToDelivery: distRem,
          totalStageDistance: totalStageDist,
          inDeliveryZone: s.inDeliveryZone,
          hornCooldown: s.hornCooldown,
          carameloState: s.caramelo.state,
          carameloSide: s.caramelo.lateralSide,
          currentDestination: getDeliveryDestination(s.deliveries),
          toastMessage: s.toastMessage,
        });
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
      scene.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of (Array.isArray(o.material)?o.material:[o.material]))m.dispose();}});
      roadTex.dispose();lombadaTex.dispose();deliveryTex.dispose();scene.environment?.dispose();
      renderer.dispose();renderer.domElement.remove();
    };
  }, [showToast]);

  // Touch / Pointer swipe steering handlers on playfield
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (simRef.current.screen !== 'playing') return;
    e.currentTarget.setPointerCapture(e.pointerId);
    simRef.current.touchDragActive = true;
    simRef.current.touchLastClientX = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = simRef.current;
    if (s.screen !== 'playing' || !s.touchDragActive) return;
    const dx = e.clientX - s.touchLastClientX;
    s.touchLastClientX = e.clientX;
    const width = Math.max(320, window.innerWidth);
    const worldDeltaX = (dx / width) * 11.5;
    s.playerX = clampPlayerX(s.playerX + worldDeltaX);
    s.targetSteerVelX = worldDeltaX * 15;
  };

  const handlePointerUp = () => {
    simRef.current.touchDragActive = false;
  };

  const deliveryProgressPct = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        ((hud.totalStageDistance - hud.distanceToDelivery) /
          Math.max(1, hud.totalStageDistance)) *
          100
      )
    )
  );

  const hornReady = hud.hornCooldown <= 0;
  const hornCooldownPct = Math.min(
    100,
    Math.max(0, (hud.hornCooldown / HORN_COOLDOWN) * 100)
  );

  return (
    <main className="game-shell" data-screen={screenState}>
      <div className="world" ref={canvasMountRef} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp} aria-label="Rua em 3D: deslize para pilotar" />
      {screenState === 'title' && <section className="welcome">
        <div className="welcome-copy"><div className="eyebrow"><span className="little-dot"/> UM BAIRRO. MIL HISTÓRIAS.</div><p className="brand-overline">ENTREGAS & RESENHA</p><h1>CORRE DO<br/><em>CARAMELO!</em><span className="paw">✦</span></h1><p className="tagline">A entrega é séria.<br/>O caminho é pura resenha.</p><p className="intro">Pilote pelo bairro, entregue os pedidos e dê aquele <strong>BIBI!</strong> no caramelo. Aqui o susto é só de brincadeira.</p><button className="button primary play-button" onClick={startNewGame}><span>▶</span> Bora entregar! <span>→</span></button><div className="menu-secondary"><button className="button subtle" onClick={()=>setShowInstructionsModal(true)}>Como jogar</button><button className="button subtle" onClick={()=>setShowAlbum(true)}>Conheça o bairro ↗</button></div><div className="welcome-facts"><span>3D <small>de verdade</small></span><span>100% <small>no navegador</small></span><span>0 <small>machucados pela buzina</small></span></div></div>
        <div className="hero-visual" role="img" aria-label="Motoboy e cachorro caramelo no bairro brasileiro"><div className="sticker">ENTREGAS,<br/>DESVIOS E<br/><b>MUITA RESENHA!</b></div><div className="hero-caption"><span className="live-dot"/> O CARAMELO JÁ ESTÁ NA RUA.</div></div>
        <footer className="welcome-footer"><span>CORRE DO CARAMELO! <b>VOL. 01</b></span><span>Celular ou computador · Jogue do seu jeito</span></footer>
      </section>}
      {screenState !== 'title' && <>
        <header className="hud">
          <div className="hud-top"><div className="health" aria-label={'Integridade da moto: '+hud.hearts+' de 3'}>{[0,1,2].map(i=><span className={i<hud.hearts?'heart':'heart empty'} key={i}>♥</span>)}</div><div className="wallet"><span>●</span> <b>{hud.coins}</b><small>moedas</small></div><div className={'clock '+(hud.timeRemaining<12?'urgent':'')}><small>TEMPO</small><b>{Math.ceil(hud.timeRemaining)}<span>s</span></b></div><button className="icon-button" onClick={handleToggleMute} aria-label={isMuted?'Ativar som':'Silenciar som'}><GameIcon name={isMuted?'mute':'sound'}/></button><button className="icon-button" onClick={handleTogglePause} aria-label="Pausar jogo"><GameIcon name="pause"/></button></div>
          <div className="order-card"><div className="order-pin"><GameIcon name="pin"/></div><div className="order-info"><small>PRÓXIMA ENTREGA</small><strong>{hud.currentDestination.customerName}</strong><span>{hud.currentDestination.houseLabel}</span></div><div className="delivery-distance"><b>{hud.distanceToDelivery}</b><small>metros</small></div><div className="route-track"><i style={{width:deliveryProgressPct+'%'}}/></div></div>
          <div className="run-meta"><span>▣ {hud.deliveries} {hud.deliveries===1?'entrega':'entregas'}</span><span>{hud.speedKmh} km/h</span></div>
        </header>
        {hud.toastMessage&&<div className="game-toast" role="status">{hud.toastMessage}</div>}
        {showTutorialBanner&&screenState==='playing'&&<div className="tutorial-chip">Deslize para pilotar · BIBI para o susto · Freie para dar passagem</div>}
        {screenState==='playing'&&<div className="controls" onPointerDown={e=>e.stopPropagation()}>
          <div className="steering-controls"><div className="steering-pair">{[-1,1].map(dir=><button key={dir} className="drive-button" aria-label={dir<0?'Virar à esquerda':'Virar à direita'} onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);simRef.current.touchSteerDir=dir;}} onPointerUp={()=>simRef.current.touchSteerDir=0} onPointerCancel={()=>simRef.current.touchSteerDir=0}>{dir<0?'‹':'›'}</button>)}</div><button className="brake-button" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);simRef.current.brake=true;}} onPointerUp={()=>simRef.current.brake=false} onPointerCancel={()=>simRef.current.brake=false}>FREIO</button></div>
          <div className="delivery-controls">{hud.inDeliveryZone?<button className="button deliver-button" onClick={handleCompleteDelivery}>▣ ENTREGAR</button>:<span className="next-delivery">▣ Entrega a {hud.distanceToDelivery} m</span>}</div>
          <button className={'horn-button '+(hornReady?'ready':'cooling')} onClick={handleFireHorn} disabled={!hornReady} aria-label="Buzinar: dar susto engraçado" style={{'--cooldown':hornCooldownPct+'%'} as React.CSSProperties}><GameIcon name="horn"/><strong>{hornReady?'BIBI!':hud.hornCooldown.toFixed(1)+'s'}</strong><small>{hornReady?'SÓ UM SUSTO':'RECARREGANDO'}</small></button>
        </div>}
      </>}
      {screenState==='paused'&&<div className="modal-backdrop"><section className="modal compact"><span className="eyebrow">UMA PAUSA NA RESENHA</span><h2>Respira, motoca.</h2><p>Seu pedido pode esperar um instante.</p><button className="button primary" onClick={handleTogglePause}>▶ Continuar entrega</button><button className="button subtle" onClick={startNewGame}>Começar de novo</button><button className="text-button" onClick={()=>{simRef.current.screen='title';setScreenState('title');}}>Voltar ao início</button></section></div>}
      {screenState==='gameover'&&<div className="modal-backdrop"><section className="modal results"><div className="eyebrow">FIM DO EXPEDIENTE</div><h2>{endStats.reason==='tempo'?'O tempo voou!':'Hora de uma revisão!'}</h2><p>{endStats.reason==='tempo'?'Amanhã tem mais entrega. E mais caramelo.':'A moto precisa de um cuidado. Bora tentar outra rota?'}</p><div className="score"><strong>{endStats.score.toLocaleString('pt-BR')}</strong><small>PONTOS DE RESENHA</small></div><div className="result-grid"><div><b>{endStats.deliveries}</b><span>entregas</span></div><div><b>{endStats.coins}</b><span>moedas</span></div><div><b>{endStats.caramelosSpooked}</b><span>sustos</span></div><div><b>{endStats.distanceMeters}m</b><span>percorridos</span></div></div><p className="record">Seu recorde: <strong>{endStats.highScore.toLocaleString('pt-BR')} pontos</strong></p><button className="button primary" onClick={startNewGame}>↻ Mais uma corrida!</button><button className="text-button" onClick={()=>{simRef.current.screen='title';setScreenState('title');}}>Voltar ao bairro</button></section></div>}
      {showInstructionsModal&&<div className="modal-backdrop"><section className="modal instructions"><button className="modal-close icon-button" aria-label="Fechar instruções" onClick={()=>setShowInstructionsModal(false)}>×</button><div className="eyebrow">MANUAL DO MOTOCA</div><h2>Pegou o pedido?<br/>Bora pra rua.</h2><ol><li><b>Pilote.</b> Deslize o dedo ou use ← → / A e D. A moto acelera sozinha.</li><li><b>Dê passagem.</b> Segure FREIO ou ↓ / S para a Dona Lurdes atravessar.</li><li><b>Mande um BIBI!</b> Toque na buzina ou aperte espaço. O caramelo só leva um susto engraçado.</li><li><b>Entregue.</b> Ao entrar na área marcada, toque em ENTREGAR ou aperte E. Cada pedido dá moedas e mais tempo.</li></ol><p className="note">P ou Esc pausa · M controla o som · Evite os obstáculos para cuidar da moto.</p><button className="button primary" onClick={()=>setShowInstructionsModal(false)}>Entendi. Partiu!</button></section></div>}
      {showAlbum&&<div className="album"><header><div><span className="eyebrow">A TURMA ESTÁ TODA AQUI</span><h2>Gente boa. Rua viva.</h2><p>Conheça os personagens e elementos do bairro.</p></div><button className="icon-button" aria-label="Fechar álbum" onClick={()=>setShowAlbum(false)}>×</button></header><div className="album-grid">{ALBUM.map(a=><figure key={a.file}><img src={'./artes/'+a.file+'.png'} alt={a.name} loading="lazy"/><figcaption><strong>{a.name}</strong><span>{a.desc}</span></figcaption></figure>)}</div><button className="button primary" onClick={()=>{setShowAlbum(false);startNewGame();}}>Conheci a turma. Bora jogar!</button></div>}
    </main>
  );
}

const ALBUM=[
 {file:'01-caminhao-de-lixo',name:'Caminhão da coleta',desc:'Grandão na rua. Espere uma boa hora para passar.'},
 {file:'02-lixeira',name:'Lixeira de rua',desc:'Perto do meio-fio, também pede atenção.'},
 {file:'03-dona-lurdes',name:'Dona Lurdes',desc:'Dê passagem na faixa e ganhe um agradecimento.'},
 {file:'04-turma-da-pelada',name:'Turma da pelada',desc:'A bola pode escapar. Fique de olho!'},
 {file:'05-seu-nilo-picole',name:'Seu Nilo',desc:'Freie perto do carrinho para fazer uma pausa e recuperar a moto.'},
 {file:'06-carrinho-de-feira',name:'Carrinho de feira',desc:'Pequeno, mas pode aparecer no caminho.'},
 {file:'07-perua-de-entregas',name:'Perua de entregas',desc:'Uma descarga de mercadorias pode ocupar a faixa.'},
 {file:'08-gato-do-muro',name:'Mingau',desc:'Um susto, o rabo arrepiado e muita pose.'},
 {file:'09-obra-da-esquina',name:'Obra da esquina',desc:'Siga a passagem livre entre cones e cavaletes.'},
];
function GameIcon({name}:{name:string}){
 const paths:Record<string,React.ReactNode>={pause:<><path d="M8 5v14M16 5v14"/></>,sound:<><path d="M4 9h4l5-4v14l-5-4H4zM17 8q5 4 0 8M19 5q8 7 0 14"/></>,mute:<><path d="M4 9h4l5-4v14l-5-4H4zM17 9l5 6M22 9l-5 6"/></>,horn:<><path d="M4 10h5l9-5v14l-9-5H4zM8 14l2 6h3l-2-5M21 8q3 4 0 8"/></>,pin:<><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0z"/><circle cx="12" cy="10" r="2"/></>};
 return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
