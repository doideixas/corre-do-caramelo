import * as T from 'three';
import {box,oval,piece,limb,palette as P} from './approved-characters';
import { createContactShadow, createObstacleMesh } from './three-models';
import type {ObstacleType} from './game-rules';

export type Resident={root:T.Group;head:T.Group;arms:T.Group[];legs:T.Group[];hat?:T.Object3D;reaction:number;kind:string};
export function person(kind:'lady'|'vendor'|'kid',variant=0):Resident{
 const root=new T.Group(),head=new T.Group();
 const skin=[0x865232,0xad764e,0xbb865e][variant%3];
 const shirt=kind==='lady'?P.petrol:kind==='vendor'?P.cream:[P.cream,P.terra,P.leaf][variant%3];
 const h=kind==='kid'?.75:1;root.scale.setScalar(h);
 const legs:T.Group[]=[],arms:T.Group[]=[];
 for(const side of [-1,1]){
  const leg=new T.Group();leg.position.set(side*.15,.76,0);root.add(leg);legs.push(leg);
  piece(leg,new T.CapsuleGeometry(.095,.5,3,8),P.dark,0,-.28,0);box(leg,kind==='lady'?P.terra:P.cream,0,-.66,-.05,.22,.13,.35);
  const arm=new T.Group();arm.position.set(side*.3,1.4,0);root.add(arm);arms.push(arm);
  piece(arm,new T.CapsuleGeometry(.1,.42,3,8),shirt,0,-.22,0);oval(arm,skin,0,-.49,0,.09,.1,.095);arm.rotation.z=side*.13;
 }
 if(kind==='lady'){
  const dress=piece(root,new T.CylinderGeometry(.29,.45,.96,12),P.petrol,0,.88,0);
  dress.scale.z=.75;
  for(let i=0;i<12;i++){const a=i*2.4;oval(root,P.cream,Math.sin(a)*(.28+(i%3)*.04),.45+(i%5)*.16,Math.cos(a)*.26,.025,.025,.012);}
  for(const side of [-1,1])box(root,P.cream,side*.25,1.26,0,.16,.55,.4);
  const bag=box(root,0xc79f69,-.53,.67,-.04,.36,.45,.26);limb(root,0xa37f51,[-.65,.89,-.04],[-.65,1.1,-.04],.025);limb(root,0xa37f51,[-.4,.89,-.04],[-.4,1.1,-.04],.025);
  for(const x of [-.61,-.48])oval(root,P.leaf,x,.97,-.04,.07,.16,.07);
  bag.rotation.z=-.1;
 }else{oval(root,shirt,0,1.15,0,.31,.4,.22);if(kind==='kid'&&variant===0)for(const x of[-.28,.28])oval(root,P.petrol,x,1.33,0,.12,.17,.17);}
 head.position.set(0,1.77,-.02);root.add(head);
 oval(head,skin,0,0,0,.25,.29,.23);
 oval(head,skin,0,-.045,-.24,.07,.07,.075);
 for(const side of [-1,1]){
  oval(head,P.cream,side*.1,.055,-.2,.065,.075,.04);oval(head,P.dark,side*.1,.055,-.236,.03,.045,.015);
  oval(head,skin,side*.24,0,0,.06,.09,.06);
  const brow=oval(head,P.dark,side*.1,.16,-.18,.07,.017,.023);brow.rotation.z=-side*.08;
 }
 const smile=piece(head,new T.TorusGeometry(.075,.013,4,12,Math.PI),0x613c31,0,-.095,-.225);smile.rotation.z=Math.PI;
 let hat:T.Object3D|undefined;
 if(kind==='lady'){
  oval(head,0xc8c5b8,0,.19,.04,.26,.17,.24);oval(head,0xc8c5b8,0,.13,.24,.13,.14,.11);
  for(const x of[-.105,.105]){const glasses=piece(head,new T.TorusGeometry(.095,.012,4,14),0x715240,x,.055,-.249);glasses.scale.y=1.08;}limb(head,0x715240,[-.025,.055,-.25],[.025,.055,-.25],.01);
 }else if(kind==='vendor'){
  oval(head,0x6e6455,0,-.16,-.07,.22,.13,.2);
  hat=new T.Group();head.add(hat);piece(hat,new T.CylinderGeometry(.32,.34,.045,16),0xc49b61,0,.23,0);piece(hat,new T.CylinderGeometry(.2,.24,.18,12),0xc49b61,0,.33,0);piece(hat,new T.CylinderGeometry(.235,.235,.045,12),P.petrol,0,.27,0);
 }else{
  for(let i=0;i<8;i++){const a=i/8*Math.PI*2;oval(head,0x3d2d26,Math.cos(a)*.18,.22+(i%2)*.025,Math.sin(a)*.16,.1,.09,.1);}
  if(variant===1)for(let i=0;i<4;i++)oval(head,0x3d2d26,.23+i*.04,.1-i*.06,.12,.1,.11,.1);
 }
 return{root,head,legs,arms,hat,reaction:0,kind};
}

function wheels(g:T.Group,x:number,zs:number[],radius=.34){for(const z of zs)for(const side of[-1,1]){const tire=piece(g,new T.CylinderGeometry(radius,radius,.22,12),P.dark,side*x,radius,z);tire.rotation.z=Math.PI/2;const hub=piece(g,new T.CylinderGeometry(radius*.55,radius*.55,.235,10),0x849497,side*x,radius,z);hub.rotation.z=Math.PI/2;}}
export function obstacle(kind:ObstacleType,tex:T.Texture):T.Group{
 if(['buraco','lombada','cone','carro'].includes(kind))return createObstacleMesh(kind,tex);
 const g=new T.Group();
 if(kind==='lixeira'){
  box(g,P.leaf,0,.58,0,.82,1.05,.72);box(g,P.petrol,0,1.13,0,.9,.12,.81);
  box(g,P.leaf,0,1.12,.43,.7,.07,.08);wheels(g,.34,[.29],.15);
  for(const x of[-.23,.23])box(g,0x617759,x,.55,-.37,.055,.72,.025);
 }else if(kind==='carrinho'){
  box(g,P.cream,0,.53,0,.65,.74,.38);box(g,P.terra,0,.85,-.03,.68,.21,.43);box(g,P.petrol,0,.25,-.21,.62,.2,.02);
  for(const x of[-.32,.32]){limb(g,P.dark,[x,.15,.18],[x,1.26,.18],.035);}limb(g,P.dark,[-.32,1.26,.18],[.32,1.26,.18],.04);wheels(g,.33,[.16],.19);
  for(const x of[-.16,.1])oval(g,P.leaf,x,.99,0,.11,.2,.1);
 }else if(kind==='bola'){
  piece(g,new T.DodecahedronGeometry(.35,1),P.cream,0,.36,0);
  for(let i=0;i<8;i++){const a=i/8*Math.PI*2;oval(g,P.dark,Math.cos(a)*.29,.36+Math.sin(a)*.28,-.12,.1,.1,.1);}
 }else if(kind==='obra'){
  for(const x of[-.65,.65]){
   limb(g,0x9f774f,[x,0,-.3],[x,.9,0],.045);limb(g,0x9f774f,[x,0,.3],[x,.9,0],.045);
  }
  for(const y of[.48,.79]){box(g,P.cream,0,y,0,1.6,.2,.09);for(const x of[-.5,0,.5]){const band=box(g,P.terra,x,y,-.055,.18,.22,.014);band.rotation.z=-.4;}}
  piece(g,new T.ConeGeometry(.18,.55,10),P.terra,1,.29,.2);box(g,P.terra,1,.035,.2,.4,.07,.4);
 }else if(kind==='caminhao'||kind==='perua'){
  const truck=kind==='caminhao',w=truck?1.95:1.8,len=truck?4.9:3.6;
  g.add(createContactShadow(w*.6,len*.6));wheels(g,w*.5,[-len*.31,len*.31],truck?.43:.34);
  box(g,P.dark,0,.51,.05,w*.9,.28,len*.88);
  if(truck){
   box(g,P.leaf,0,1.54,.65,w,1.8,len*.65,.15);box(g,P.cream,0,1.25,-1.7,w,1.7,1.25,.15);
   box(g,0x3e5960,0,1.7,-2.34,1.62,.7,.018);box(g,P.dark,0,.9,-2.35,1.7,.28,.035);
   box(g,P.dark,0,1.2,2.3,1.5,.8,.12);box(g,P.leaf,0,.65,2.45,1.85,.25,.5);
   for(const x of[-.94,.94]){limb(g,P.terra,[x,.7,2.3],[x,2.2,2.2],.05);box(g,P.terra,x,2.23,2.2,.12,.13,.08);}
   for(const x of[-.7,.7])piece(g,new T.CylinderGeometry(.08,.08,.12,10),P.caramel,x,2.2,-1.7);
  }else{
   box(g,P.terra,0,.85,0,w,.86,len,.2);box(g,P.cream,0,1.47,.06,w,1.07,len*.93,.21);
   box(g,0x3e5960,0,1.64,-1.69,1.57,.63,.035);box(g,P.cream,0,1.64,-1.72,.045,.66,.03);
   box(g,P.petrol,0,1.13,-1.81,w,.08,.03);for(const side of[-1,1])box(g,P.petrol,side*.9,1.13,0,.03,.08,3.3);
   for(const x of[-.64,.64])oval(g,P.cream,x,.85,-1.81,.16,.16,.04);
  }
  for(const x of[-w*.39,w*.39]){box(g,P.caramel,x,.73,-len*.5-.03,.21,.13,.06);box(g,P.terra,x,.75,len*.5,.18,.19,.05);}
  box(g,P.dark,0,.49,-len*.5-.04,w,.16,.18);
  for(const side of[-1,1]){limb(g,P.dark,[side*w*.48,1.4,-len*.29],[side*w*.65,1.6,-len*.29],.025);box(g,P.dark,side*w*.64,1.6,-len*.29,.15,.25,.09);}
 }
 return g;
}

export function vendor(){const actor=person('vendor');const cart=new T.Group();actor.root.add(cart);cart.position.set(0,0,-.9);box(cart,P.cream,0,.65,0,1.25,.75,.75);box(cart,P.petrol,0,1.04,0,1.3,.12,.81);wheels(cart,.65,[0],.3);limb(cart,P.petrol,[-.65,.85,.4],[.65,.85,.4],.035);limb(cart,0xa59578,[.4,.8,0],[.4,2.85,0],.025);for(let i=0;i<8;i++){const canopy=piece(cart,new T.ConeGeometry(1.05,.45,1,1,true,i*Math.PI/4,Math.PI/4),i%2?P.cream:P.terra,.4,2.85,0);}oval(cart,P.terra,0,.65,-.39,.1,.17,.025);return actor;}
export function kids(){const root=new T.Group();const people=[0,1,2].map((v)=>{const a=person('kid',v);a.root.position.set((v-1)*1.05,0,(v%2)*1.25);a.root.rotation.y=Math.PI/2;root.add(a.root);return a;});for(const z of[-.9,1.9])box(root,P.terra,-1.2,.14,z,.3,.27,.25);return{root,people};}
export function cat(){const root=new T.Group();box(root,P.terra,0,.7,0,.4,1.4,2.2);oval(root,0x8b8c84,0,1.72,0,.2,.29,.32);oval(root,0x93928a,0,2.07,-.2,.25,.22,.2);oval(root,P.cream,0,1.99,-.35,.16,.1,.1);for(const x of[-.15,.15]){const ear=piece(root,new T.ConeGeometry(.1,.24,3),0x777d78,x,2.29,-.19);ear.rotation.z=x*-.7;oval(root,P.leaf,x*.65,2.12,-.37,.065,.075,.025);oval(root,P.dark,x*.65,2.12,-.395,.016,.05,.013);oval(root,P.cream,x,1.45,-.23,.07,.06,.12);}const tail=piece(root,new T.TorusGeometry(.28,.04,5,12,Math.PI*1.6),0x6c7875,0,1.78,.38);tail.rotation.y=Math.PI/2;root.userData.tail=tail;return root;}
export function animateResident(a:Resident,elapsed:number,dt:number,walking=false){a.reaction=Math.max(0,a.reaction-dt);const startled=a.reaction>0;const walk=walking?Math.sin(elapsed*7)*.32:0;a.legs.forEach((l,i)=>l.rotation.x=walk*(i===0?1:-1));a.arms.forEach((arm,i)=>{arm.rotation.x=-walk*.6;arm.rotation.z=(i===0?1:-1)*(startled?.7:.12);});a.head.rotation.y=startled?Math.sin(elapsed*15)*.15:Math.sin(elapsed*.8)*.1;if(a.hat)a.hat.position.y=startled?Math.abs(Math.sin(a.reaction*10))*.1:0;}
