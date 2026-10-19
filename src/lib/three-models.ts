import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
function roundedBox(w:number,h:number,d:number){return new RoundedBoxGeometry(w,h,d,1,Math.min(.075,w/4,h/4,d/4));}
import type { ObstacleType } from './game-rules';

export interface MotoboyRig {
  root: THREE.Group;
  tiltGroup: THREE.Group;
  frontWheel: THREE.Group;
  rearWheel: THREE.Group;
  headlightMesh: THREE.Mesh;
  backpackMesh: THREE.Group;
}

export interface CarameloRig {
  root: THREE.Group;
  bodyGroup: THREE.Group;
  headGroup: THREE.Group;
  jawGroup: THREE.Group;
  tailMesh: THREE.Mesh;
  legs: [THREE.Group, THREE.Group, THREE.Group, THREE.Group];
  dizzyHalo: THREE.Group;
}

export function createRoadTexture(maxAnisotropy: number = 4): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Asphalt base
  ctx.fillStyle = '#262930';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle asphalt pebble noise
  for (let i = 0; i < 750; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const v = 30 + Math.floor(Math.random() * 24);
    ctx.fillStyle = `rgb(${v},${v + 2},${v + 5})`;
    ctx.fillRect(x, y, 2, 2);
  }

  // Yellow side curb lines
  ctx.fillStyle = '#b99c68';
  ctx.fillRect(14, 0, 8, 512);
  ctx.fillRect(490, 0, 8, 512);

  // Two lane dividers (3 lanes total: Left, Center, Right)
  ctx.fillStyle = '#f8fafc';
  const laneX = [176, 336];
  for (const x of laneX) {
    for (let y = 24; y < 512; y += 128) {
      ctx.fillRect(x - 4, y, 8, 68);
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = maxAnisotropy;
  return tex;
}

export function createLombadaTexture(maxAnisotropy: number = 4): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#1e293b';
  ctx.fillRect(0, 0, 256, 128);

  ctx.fillStyle = '#facc15';
  for (let x = -128; x < 384; x += 48) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 24, 0);
    ctx.lineTo(x + 88, 128);
    ctx.lineTo(x + 64, 128);
    ctx.closePath();
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = maxAnisotropy;
  return tex;
}

export function createDeliveryZoneTexture(maxAnisotropy: number = 4): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#73866a';
  ctx.fillRect(0, 0, 256, 256);

  ctx.fillStyle = '#50654f';
  const size = 32;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c) % 2 === 0) {
        ctx.fillRect(c * size, r * size, size, size);
      }
    }
  }

  // Border
  ctx.strokeStyle = '#f3e6cf';
  ctx.lineWidth = 12;
  ctx.strokeRect(6, 6, 244, 244);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAnisotropy;
  return tex;
}

export function createContactShadow(radiusX: number, radiusZ: number): THREE.Mesh {
  const geo = new THREE.CircleGeometry(1, 20);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    color: 0x090d16,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.scale.set(radiusX, 1, radiusZ);
  mesh.position.y = 0.015;
  return mesh;
}

export function createMotoboyGroup(): MotoboyRig {
  const root = new THREE.Group();
  const tiltGroup = new THREE.Group();
  root.add(tiltGroup);

  // Contact shadow
  root.add(createContactShadow(0.65, 1.35));

  // Shared materials with varied roughness & metalness
  const redPaintMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    roughness: 0.22,
    metalness: 0.45,
  });
  const darkFrameMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.72,
    metalness: 0.25,
  });
  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    roughness: 0.18,
    metalness: 0.85,
  });
  const tireMat = new THREE.MeshStandardMaterial({
    color: 0x111827,
    roughness: 0.88,
    metalness: 0.05,
  });
  const seatMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.65,
    metalness: 0.1,
  });

  // Helper to build a wheel
  const buildWheel = () => {
    const wg = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.11, 12, 20), tireMat);
    tire.rotation.y = Math.PI / 2;
    wg.add(tire);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.12, 12), chromeMat);
    rim.rotation.z = Math.PI / 2;
    wg.add(rim);

    // Cross spokes so spin is visible
    const spoke1 = new THREE.Mesh(roundedBox(0.14, 0.4, 0.05), darkFrameMat);
    const spoke2 = new THREE.Mesh(roundedBox(0.14, 0.05, 0.4), darkFrameMat);
    wg.add(spoke1, spoke2);
    return wg;
  };

  const frontWheel = buildWheel();
  frontWheel.position.set(0, 0.34, -0.78);
  tiltGroup.add(frontWheel);

  const rearWheel = buildWheel();
  rearWheel.position.set(0, 0.34, 0.75);
  tiltGroup.add(rearWheel);

  // Engine & lower chassis
  const engineBlock = new THREE.Mesh(roundedBox(0.34, 0.38, 0.65), darkFrameMat);
  engineBlock.position.set(0, 0.52, 0.05);
  tiltGroup.add(engineBlock);

  // Chrome exhaust pipe along right side
  const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.95, 10), chromeMat);
  exhaust.rotation.x = Math.PI / 2 - 0.12;
  exhaust.position.set(0.24, 0.42, 0.48);
  tiltGroup.add(exhaust);

  // Fuel tank (iconic Brazilian CG 160 red tank)
  const tank = new THREE.Mesh(roundedBox(0.42, 0.32, 0.62), redPaintMat);
  tank.position.set(0, 0.85, -0.18);
  tiltGroup.add(tank);

  // Seat
  const seat = new THREE.Mesh(roundedBox(0.38, 0.16, 0.72), seatMat);
  seat.position.set(0, 0.82, 0.38);
  tiltGroup.add(seat);

  // Rear fender & glowing red taillight
  const rearFender = new THREE.Mesh(roundedBox(0.32, 0.12, 0.28), redPaintMat);
  rearFender.position.set(0, 0.76, 0.82);
  tiltGroup.add(rearFender);

  const tailLight = new THREE.Mesh(
    roundedBox(0.22, 0.09, 0.06),
    new THREE.MeshStandardMaterial({
      color: 0xff2222,
      emissive: 0xff0000,
      emissiveIntensity: 1.4,
      roughness: 0.2,
    })
  );
  tailLight.position.set(0, 0.78, 0.96);
  tiltGroup.add(tailLight);

  // Front forks & handlebar
  const forkLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.75, 8), chromeMat);
  forkLeft.position.set(-0.14, 0.68, -0.64);
  forkLeft.rotation.x = 0.28;
  const forkRight = forkLeft.clone();
  forkRight.position.x = 0.14;
  tiltGroup.add(forkLeft, forkRight);

  const handlebar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.78, 8), chromeMat);
  handlebar.rotation.z = Math.PI / 2;
  handlebar.position.set(0, 1.06, -0.52);
  tiltGroup.add(handlebar);

  // Headlight
  const headlightMesh = new THREE.Mesh(
    roundedBox(0.24, 0.18, 0.16),
    new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      emissive: 0xd5b171,
      emissiveIntensity: 1.5,
      roughness: 0.15,
    })
  );
  headlightMesh.position.set(0, 0.95, -0.68);
  tiltGroup.add(headlightMesh);

  // --- MOTOBOY RIDER ---
  const jeansMat = new THREE.MeshStandardMaterial({
    color: 0x1d4ed8,
    roughness: 0.8,
    metalness: 0.05,
  });
  const jacketMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.6,
    metalness: 0.15,
  });
  const helmetMat = new THREE.MeshStandardMaterial({
    color: 0xd5b171,
    roughness: 0.18,
    metalness: 0.35,
  });
  const visorMat = new THREE.MeshStandardMaterial({
    color: 0x020617,
    roughness: 0.08,
    metalness: 0.9,
  });

  // Legs
  const legLeft = new THREE.Mesh(roundedBox(0.16, 0.52, 0.22), jeansMat);
  legLeft.position.set(-0.22, 0.68, 0.08);
  legLeft.rotation.x = -0.35;
  const legRight = legLeft.clone();
  legRight.position.x = 0.22;
  tiltGroup.add(legLeft, legRight);

  // Torso
  const torso = new THREE.Mesh(roundedBox(0.44, 0.56, 0.28), jacketMat);
  torso.position.set(0, 1.18, 0.14);
  torso.rotation.x = -0.22;
  tiltGroup.add(torso);

  // Arms reaching to handlebars
  const armLeft = new THREE.Mesh(roundedBox(0.13, 0.13, 0.52), jacketMat);
  armLeft.position.set(-0.26, 1.18, -0.2);
  armLeft.rotation.x = 0.25;
  const armRight = armLeft.clone();
  armRight.position.x = 0.26;
  tiltGroup.add(armLeft, armRight);

  // Helmet & Visor
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 14), helmetMat);
  helmet.position.set(0, 1.6, 0.04);
  tiltGroup.add(helmet);

  const visor = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), visorMat);
  visor.position.set(0, 1.61, -0.06);
  visor.scale.set(0.95, 0.55, 0.95);
  tiltGroup.add(visor);

  // --- DELIVERY BACKPACK ("MOCHILA DE ENTREGAS") ---
  const backpackMesh = new THREE.Group();
  const bagMat = new THREE.MeshStandardMaterial({
    color: 0xdc2626,
    roughness: 0.45,
    metalness: 0.1,
  });
  const reflectorMat = new THREE.MeshStandardMaterial({
    color: 0xfef08a,
    emissive: 0xfde047,
    emissiveIntensity: 0.45,
    roughness: 0.3,
  });

  const bagBox = new THREE.Mesh(roundedBox(0.58, 0.58, 0.48), bagMat);
  backpackMesh.add(bagBox);

  // Top lid flap
  const bagLid = new THREE.Mesh(roundedBox(0.61, 0.1, 0.51), bagMat);
  bagLid.position.y = 0.28;
  backpackMesh.add(bagLid);

  // Reflective strips on back and sides
  const backStrip = new THREE.Mesh(roundedBox(0.48, 0.1, 0.03), reflectorMat);
  backStrip.position.set(0, 0.05, 0.24);
  const backStrip2 = backStrip.clone();
  backStrip2.position.y = -0.14;
  backpackMesh.add(backStrip, backStrip2);

  backpackMesh.position.set(0, 1.28, 0.52);
  tiltGroup.add(backpackMesh);

  return {
    root,
    tiltGroup,
    frontWheel,
    rearWheel,
    headlightMesh,
    backpackMesh,
  };
}

export function createCarameloGroup(): CarameloRig {
  const root = new THREE.Group();
  root.add(createContactShadow(0.45, 0.65));

  const bodyGroup = new THREE.Group();
  root.add(bodyGroup);

  const caramelFurMat = new THREE.MeshStandardMaterial({
    color: 0xd9822b,
    roughness: 0.78,
    metalness: 0.05,
  });
  const lightCaramelMat = new THREE.MeshStandardMaterial({
    color: 0xf3b562,
    roughness: 0.82,
    metalness: 0.05,
  });
  const darkSnoutMat = new THREE.MeshStandardMaterial({
    color: 0x7c3f11,
    roughness: 0.65,
    metalness: 0.08,
  });
  const noseMat = new THREE.MeshStandardMaterial({
    color: 0x111827,
    roughness: 0.2,
    metalness: 0.3,
  });
  const collarMat = new THREE.MeshStandardMaterial({
    color: 0x16a34a,
    roughness: 0.4,
    metalness: 0.2,
  });
  const tongueMat = new THREE.MeshStandardMaterial({
    color: 0xf43f5e,
    roughness: 0.4,
  });

  // Main torso
  const torso = new THREE.Mesh(roundedBox(0.44, 0.4, 0.76), caramelFurMat);
  torso.position.set(0, 0.48, 0);
  bodyGroup.add(torso);

  // Chest patch
  const chest = new THREE.Mesh(roundedBox(0.36, 0.32, 0.2), lightCaramelMat);
  chest.position.set(0, 0.46, -0.32);
  bodyGroup.add(chest);

  // Collar
  const collar = new THREE.Mesh(roundedBox(0.46, 0.14, 0.16), collarMat);
  collar.position.set(0, 0.62, -0.28);
  bodyGroup.add(collar);

  // Head group
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.74, -0.36);
  bodyGroup.add(headGroup);

  const cranium = new THREE.Mesh(roundedBox(0.4, 0.36, 0.38), caramelFurMat);
  headGroup.add(cranium);

  // Snout (upper)
  const snout = new THREE.Mesh(roundedBox(0.24, 0.16, 0.28), darkSnoutMat);
  snout.position.set(0, -0.04, -0.26);
  headGroup.add(snout);

  const nose = new THREE.Mesh(roundedBox(0.11, 0.09, 0.08), noseMat);
  nose.position.set(0, 0.01, -0.4);
  headGroup.add(nose);

  // Articulated lower jaw + pink tongue for barking!
  const jawGroup = new THREE.Group();
  jawGroup.position.set(0, -0.11, -0.16);
  const lowerJaw = new THREE.Mesh(roundedBox(0.2, 0.08, 0.24), darkSnoutMat);
  lowerJaw.position.set(0, 0, -0.08);
  const tongue = new THREE.Mesh(roundedBox(0.12, 0.04, 0.22), tongueMat);
  tongue.position.set(0, 0.04, -0.11);
  jawGroup.add(lowerJaw, tongue);
  headGroup.add(jawGroup);

  // Eyes
  const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const pupilMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
  [-0.12, 0.12].forEach((ex) => {
    const eyeW = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), eyeWhiteMat);
    eyeW.position.set(ex, 0.07, -0.18);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.038, 8, 8), pupilMat);
    pupil.position.set(ex, 0.07, -0.23);
    headGroup.add(eyeW, pupil);
  });

  // Floppy Ears
  const earGeo = roundedBox(0.1, 0.24, 0.16);
  const earLeft = new THREE.Mesh(earGeo, darkSnoutMat);
  earLeft.position.set(-0.22, 0.06, -0.02);
  earLeft.rotation.z = 0.35;
  const earRight = earLeft.clone();
  earRight.position.x = 0.22;
  earRight.rotation.z = -0.35;
  headGroup.add(earLeft, earRight);

  // Wagging Tail
  const tailMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.055, 0.38, 8),
    caramelFurMat
  );
  tailMesh.position.set(0, 0.68, 0.42);
  tailMesh.rotation.x = 0.65;
  bodyGroup.add(tailMesh);

  // 4 Articulated Legs
  const makeLeg = (x: number, z: number) => {
    const lg = new THREE.Group();
    lg.position.set(x, 0.32, z);
    const limb = new THREE.Mesh(roundedBox(0.12, 0.34, 0.12), caramelFurMat);
    limb.position.y = -0.14;
    const paw = new THREE.Mesh(roundedBox(0.13, 0.08, 0.16), lightCaramelMat);
    paw.position.set(0, -0.3, -0.02);
    lg.add(limb, paw);
    bodyGroup.add(lg);
    return lg;
  };

  const legs: [THREE.Group, THREE.Group, THREE.Group, THREE.Group] = [
    makeLeg(-0.15, -0.26), // Front Left
    makeLeg(0.15, -0.26),  // Front Right
    makeLeg(-0.15, 0.26),  // Back Left
    makeLeg(0.15, 0.26),   // Back Right
  ];

  // Dizzy Halo when spooked by the Sonic Horn
  const dizzyHalo = new THREE.Group();
  dizzyHalo.position.set(0, 1.15, -0.32);
  dizzyHalo.visible = false;
  const starMat = new THREE.MeshBasicMaterial({ color: 0xd5b171 });
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.09, 0), starMat);
    star.position.set(Math.cos(angle) * 0.28, 0, Math.sin(angle) * 0.28);
    dizzyHalo.add(star);
  }
  root.add(dizzyHalo);

  return {
    root,
    bodyGroup,
    headGroup,
    jawGroup,
    tailMesh,
    legs,
    dizzyHalo,
  };
}

export function createObstacleMesh(
  type: ObstacleType,
  lombadaTex: THREE.Texture
): THREE.Group {
  const group = new THREE.Group();

  if (type === 'lombada') {
    // Brazilian striped speed bump
    const geo = new THREE.CylinderGeometry(0.32, 0.32, 3.1, 14, 1, false, 0, Math.PI);
    geo.rotateZ(Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({
      map: lombadaTex,
      color: 0xffffff,
      roughness: 0.75,
      metalness: 0.1,
    });
    const bump = new THREE.Mesh(geo, mat);
    bump.scale.set(1, 0.48, 1.2);
    group.add(bump);
  } else if (type === 'buraco') {
    // Cracked asphalt pothole with puddle & dirt rim
    const rimGeo = new THREE.RingGeometry(0.55, 0.92, 14);
    rimGeo.rotateX(-Math.PI / 2);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x451a03,
      roughness: 0.95,
    });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.y = 0.025;
    group.add(rim);

    const puddleGeo = new THREE.CircleGeometry(0.58, 14);
    puddleGeo.rotateX(-Math.PI / 2);
    const puddleMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.12,
      metalness: 0.65,
    });
    const puddle = new THREE.Mesh(puddleGeo, puddleMat);
    puddle.position.y = 0.02;
    group.add(puddle);

    // Warning broken asphalt chunks around edge
    const chunkMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 });
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const chunk = new THREE.Mesh(new THREE.DodecahedronGeometry(0.14, 0), chunkMat);
      chunk.position.set(Math.cos(a) * 0.76, 0.09, Math.sin(a) * 0.72);
      group.add(chunk);
    }
  } else if (type === 'cone') {
    // Pair of orange/white traffic cones + wooden bar
    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xb96045,
      roughness: 0.45,
    });
    const whiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      emissive: 0xffffff,
      emissiveIntensity: 0.25,
      roughness: 0.3,
    });

    [-0.52, 0.52].forEach((cx) => {
      const cGroup = new THREE.Group();
      cGroup.position.set(cx, 0, 0);
      const base = new THREE.Mesh(roundedBox(0.46, 0.06, 0.46), orangeMat);
      base.position.y = 0.03;
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.72, 12), orangeMat);
      cone.position.y = 0.38;
      const stripe = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.14, 0.16, 12),
        whiteMat
      );
      stripe.position.y = 0.42;
      cGroup.add(base, cone, stripe);
      group.add(cGroup);
    });

    // Crossbar plank between cones
    const plank = new THREE.Mesh(
      roundedBox(1.18, 0.14, 0.08),
      new THREE.MeshStandardMaterial({ color: 0xd5b171, roughness: 0.6 })
    );
    plank.position.y = 0.52;
    group.add(plank);
  } else if (type === 'carro') {
    // Double-parked Brazilian compact hatchback car with hazard lights
    group.add(createContactShadow(1.15, 2.1));
    const carColors = [0x71939a, 0xd5b171, 0x73866a, 0xf8fafc, 0xb96045];
    const bodyColor = carColors[Math.floor(Math.random() * carColors.length)];
    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.25,
      metalness: 0.35,
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.85,
    });
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.85,
    });
    const hazardMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 1.5,
    });

    const lowerBody = new THREE.Mesh(roundedBox(1.75, 0.62, 3.4), bodyMat);
    lowerBody.position.y = 0.52;
    group.add(lowerBody);

    const cabin = new THREE.Mesh(roundedBox(1.52, 0.56, 1.85), bodyMat);
    cabin.position.set(0, 1.08, 0.15);
    group.add(cabin);

    const windshield = new THREE.Mesh(roundedBox(1.54, 0.46, 1.65), glassMat);
    windshield.position.set(0, 1.09, 0.15);
    group.add(windshield);

    // 4 Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.24, 12);
    wheelGeo.rotateZ(Math.PI / 2);
    [
      [-0.86, 0.32, -1.05],
      [0.86, 0.32, -1.05],
      [-0.86, 0.32, 1.05],
      [0.86, 0.32, 1.05],
    ].forEach(([wx, wy, wz]) => {
      const w = new THREE.Mesh(wheelGeo, tireMat);
      w.position.set(wx, wy, wz);
      group.add(w);
    });

    // Blinking hazard lights (pisca-alerta)
    [-0.68, 0.68].forEach((hx) => {
      const fLight = new THREE.Mesh(roundedBox(0.26, 0.16, 0.08), hazardMat);
      fLight.position.set(hx, 0.58, 1.71);
      const rLight = fLight.clone();
      rLight.position.z = -1.71;
      group.add(fLight, rLight);
    });
  }

  return group;
}

export function createNeighborhoodChunk(
  chunkIndex: number,
  roadTex: THREE.Texture
): THREE.Group {
  const chunk = new THREE.Group();
  const chunkLength = 60;

  // Road surface
  const roadGeo = new THREE.PlaneGeometry(9.2, chunkLength);
  roadGeo.rotateX(-Math.PI / 2);
  const roadMat = new THREE.MeshStandardMaterial({
    map: roadTex,
    color: 0xffffff,
    roughness: 0.85,
    metalness: 0.05,
  });
  const road = new THREE.Mesh(roadGeo, roadMat);
  road.receiveShadow = true;
  chunk.add(road);

  // Sidewalks (Calçadas) on Left and Right (offset Y by +0.12 so zero Z-fighting)
  const sidewalkMat = new THREE.MeshStandardMaterial({
    color: 0xc9bfac,
    roughness: 0.9,
  });
  const grassMat = new THREE.MeshStandardMaterial({
    color: 0x73866a,
    roughness: 0.95,
  });

  [-1, 1].forEach((side) => {
    const sw = new THREE.Mesh(roundedBox(4.2, 0.22, chunkLength), sidewalkMat);
    sw.position.set(side * 6.7, 0.11, 0);
    sw.receiveShadow = true;
    chunk.add(sw);

    // Outer terrain beyond buildings so world never floats in a void
    const outerGround = new THREE.Mesh(
      new THREE.PlaneGeometry(36, chunkLength),
      grassMat
    );
    outerGround.rotateX(-Math.PI / 2);
    outerGround.position.set(side * 26, 0.02, 0);
    chunk.add(outerGround);
  });

  // Colorful Brazilian Houses, Mercadinhos, Utility Poles & Palm Trees
  const housePalette = [
    0xd7b987, // Amarelo Sol
    0x71939a, // Azul Céu
    0xbb8d78, // Rosa Goiaba
    0x91a082, // Verde Limão
    0xb96045, // Laranja Tijolo
    0x91a5a0, // Lilás
  ];
  const roofMat = new THREE.MeshStandardMaterial({
    color: 0xa36d4b,
    roughness: 0.75,
  });
  const gateMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.5,
    metalness: 0.4,
  });
  const waterTankMat = new THREE.MeshStandardMaterial({
    color: 0x426873,
    roughness: 0.35,
  });
  const poleMat = new THREE.MeshStandardMaterial({
    color: 0x64748b,
    roughness: 0.8,
  });
  const trunkMat = new THREE.MeshStandardMaterial({
    color: 0x78350f,
    roughness: 0.9,
  });
  const foliageMat = new THREE.MeshStandardMaterial({
    color: 0x73866a,
    roughness: 0.75,
  });

  for (let zOffset = -22; zOffset <= 22; zOffset += 15) {
    [-1, 1].forEach((side, sIdx) => {
      const seed = Math.abs(chunkIndex * 17 + zOffset * 3 + sIdx * 7);
      const wallColor = housePalette[seed % housePalette.length];
      const wallMat = new THREE.MeshStandardMaterial({
        color: wallColor,
        roughness: 0.82,
      });

      const hHeight = 3.6 + (seed % 3) * 1.3;
      const hWidth = 6.5;
      const hDepth = 10.5;
      const houseGroup = new THREE.Group();
      houseGroup.position.set(side * 12.2, 0, zOffset);

      // Main house body
      const body = new THREE.Mesh(
        roundedBox(hWidth, hHeight, hDepth),
        wallMat
      );
      body.position.y = hHeight / 2;
      houseGroup.add(body);

      // Sloped terracotta roof
      const roof = new THREE.Mesh(
        new THREE.ConeGeometry(hWidth * 0.82, 1.6, 4),
        roofMat
      );
      roof.rotation.y = Math.PI / 4;
      roof.position.y = hHeight + 0.8;
      houseGroup.add(roof);

      // Iconic blue Brazilian rooftop water tank ("Caixa d'água") on every other house
      if (seed % 2 === 0) {
        const tank = new THREE.Mesh(
          new THREE.CylinderGeometry(0.75, 0.68, 0.95, 10),
          waterTankMat
        );
        tank.position.set(0, hHeight + 1.2, 1.8);
        houseGroup.add(tank);
      }

      // Front gate / storefront awning facing street
      const gate = new THREE.Mesh(roundedBox(0.18, 2.2, 3.8), gateMat);
      gate.position.set(-side * (hWidth / 2 + 0.08), 1.1, 0);
      houseGroup.add(gate);

      chunk.add(houseGroup);

      // Concrete utility pole ("poste") or tropical tree on sidewalk
      if (zOffset % 30 === -22) {
        const pole = new THREE.Mesh(
          new THREE.CylinderGeometry(0.11, 0.14, 6.2, 8),
          poleMat
        );
        pole.position.set(side * 5.1, 3.1, zOffset + 4);
        chunk.add(pole);

        const arm = new THREE.Mesh(roundedBox(1.4, 0.1, 0.1), poleMat);
        arm.position.set(side * 4.5, 5.9, zOffset + 4);
        chunk.add(arm);
      } else {
        // Tropical street tree
        const treeGroup = new THREE.Group();
        treeGroup.position.set(side * 5.6, 0, zOffset + 5);
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.16, 0.24, 2.4, 8),
          trunkMat
        );
        trunk.position.y = 1.2;
        const crown1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.25, 1), foliageMat);
        crown1.position.y = 2.8;
        const crown2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.95, 1), foliageMat);
        crown2.position.set(0.4, 3.4, 0.3);
        treeGroup.add(trunk, crown1, crown2);
        chunk.add(treeGroup);
      }
    });
  }

  return chunk;
}

export function createDeliveryZoneGroup(deliveryTex: THREE.Texture): {
  root: THREE.Group;
  beaconArrow: THREE.Mesh;
  customerGroup: THREE.Group;
} {
  const root = new THREE.Group();

  // Checkered green/yellow pad on road
  const padGeo = new THREE.PlaneGeometry(8.4, 24);
  padGeo.rotateX(-Math.PI / 2);
  const padMat = new THREE.MeshBasicMaterial({
    map: deliveryTex,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
  });
  const pad = new THREE.Mesh(padGeo, padMat);
  pad.position.y = 0.03;
  root.add(pad);

  // Glowing arch Pillars on left and right curb
  const pillarMat = new THREE.MeshStandardMaterial({
    color: 0x73866a,
    emissive: 0x50654f,
    emissiveIntensity: 0.7,
    roughness: 0.25,
  });
  [-4.4, 4.4].forEach((px) => {
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, 5.2, 12),
      pillarMat
    );
    pillar.position.set(px, 2.6, 0);
    root.add(pillar);
  });

  // Top banner bar
  const banner = new THREE.Mesh(
    roundedBox(9.2, 0.85, 0.35),
    new THREE.MeshStandardMaterial({
      color: 0xd5b171,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.4,
      roughness: 0.3,
    })
  );
  banner.position.set(0, 5.1, 0);
  root.add(banner);

  // Floating bouncing beacon arrow above zone
  const arrowGeo = new THREE.ConeGeometry(0.9, 1.8, 4);
  arrowGeo.rotateX(Math.PI);
  const beaconArrow = new THREE.Mesh(
    arrowGeo,
    new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      emissive: 0xd5b171,
      emissiveIntensity: 1.2,
    })
  );
  beaconArrow.position.set(0, 7.2, 0);
  root.add(beaconArrow);

  // Waving Customer on the right sidewalk waiting for their order
  const customerGroup = new THREE.Group();
  customerGroup.position.set(5.3, 0.22, 0);
  const body = new THREE.Mesh(
    roundedBox(0.45, 0.9, 0.32),
    new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.7 })
  );
  body.position.y = 0.65;
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.24, 12, 12),
    new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6 })
  );
  head.position.y = 1.35;
  const wavingArm = new THREE.Mesh(
    roundedBox(0.14, 0.55, 0.14),
    new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6 })
  );
  wavingArm.position.set(-0.34, 1.25, 0);
  wavingArm.rotation.z = 0.65;
  customerGroup.add(body, head, wavingArm);
  root.add(customerGroup);

  return { root, beaconArrow, customerGroup };
}
