import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ZoneIcon({ id, color }) {
  const ref = useRef();
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.7; });
  const mat = <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} roughness={0.25} metalness={0.5} />;

  const icons = {
    about:    <group ref={ref}><mesh position={[0,0.5,0]}><sphereGeometry args={[0.3,16,16]}/>{mat}</mesh><mesh position={[0,-0.1,0]}><coneGeometry args={[0.42,0.75,16]}/>{mat}</mesh></group>,
    skills:   <group ref={ref}><mesh position={[0,-0.3,0]}><boxGeometry args={[0.85,0.28,0.85]}/>{mat}</mesh><mesh position={[0.12,0.05,0.1]}><boxGeometry args={[0.52,0.28,0.52]}/>{mat}</mesh><mesh position={[-0.1,0.38,-0.05]}><boxGeometry args={[0.32,0.28,0.32]}/>{mat}</mesh></group>,
    projects: <group ref={ref}><mesh position={[0,-0.15,0]}><boxGeometry args={[0.95,0.5,0.75]}/>{mat}</mesh><mesh position={[0,0.3,-0.05]} rotation={[-0.5,0,0]}><boxGeometry args={[0.95,0.07,0.75]}/>{mat}</mesh></group>,
    achieve:  <group ref={ref}><mesh position={[0,0.1,0]}><cylinderGeometry args={[0.1,0.42,0.7,6]}/>{mat}</mesh><mesh position={[0,0.62,0]}><sphereGeometry args={[0.22,16,16]}/>{mat}</mesh><mesh position={[0,-0.38,0]}><torusGeometry args={[0.35,0.06,8,24]}/>{mat}</mesh></group>,
    contact:  <group ref={ref}><mesh position={[0,-0.22,0]}><cylinderGeometry args={[0.09,0.32,0.65,8]}/>{mat}</mesh><mesh position={[0,0.18,0]} rotation={[Math.PI/2,0,0]}><torusGeometry args={[0.38,0.05,8,24]}/>{mat}</mesh><mesh position={[0,0.5,0]}><sphereGeometry args={[0.15,16,16]}/>{mat}</mesh></group>,
  };

  return icons[id] || <group ref={ref}><mesh><icosahedronGeometry args={[0.48,0]}/>{mat}</mesh></group>;
}
