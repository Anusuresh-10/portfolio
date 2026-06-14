import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Simple, low-poly geometric icons built from primitives so no external
 * 3D models / textures are needed. Each icon spins gently.
 */
export default function ZoneIcon({ id, color }) {
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.6;
    }
  });

  const material = (
    <meshStandardMaterial
      color={color}
      emissive={color}
      emissiveIntensity={0.6}
      roughness={0.3}
      metalness={0.4}
    />
  );

  switch (id) {
    case "about":
      // person silhouette: sphere (head) + cone (body)
      return (
        <group ref={group}>
          <mesh position={[0, 0.55, 0]} castShadow>
            <sphereGeometry args={[0.32, 16, 16]} />
            {material}
          </mesh>
          <mesh position={[0, -0.05, 0]} castShadow>
            <coneGeometry args={[0.45, 0.8, 16]} />
            {material}
          </mesh>
        </group>
      );

    case "skills":
      // stacked blocks: a little skill-tree / tech stack
      return (
        <group ref={group}>
          <mesh position={[0, -0.3, 0]} castShadow>
            <boxGeometry args={[0.9, 0.3, 0.9]} />
            {material}
          </mesh>
          <mesh position={[0.15, 0.05, 0.1]} castShadow>
            <boxGeometry args={[0.55, 0.3, 0.55]} />
            {material}
          </mesh>
          <mesh position={[-0.15, 0.4, -0.05]} castShadow>
            <boxGeometry args={[0.35, 0.3, 0.35]} />
            {material}
          </mesh>
        </group>
      );

    case "projects":
      // open vault / folder: box with a floating lid
      return (
        <group ref={group}>
          <mesh position={[0, -0.15, 0]} castShadow>
            <boxGeometry args={[1, 0.55, 0.8]} />
            {material}
          </mesh>
          <mesh position={[0, 0.32, -0.05]} rotation={[-0.5, 0, 0]} castShadow>
            <boxGeometry args={[1, 0.08, 0.8]} />
            {material}
          </mesh>
        </group>
      );

    case "contact":
      // beacon: cone base + ring + sphere
      return (
        <group ref={group}>
          <mesh position={[0, -0.25, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.35, 0.7, 8]} />
            {material}
          </mesh>
          <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.4, 0.05, 8, 24]} />
            {material}
          </mesh>
          <mesh position={[0, 0.55, 0]} castShadow>
            <sphereGeometry args={[0.16, 16, 16]} />
            {material}
          </mesh>
        </group>
      );

    default:
      return (
        <group ref={group}>
          <mesh castShadow>
            <icosahedronGeometry args={[0.5, 0]} />
            {material}
          </mesh>
        </group>
      );
  }
}
