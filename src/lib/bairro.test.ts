import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { obstacle, person, vendor, kids, cat, animateResident } from './bairro.ts';
import { createMotoboyGroup, createCarameloGroup } from './approved-characters.ts';
import {triggerCarameloSpook,stepCarameloDog,type CarameloDog} from './game-rules.ts';
import {batchNeighborhood} from './static-batch.ts';
import {createNeighborhoodChunk} from './three-models.ts';

test('todos os modelos aprovados geram malhas com dimensões válidas',()=>{
 const models=[createMotoboyGroup().root,createCarameloGroup().root,person('lady').root,vendor().root,kids().root,cat(),...(['caminhao','lixeira','perua','obra','carrinho','bola'] as const).map(type=>obstacle(type,new THREE.Texture()))];
 for(const model of models){model.updateMatrixWorld(true);const size=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());assert.ok(size.x>0&&size.y>0&&size.z>0);assert.ok(Number.isFinite(size.length()));}
});
test('susto é temporário e preserva o caramelo, que volta a aparecer',()=>{
 const original:CarameloDog={state:'chasing',x:1,distanceAhead:12,lateralSide:1,stateTimer:3,barkCooldown:0,totalSpookedCount:0};
 const next=triggerCarameloSpook(original);assert.equal(original.state,'chasing');assert.equal(next.state,'spooked');assert.equal(next.totalSpookedCount,1);assert.equal(next.stateTimer,1.25);
 let current=next;let contact=false;for(let i=0;i<160;i++){const step=stepCarameloDog(current,0,.05,0);current=step.nextCaramelo;contact ||= step.bitPlayer;}
 assert.equal(contact,false);assert.ok(['hidden','warning','chasing'].includes(current.state));
});
test('reações humanas não deslocam o personagem nem derrubam objetos',()=>{
 for(const actor of [person('lady'),vendor(),...kids().people]){actor.root.position.set(5,0,-20);const before=actor.root.position.clone();actor.reaction=1;animateResident(actor,10,.1,true);assert.deepEqual(actor.root.position,before);assert.ok(actor.reaction<1);}
});
test('agrupamento do bairro reduz objetos e preserva as dimensões do cenário',()=>{
 const original=createNeighborhoodChunk(1,new THREE.Texture());
 original.updateMatrixWorld(true);
 const before=new THREE.Box3().setFromObject(original);let count=0;original.traverse(o=>{if(o instanceof THREE.Mesh)count++;});
 const result=batchNeighborhood(original);result.updateMatrixWorld(true);const after=new THREE.Box3().setFromObject(result);let finalCount=0;result.traverse(o=>{if(o instanceof THREE.Mesh)finalCount++;});
 assert.ok(finalCount<count*.6);assert.ok(before.min.distanceTo(after.min)<.001);assert.ok(before.max.distanceTo(after.max)<.001);
});
