import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clampPlayerX,
  PLAYER_MAX_X,
  getTargetMaxSpeed,
  isPlayerInDeliveryZone,
  checkObstacleCollision,
  checkCoinCollection,
  canFireHorn,
  doesHornSpookCaramelo,
  stepCarameloDog,
  triggerCarameloSpook,
  calculateFinalScore,
  type CarameloDog,
  type ObstacleEntity,
} from './game-rules.ts';

test('clampPlayerX keeps motorcycle within road boundaries', () => {
  assert.equal(clampPlayerX(0), 0);
  assert.equal(clampPlayerX(-10), -PLAYER_MAX_X);
  assert.equal(clampPlayerX(10), PLAYER_MAX_X);
});

test('getTargetMaxSpeed scales with deliveries and slows in delivery zone or Caramelo bite', () => {
  const base0 = getTargetMaxSpeed(0, false, 0);
  const base3 = getTargetMaxSpeed(3, false, 0);
  assert.ok(base3 > base0, 'Speed should increase as deliveries increase');

  const inZone = getTargetMaxSpeed(0, true, 0);
  assert.ok(inZone < base0, 'Speed should moderate inside delivery zone');

  const slowedByDog = getTargetMaxSpeed(0, false, 1.5);
  assert.ok(slowedByDog < base0, 'Speed should drop when Caramelo bites');
});

test('isPlayerInDeliveryZone detects when player reaches target Z window', () => {
  const targetZ = -250;
  assert.equal(isPlayerInDeliveryZone(-100, targetZ), false);
  assert.equal(isPlayerInDeliveryZone(-240, targetZ), true);
  assert.equal(isPlayerInDeliveryZone(-250, targetZ), true);
  assert.equal(isPlayerInDeliveryZone(-310, targetZ), false);
});

test('checkObstacleCollision detects overlap and ignores already-hit obstacles', () => {
  const pothole: ObstacleEntity = {
    id: 1,
    type: 'buraco',
    x: 0,
    z: -50,
    width: 1.6,
    length: 1.6,
    hit: false,
  };

  assert.equal(checkObstacleCollision(0, -50, pothole), true);
  assert.equal(checkObstacleCollision(3.0, -50, pothole), false);

  const hitPothole: ObstacleEntity = { ...pothole, hit: true };
  assert.equal(checkObstacleCollision(0, -50, hitPothole), false);
});

test('checkCoinCollection detects coin pickup radius', () => {
  const coin = { id: 1, x: 1.5, z: -20, collected: false };
  assert.equal(checkCoinCollection(1.4, -20.2, coin), true);
  assert.equal(checkCoinCollection(-2.0, -20.2, coin), false);
  assert.equal(
    checkCoinCollection(1.4, -20.2, { ...coin, collected: true }),
    false
  );
});

test('horn cooldown and Caramelo sonic wave spook detection work accurately', () => {
  assert.equal(canFireHorn(0), true);
  assert.equal(canFireHorn(1.2), false);

  const chasingDog: CarameloDog = {
    state: 'chasing',
    x: 0.5,
    distanceAhead: 6.0,
    lateralSide: 1,
    stateTimer: 4.0,
    barkCooldown: 0.5,
    totalSpookedCount: 0,
  };

  assert.equal(doesHornSpookCaramelo(0.2, chasingDog), true);
  // Out of lateral direction
  assert.equal(doesHornSpookCaramelo(-3.5, chasingDog), false);
  assert.equal(
    doesHornSpookCaramelo(0.2, { ...chasingDog, state: 'hidden' }),
    false
  );

  const spooked = triggerCarameloSpook(chasingDog);
  assert.equal(spooked.state, 'spooked');
  assert.equal(spooked.totalSpookedCount, 1);
});

test('Caramelo state machine transitions from hidden -> warning -> chasing -> biting', () => {
  let dog: CarameloDog = {
    state: 'hidden',
    x: 3.5,
    distanceAhead: 14,
    lateralSide: 1,
    stateTimer: 0.05,
    barkCooldown: 0,
    totalSpookedCount: 0,
  };

  const step1 = stepCarameloDog(dog, 0, 0.1, 1);
  dog = step1.nextCaramelo;
  assert.equal(dog.state, 'warning');
  assert.equal(step1.justStartedWarning, true);
  assert.equal(step1.justBarked, true);

  const step2 = stepCarameloDog(dog, 0, 2.0, 1);
  dog = step2.nextCaramelo;
  assert.equal(dog.state, 'chasing');

  dog.x = 0;
  dog.distanceAhead = 1.0;
  const step3 = stepCarameloDog(dog, 0, 0.2, 1);
  assert.equal(step3.bitPlayer, true);
  assert.equal(step3.nextCaramelo.state, 'retreating');
});

test('calculateFinalScore rewards deliveries, coins, spooked dogs, and distance', () => {
  const score = calculateFinalScore({
    coins: 20,
    deliveries: 3,
    caramelosSpooked: 2,
    distanceMeters: 500,
  });
  assert.equal(score, 1460);
});
