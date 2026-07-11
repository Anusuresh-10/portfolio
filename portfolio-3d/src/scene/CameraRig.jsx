import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
const CFG={home:{pos:[0,11,18],look:[0,0,0]},about:{pos:[-2,4,6.5],look:[0,1,0]},skills:{pos:[2.5,4,6.5],look:[0,1,0]},projects:{pos:[2,4.5,7],look:[0,1,0]},achieve:{pos:[-2,4,6.5],look:[0,1,0]},contact:{pos:[0,4,7],look:[0,1,0]}};
export default function CameraRig({ zones, activeZone }) {
  const {camera,pointer}=useThree();
  const cp=useRef(new THREE.Vector3(0,11,18)),cl=useRef(new THREE.Vector3(0,0,0));
  useFrame((_,dt)=>{const zone=zones.find(z=>z.id===activeZone);if(!zone)return;const cfg=CFG[zone.id]||CFG.home;const tp=new THREE.Vector3(zone.position[0]+cfg.pos[0],zone.position[1]+cfg.pos[1],zone.position[2]+cfg.pos[2]);const tl=new THREE.Vector3(zone.position[0]+cfg.look[0],zone.position[1]+cfg.look[1],zone.position[2]+cfg.look[2]);const d=1-Math.pow(0.001,dt);cp.current.lerp(tp,d);cl.current.lerp(tl,d);camera.position.set(cp.current.x+pointer.x*0.8,cp.current.y+pointer.y*0.4,cp.current.z);camera.lookAt(cl.current);});
  return null;
}
