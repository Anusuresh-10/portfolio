import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Trail } from "@react-three/drei";
import * as THREE from "three";
const ease=t=>t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
export default function Avatar({ zones, activeZone }) {
  const mesh=useRef(),glow=useRef(),from=useRef(new THREE.Vector3()),to=useRef(new THREE.Vector3()),prog=useRef(1),prev=useRef(activeZone);
  useEffect(()=>{const h=zones.find(z=>z.shape==="core");const p=new THREE.Vector3(...h.position).add(new THREE.Vector3(0,2,0));from.current.copy(p);to.current.copy(p);if(mesh.current)mesh.current.position.copy(p);},[zones]);
  useEffect(()=>{if(activeZone===prev.current)return;const t=zones.find(z=>z.id===activeZone);if(!t||!mesh.current)return;from.current.copy(mesh.current.position);to.current.set(t.position[0],t.position[1]+2,t.position[2]);prog.current=0;prev.current=activeZone;},[activeZone,zones]);
  useFrame((state,dt)=>{if(!mesh.current)return;if(prog.current<1){prog.current=Math.min(1,prog.current+dt/1.1);const t=ease(prog.current);const pos=from.current.clone().lerp(to.current,t);pos.y+=Math.sin(t*Math.PI)*2.2;mesh.current.position.copy(pos);}else{mesh.current.position.y=to.current.y+Math.sin(state.clock.elapsedTime*2.4)*0.14;}mesh.current.rotation.y+=dt*2;if(glow.current)glow.current.scale.setScalar(1+Math.sin(state.clock.elapsedTime*3.5)*0.1);});
  return(<Trail width={3} length={7} color="#4DEEEA" attenuation={t=>t*t}><mesh ref={mesh}><icosahedronGeometry args={[0.32,1]}/><meshStandardMaterial color="#4DEEEA" emissive="#4DEEEA" emissiveIntensity={1.8} roughness={0.1} metalness={0.8}/><mesh ref={glow} scale={2}><sphereGeometry args={[0.32,16,16]}/><meshBasicMaterial color="#4DEEEA" transparent opacity={0.12}/></mesh></mesh></Trail>);
}
