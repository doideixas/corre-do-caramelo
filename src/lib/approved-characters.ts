import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {createContactShadow, type MotoboyRig, type CarameloRig} from './three-models';

export const palette={petrol:0x214e5b,cream:0xf3e6cf,terra:0xb96045,caramel:0xc58a45,asphalt:0x343b43,leaf:0x73866a,skin:0x9c633e,dark:0x243039,white:0xfff7e7};
const mats=new Map<number,T.MeshStandardMaterial>();
export function material(color:number){if(!mats.has(color))mats.set(color,new T.MeshStandardMaterial({color,roughness:.83}));mats.get(color)!.userData.shared=true;return mats.get(color)!;}
export function piece(parent:T.Object3D,geometry:T.BufferGeometry,color:number,x=0,y=0,z=0){const m=new T.Mesh(geometry,material(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
export function oval(parent:T.Object3D,color:number,x:number,y:number,z:number,sx:number,sy:number,sz:number){const m=piece(parent,new T.SphereGeometry(1,12,10),color,x,y,z);m.scale.set(sx,sy,sz);return m;}
export function box(parent:T.Object3D,color:number,x:number,y:number,z:number,w:number,h:number,d:number,r=.07){return piece(parent,new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)),color,x,y,z);}
export function rod(parent:T.Object3D,color:number,a:T.Vector3,b:T.Vector3,r:number){const delta=b.clone().sub(a);const m=piece(parent,new T.CylinderGeometry(r,r,delta.length(),8),color);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());return m;}
export function limb(parent:T.Object3D,color:number,a:number[],b:number[],r:number){return rod(parent,color,new T.Vector3(...a),new T.Vector3(...b),r);}

export function createMotoboyGroup():MotoboyRig{
 const root=new T.Group(),tiltGroup=new T.Group();root.add(createContactShadow(.65,1.35),tiltGroup);
 const wheels:number[]=[-.8,.78];
 const groups=wheels.map(z=>{const g=new T.Group();g.position.set(0,.34,z);tiltGroup.add(g);const tire=piece(g,new T.TorusGeometry(.29,.1,8,16),0x222a2e);tire.rotation.y=Math.PI/2;const rim=piece(g,new T.CylinderGeometry(.21,.21,.13,12),0x9caaab);rim.rotation.z=Math.PI/2;for(let i=0;i<5;i++){const a=i*Math.PI/5;limb(g,0x697a7e,[0,Math.sin(a)*.21,Math.cos(a)*.21],[0,-Math.sin(a)*.21,-Math.cos(a)*.21],.014);}return g;});
 box(tiltGroup,palette.dark,0,.57,.1,.32,.36,.62);
 limb(tiltGroup,0x8a999a,[-.14,.4,.65],[-.14,.79,-.35],.035);limb(tiltGroup,0x8a999a,[.14,.4,.65],[.14,.79,-.35],.035);
 oval(tiltGroup,palette.petrol,0,.9,-.23,.25,.22,.43);
 box(tiltGroup,palette.dark,0,.87,.37,.42,.16,.64);
 box(tiltGroup,palette.petrol,0,.7,.88,.32,.1,.3);
 limb(tiltGroup,0x9caaab,[.28,.37,.4],[.28,.37,.98],.055);
 for(const x of [-.14,.14])limb(tiltGroup,0xadb6b1,[x,.35,-.8],[x,1.12,-.62],.035);
 limb(tiltGroup,palette.dark,[-.4,1.12,-.62],[.4,1.12,-.62],.04);
 const headlightMesh=oval(tiltGroup,palette.cream,0,.97,-.86,.15,.14,.055);
 box(tiltGroup,palette.terra,0,.75,.99,.23,.1,.06);
 oval(tiltGroup,palette.petrol,0,.92,-.8,.22,.08,.3);
 for(const side of [-1,1]){
  limb(tiltGroup,palette.dark,[side*.2,.98,.24],[side*.25,.69,.03],.1);
  limb(tiltGroup,palette.dark,[side*.25,.69,.03],[side*.26,.44,.29],.078);
  box(tiltGroup,0x293337,side*.26,.38,.2,.2,.15,.34);
  limb(tiltGroup,palette.petrol,[side*.24,1.62,.2],[side*.32,1.28,-.2],.1);
  limb(tiltGroup,palette.petrol,[side*.32,1.28,-.2],[side*.37,1.13,-.62],.08);
  oval(tiltGroup,palette.skin,side*.37,1.13,-.62,.075,.07,.1);
  limb(tiltGroup,palette.dark,[side*.38,1.14,-.63],[side*.47,1.44,-.65],.012);
  oval(tiltGroup,0x546b70,side*.47,1.45,-.65,.085,.06,.025);
 }
 const torso=oval(tiltGroup,palette.petrol,0,1.4,.24,.29,.4,.23);torso.rotation.x=-.12;
 box(tiltGroup,palette.cream,0,1.53,.025,.47,.09,.035);
 oval(tiltGroup,palette.skin,0,1.89,.15,.18,.22,.18);
 oval(tiltGroup,palette.cream,0,2.02,.16,.25,.27,.25);
 const stripe=oval(tiltGroup,palette.petrol,0,2.05,.15,.07,.274,.253);
 stripe.scale.x=.065;
 oval(tiltGroup,0x253e47,0,1.97,-.055,.207,.14,.05);
 box(tiltGroup,palette.cream,0,1.8,-.025,.37,.065,.1);
 const backpackMesh=new T.Group();backpackMesh.position.set(0,1.38,.6);tiltGroup.add(backpackMesh);
 box(backpackMesh,palette.terra,0,0,0,.62,.67,.46,.1);box(backpackMesh,0xa25139,0,.27,.015,.65,.13,.49);
 box(backpackMesh,palette.cream,0,-.07,.238,.53,.085,.013);box(backpackMesh,palette.dark,0,.03,.251,.07,.19,.025);
 for(const side of [-1,1])box(backpackMesh,0x9c4a32,side*.23,.11,.25,.035,.49,.02);
 return{root,tiltGroup,frontWheel:groups[0],rearWheel:groups[1],headlightMesh,backpackMesh};
}

export function createCarameloGroup():CarameloRig{
 const root=new T.Group(),bodyGroup=new T.Group();root.add(createContactShadow(.5,.75),bodyGroup);
 oval(bodyGroup,palette.caramel,0,.62,.03,.28,.3,.5);
 oval(bodyGroup,0xe5b774,0,.65,-.3,.22,.27,.18);
 const headGroup=new T.Group();headGroup.position.set(0,1.02,-.36);bodyGroup.add(headGroup);
 oval(headGroup,palette.caramel,0,0,0,.32,.3,.28);
 oval(headGroup,0xdba35f,-.09,-.1,-.23,.17,.12,.17);oval(headGroup,0xdba35f,.09,-.1,-.23,.17,.12,.17);
 oval(headGroup,palette.dark,0,-.04,-.37,.095,.065,.065);
 const jawGroup=new T.Group();jawGroup.position.set(0,-.17,-.15);headGroup.add(jawGroup);
 oval(jawGroup,0x593a2e,0,0,-.1,.17,.065,.13);oval(jawGroup,0xca7c76,.04,-.02,-.22,.065,.025,.11);
 const eyes:T.Mesh[]=[];
 for(const side of [-1,1]){
  oval(headGroup,palette.white,side*.15,.085,-.22,.095,.115,.06);
  eyes.push(oval(headGroup,0x392e28,side*.15,.08,-.271,.045,.065,.025));
  oval(headGroup,palette.white,side*.14,.105,-.294,.014,.018,.009);
  const brow=oval(headGroup,0x886030,side*.15,.23,-.18,.105,.028,.04);brow.rotation.z=side*-.14;
 }
 const ears=[new T.Group(),new T.Group()];
 ears.forEach((ear,i)=>{const side=i===0?-1:1;ear.position.set(side*.28,.16,0);headGroup.add(ear);const m=oval(ear,0xa86c34,0,.055,0,.12,.24,.07);m.rotation.z=side*.3;if(i===1){ear.rotation.z=-.75;ear.position.y=.06;}});
 const tailMesh=piece(bodyGroup,new T.CapsuleGeometry(.045,.35,3,8),palette.caramel,0,.85,.49);tailMesh.rotation.x=.8;
 const legs=[[-.18,-.28],[.18,-.28],[-.18,.33],[.18,.33]].map(([x,z])=>{const g=new T.Group();g.position.set(x,.52,z);bodyGroup.add(g);piece(g,new T.CapsuleGeometry(.065,.32,3,8),palette.caramel,0,-.19,0);oval(g,0xe3b575,0,-.4,-.035,.09,.065,.14);return g;}) as CarameloRig['legs'];
 const dizzyHalo=new T.Group();root.add(dizzyHalo);dizzyHalo.visible=false;
 root.userData.ears=ears;root.userData.eyes=eyes;
 return{root,bodyGroup,headGroup,jawGroup,tailMesh,legs,dizzyHalo};
}
