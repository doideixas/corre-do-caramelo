import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export function batchNeighborhood(group:T.Group){
 group.updateMatrixWorld(true);
 const batches=new Map<string,{mat:T.Material;geometries:T.BufferGeometry[]}>();
 const originalGeometries=new Set<T.BufferGeometry>();
 group.traverse(o=>{if(o instanceof T.Mesh&&!Array.isArray(o.material)){
  const m=o.material as T.MeshStandardMaterial;
  const key=[m.type,m.color?.getHexString(),m.roughness,m.metalness,m.map?.uuid,m.opacity].join(':');
  if(!batches.has(key))batches.set(key,{mat:m,geometries:[]});
  const clone=o.geometry.clone().applyMatrix4(o.matrixWorld);const geo=clone.index?clone.toNonIndexed():clone;if(geo!==clone)clone.dispose();
  batches.get(key)!.geometries.push(geo);originalGeometries.add(o.geometry);
 }});
 group.clear();
 for(const {mat,geometries} of batches.values()){
  const merged=mergeGeometries(geometries,false);
  if(merged){const mesh=new T.Mesh(merged,mat);mesh.receiveShadow=true;group.add(mesh);}
  for(const geo of geometries)geo.dispose();
 }
 for(const geo of originalGeometries)geo.dispose();
 return group;
}
