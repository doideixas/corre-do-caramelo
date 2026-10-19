export type GameScreenState = 'title' | 'playing' | 'paused' | 'gameover';

export type ObstacleType = 'lombada' | 'buraco' | 'cone' | 'carro' | 'caminhao' | 'lixeira' | 'perua' | 'obra' | 'carrinho' | 'bola';

export interface ObstacleEntity {
  id: number;
  type: ObstacleType;
  x: number; // Lateral position in road (-4.2 to +4.2)
  z: number; // Forward world position (negative Z is ahead)
  width: number;
  length: number;
  hit: boolean;
}

export interface CoinEntity {
  id: number;
  x: number;
  z: number;
  collected: boolean;
}

export type CarameloState =
  | 'hidden'
  | 'warning'
  | 'chasing'
  | 'spooked'
  | 'retreating';

export interface CarameloDog {
  state: CarameloState;
  x: number;
  /** Distance in meters ahead of the player motorcycle (positive = ahead in front of bike, visible to camera & horn) */
  distanceAhead: number;
  lateralSide: -1 | 1;
  stateTimer: number;
  barkCooldown: number;
  totalSpookedCount: number;
}

export interface SonicWave {
  id: number;
  x: number;
  z: number;
  age: number;
  maxAge: number;
  active: boolean;
}

export interface DeliveryDestination {
  customerName: string;
  orderItem: string;
  houseLabel: string;
  rewardCoins: number;
  bonusTime: number;
}

export const ROAD_HALF_WIDTH = 4.3;
export const PLAYER_MAX_X = 3.85;
export const INITIAL_HEARTS = 3;
export const INITIAL_TIME = 65;
export const HORN_COOLDOWN = 2.5;
export const HORN_RANGE_Z = 22;
export const HORN_RANGE_X = 3.2;
export const DELIVERY_ZONE_LENGTH = 36;

export const BRAZILIAN_DELIVERIES: DeliveryDestination[] = [
  {
    customerName: 'Dona Neide',
    orderItem: '2x Marmitex de Feijoada Completa',
    houseLabel: 'Casa 42 · Portão Verde',
    rewardCoins: 15,
    bonusTime: 22,
  },
  {
    customerName: 'Seu Jorge da Oficina',
    orderItem: 'Combo Pastel de Feira + Caldo de Cana',
    houseLabel: 'Borracharia & Oficina 2 Irmãos',
    rewardCoins: 20,
    bonusTime: 20,
  },
  {
    customerName: 'Cleide Cabeleireira',
    orderItem: 'Açaí Turbinado 700ml c/ Leite Ninho',
    houseLabel: 'Salão Beleza Pura · Nº 108',
    rewardCoins: 25,
    bonusTime: 20,
  },
  {
    customerName: 'Tião do Sinuca',
    orderItem: 'Porção de Torresmo Crocante',
    houseLabel: 'Bar & Mercearia do Tião',
    rewardCoins: 30,
    bonusTime: 19,
  },
  {
    customerName: 'Juninho Gamer',
    orderItem: 'Pizza Gigante Metade Calabresa Metade Frango',
    houseLabel: 'Vila das Palmeiras · Sobrado Azul',
    rewardCoins: 35,
    bonusTime: 18,
  },
  {
    customerName: 'Vó Lurdes',
    orderItem: 'Bolo de Milho Quentinho + Café Coado',
    houseLabel: 'Travessa do Sol · Casa Rosa',
    rewardCoins: 40,
    bonusTime: 18,
  },
];

export function clampPlayerX(x: number): number {
  return Math.max(-PLAYER_MAX_X, Math.min(PLAYER_MAX_X, x));
}

export function getTargetMaxSpeed(
  deliveriesCompleted: number,
  isInDeliveryZone: boolean,
  carameloSlowTimer: number
): number {
  const baseSpeed = 23 + Math.min(deliveriesCompleted * 2.2, 16);
  let speed = baseSpeed;
  if (isInDeliveryZone) {
    speed *= 0.58;
  }
  if (carameloSlowTimer > 0) {
    speed *= 0.52;
  }
  return speed;
}

export function getDeliveryDistanceForStage(deliveriesCompleted: number): number {
  return 250 + Math.min(deliveriesCompleted * 55, 330);
}

export function getDeliveryDestination(
  deliveriesCompleted: number
): DeliveryDestination {
  const base =
    BRAZILIAN_DELIVERIES[deliveriesCompleted % BRAZILIAN_DELIVERIES.length];
  const cycleBonus =
    Math.floor(deliveriesCompleted / BRAZILIAN_DELIVERIES.length) * 10;
  return {
    ...base,
    rewardCoins: base.rewardCoins + cycleBonus,
  };
}

export function isPlayerInDeliveryZone(
  playerZ: number,
  deliveryTargetZ: number
): boolean {
  const distanceRemaining = playerZ - deliveryTargetZ;
  return (
    distanceRemaining <= DELIVERY_ZONE_LENGTH * 0.7 &&
    distanceRemaining >= -DELIVERY_ZONE_LENGTH * 0.45
  );
}

export function checkObstacleCollision(
  playerX: number,
  playerZ: number,
  obstacle: ObstacleEntity
): boolean {
  if (obstacle.hit) return false;
  const playerHalfWidth = 0.48;
  const playerHalfLength = 1.05;

  const dx = Math.abs(playerX - obstacle.x);
  const dz = Math.abs(playerZ - obstacle.z);

  const overlapX = playerHalfWidth + obstacle.width * 0.5;
  const overlapZ = playerHalfLength + obstacle.length * 0.5;

  return dx < overlapX && dz < overlapZ;
}

export function checkCoinCollection(
  playerX: number,
  playerZ: number,
  coin: CoinEntity
): boolean {
  if (coin.collected) return false;
  const dx = Math.abs(playerX - coin.x);
  const dz = Math.abs(playerZ - coin.z);
  return dx < 1.3 && dz < 1.55;
}

export function canFireHorn(hornCooldownRemaining: number): boolean {
  return hornCooldownRemaining <= 0;
}

export function doesHornSpookCaramelo(
  playerX: number,
  caramelo: CarameloDog
): boolean {
  if (caramelo.state !== 'warning' && caramelo.state !== 'chasing') {
    return false;
  }
  const dx = Math.abs(playerX - caramelo.x);
  const dz = caramelo.distanceAhead;
  return dz >= -1.5 && dz <= HORN_RANGE_Z && dx <= HORN_RANGE_X;
}

export function stepCarameloDog(
  caramelo: CarameloDog,
  playerX: number,
  dt: number,
  deliveriesCompleted: number
): {
  nextCaramelo: CarameloDog;
  bitPlayer: boolean;
  justStartedWarning: boolean;
  justBarked: boolean;
} {
  const next: CarameloDog = { ...caramelo };
  let bitPlayer = false;
  let justStartedWarning = false;
  let justBarked = false;

  next.stateTimer -= dt;
  next.barkCooldown = Math.max(0, next.barkCooldown - dt);

  const aggressionMultiplier = 1 + Math.min(deliveriesCompleted * 0.12, 0.75);

  switch (next.state) {
    case 'hidden': {
      if (next.stateTimer <= 0) {
        next.state = 'warning';
        next.stateTimer = 1.65; // 1.65s visual + bark telegraph before closing in
        next.lateralSide = Math.random() < 0.5 ? -1 : 1;
        next.x = next.lateralSide * 4.1;
        next.distanceAhead = 15.5; // Appears ahead on the sidewalk/curb
        next.barkCooldown = 0.05;
        justStartedWarning = true;
        justBarked = true;
      }
      break;
    }

    case 'warning': {
      // Runs onto the street ahead of the motorcycle, barking to warn the player
      const targetX = clampPlayerX(playerX + next.lateralSide * 1.15);
      next.x += (targetX - next.x) * Math.min(1, dt * 3.8);
      next.distanceAhead += (11.0 - next.distanceAhead) * Math.min(1, dt * 3.2);

      if (next.barkCooldown <= 0) {
        justBarked = true;
        next.barkCooldown = 0.65;
      }

      if (next.stateTimer <= 0) {
        next.state = 'chasing';
        next.stateTimer = 5.5;
      }
      break;
    }

    case 'chasing': {
      // Closes the distance toward the motorcycle's front wheel while steering toward playerX
      const closeInSpeed = 2.6 * aggressionMultiplier;
      const lateralSpeed = 3.1 * aggressionMultiplier;

      next.distanceAhead = Math.max(0.5, next.distanceAhead - closeInSpeed * dt);
      const dx = playerX - next.x;
      next.x += Math.sign(dx) * Math.min(Math.abs(dx), lateralSpeed * dt);
      next.x = clampPlayerX(next.x);

      if (next.barkCooldown <= 0) {
        justBarked = true;
        next.barkCooldown = 0.8;
      }

      // If Caramelo reaches the motorcycle without being spooked or dodged:
      if (next.distanceAhead <= 1.15 && Math.abs(next.x - playerX) < 1.05) {
        bitPlayer = true;
        next.state = 'retreating';
        next.stateTimer = 2.2;
      } else if (next.stateTimer <= 0) {
        next.state = 'retreating';
        next.stateTimer = 2.0;
      }
      break;
    }

    case 'spooked': {
      // Comically stops and spins on the side while motorcycle speeds past him
      next.x += (next.lateralSide * 4.5 - next.x) * Math.min(1, dt * 3.5);
      next.distanceAhead -= 10.5 * dt;
      if (next.stateTimer <= 0) {
        next.state = 'hidden';
        next.stateTimer = Math.max(5.0, 10.5 - deliveriesCompleted * 0.85);
      }
      break;
    }

    case 'retreating': {
      // Trots back to the sidewalk and falls behind
      next.x += (next.lateralSide * 4.9 - next.x) * Math.min(1, dt * 4.0);
      next.distanceAhead -= 9.5 * dt;
      if (next.stateTimer <= 0) {
        next.state = 'hidden';
        next.stateTimer = Math.max(5.0, 9.5 - deliveriesCompleted * 0.8);
      }
      break;
    }
  }

  return { nextCaramelo: next, bitPlayer, justStartedWarning, justBarked };
}

export function triggerCarameloSpook(caramelo: CarameloDog): CarameloDog {
  return {
    ...caramelo,
    state: 'spooked',
    stateTimer: 1.25,
    totalSpookedCount: caramelo.totalSpookedCount + 1,
  };
}

export function calculateFinalScore(params: {
  coins: number;
  deliveries: number;
  caramelosSpooked: number;
  distanceMeters: number;
}): number {
  return Math.round(
    params.deliveries * 250 +
      params.coins * 15 +
      params.caramelosSpooked * 80 +
      params.distanceMeters * 0.5
  );
}
