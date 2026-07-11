import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";
export default function ConnectionPaths({ zones, activeZone }) {
  const home=zones.find(z=>z.shape==="core");
  const others=zones.filter(z=>z.shape!=="core");
  const paths=useMemo(()=>others.map(zone=>{
    const s=new THREE.Vector3(...home.position),e=new THREE.Vector3(...zone.position);
    const m=s.clone().lerp(e,0.5); m.y+=2.2;
    return{id:zone.id,color:zone.color,points:new THREE.QuadraticBezierCurve3(s,m,e).getPoints(32)};
  }),[home,others]);
  return <group>{paths.map(p=>{const a=activeZone===p.id||activeZone==="home";return(<Line key={p.id} points={p.points} color={p.color} lineWidth={a?2.5:0.8} transparent opacity={a?0.65:0.15} dashed dashScale={3} dashSize={0.6} gapSize={0.4}/>);})}</group>;
}
