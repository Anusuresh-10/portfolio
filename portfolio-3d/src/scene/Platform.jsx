import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles, Html } from "@react-three/drei";
import ZoneIcon from "./ZoneIcon";
export default function Platform({ zone, isActive, onSelect }) {
  const r1=useRef(),r2=useRef();
  const [hov,setHov]=useState(false);
  const isCore=zone.shape==="core";
  const baseR=isCore?1.8:1.25, baseH=isCore?0.55:0.38, sides=isCore?8:6;
  useFrame((_,dt)=>{
    if(r1.current) r1.current.rotation.z+=dt*(hov?1.2:0.35);
    if(r2.current) r2.current.rotation.z-=dt*(hov?0.8:0.2);
  });
  return (
    <group position={zone.position}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={isCore?0.3:0.55}>
        <group onClick={e=>{e.stopPropagation();onSelect(zone.id);}}
          onPointerOver={e=>{e.stopPropagation();setHov(true);document.body.style.cursor="pointer";}}
          onPointerOut={()=>{setHov(false);document.body.style.cursor="default";}}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[baseR,baseR*1.1,baseH,sides]}/>
            <meshStandardMaterial color={isActive||hov?zone.color:"#0e1a2e"} emissive={zone.color} emissiveIntensity={isActive?1.1:hov?0.65:0.14} roughness={0.35} metalness={0.45}/>
          </mesh>
          <mesh position={[0,-baseH/2-0.04,0]}>
            <cylinderGeometry args={[baseR*0.65,baseR*0.65,0.07,sides]}/>
            <meshBasicMaterial color={zone.color} transparent opacity={isActive?0.7:0.22}/>
          </mesh>
          <group position={[0,baseH/2+0.8,0]}><ZoneIcon id={zone.id} color={zone.color}/></group>
          <Html position={[0,baseH/2+2.5,0]} center style={{pointerEvents:"none",userSelect:"none"}}>
            <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"13px",fontWeight:600,letterSpacing:"0.06em",color:isActive?zone.color:hov?"#e8f1f8":"rgba(232,241,248,0.6)",textShadow:isActive?`0 0 14px ${zone.color}`:"none",whiteSpace:"nowrap",transition:"all 0.3s"}}>
              {zone.label}
            </div>
          </Html>
        </group>
      </Float>
      <mesh ref={r1} position={[0,-baseH/2-0.05,0]} rotation={[-Math.PI/2,0,0]}>
        <ringGeometry args={[baseR*1.18,baseR*1.38,48]}/><meshBasicMaterial color={zone.color} transparent opacity={isActive?0.9:0.3} side={2}/>
      </mesh>
      <mesh ref={r2} position={[0,-baseH/2-0.08,0]} rotation={[-Math.PI/2,0,0]}>
        <ringGeometry args={[baseR*1.45,baseR*1.55,48]}/><meshBasicMaterial color={zone.color} transparent opacity={isActive?0.5:0.12} side={2}/>
      </mesh>
      {(isActive||hov)&&<Sparkles count={35} scale={[baseR*3.5,3,baseR*3.5]} size={2.8} speed={0.5} color={zone.color}/>}
    </group>
  );
}
