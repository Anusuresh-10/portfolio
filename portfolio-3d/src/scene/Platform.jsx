import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import ZoneIcon from "./ZoneIcon";

export default function Platform({ zone, isActive, onSelect }) {
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);

  const isCore = zone.shape === "core";
  const baseR = isCore ? 1.7 : 1.2;
  const baseH = isCore ? 0.5 : 0.35;
  const sides = isCore ? 8 : 6;

  useFrame((_, dt) => {
    if (ringRef.current) ringRef.current.rotation.z += dt * (hovered ? 1.1 : 0.3);
  });

  return (
    <group position={zone.position}>
      <Float speed={1.5} rotationIntensity={0.12} floatIntensity={isCore ? 0.35 : 0.6}>
        <group
          onClick={(e) => { e.stopPropagation(); onSelect(zone.id); }}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = "pointer"; }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = "default"; }}
        >
          {/* platform body */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[baseR, baseR * 1.12, baseH, sides]} />
            <meshStandardMaterial
              color={isActive || hovered ? zone.color : "#111d2e"}
              emissive={zone.color}
              emissiveIntensity={isActive ? 1.0 : hovered ? 0.55 : 0.12}
              roughness={0.4}
              metalness={0.35}
            />
          </mesh>

          {/* undersides glow slab */}
          <mesh position={[0, -baseH / 2 - 0.05, 0]}>
            <cylinderGeometry args={[baseR * 0.7, baseR * 0.7, 0.06, sides]} />
            <meshBasicMaterial color={zone.color} transparent opacity={isActive ? 0.6 : 0.2} />
          </mesh>

          {/* 3D icon above platform */}
          <group position={[0, baseH / 2 + 0.75, 0]}>
            <ZoneIcon id={zone.id} color={zone.color} />
          </group>
        </group>
      </Float>

      {/* spinning ring on the floor */}
      <mesh ref={ringRef} position={[0, -baseH / 2 - 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[baseR * 1.18, baseR * 1.42, 48]} />
        <meshBasicMaterial color={zone.color} transparent opacity={isActive ? 0.85 : 0.28} side={2} />
      </mesh>

      {(isActive || hovered) && (
        <Sparkles count={28} scale={[baseR * 3, 2.5, baseR * 3]} size={2.5} speed={0.5} color={zone.color} />
      )}
    </group>
  );
}
