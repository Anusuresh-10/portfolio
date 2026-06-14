import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, Sparkles } from "@react-three/drei";
import ZoneIcon from "./ZoneIcon";

export default function Platform({ zone, isActive, onSelect }) {
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);

  const isCore = zone.shape === "core";
  const baseRadius = isCore ? 1.6 : 1.2;
  const baseHeight = isCore ? 0.5 : 0.35;
  const sides = isCore ? 8 : 6;

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * (hovered ? 0.9 : 0.25);
    }
  });

  return (
    <group position={zone.position}>
      <Float
        speed={1.4}
        rotationIntensity={0.15}
        floatIntensity={isCore ? 0.4 : 0.6}
      >
        {/* clickable platform body */}
        <group
          onClick={(e) => {
            e.stopPropagation();
            onSelect(zone.id);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = "default";
          }}
        >
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[baseRadius, baseRadius * 1.1, baseHeight, sides]} />
            <meshStandardMaterial
              color={isActive || hovered ? zone.color : "#1b2436"}
              emissive={zone.color}
              emissiveIntensity={isActive ? 0.9 : hovered ? 0.6 : 0.15}
              roughness={0.45}
              metalness={0.3}
            />
          </mesh>

          {/* zone icon hovering above the platform */}
          <group position={[0, baseHeight / 2 + 0.75, 0]}>
            <ZoneIcon id={zone.id} color={zone.color} />
          </group>

          {/* label */}
          <Text
            position={[0, baseHeight / 2 + 1.6, 0]}
            fontSize={0.42}
            color={isActive || hovered ? zone.color : "#e8f1f8"}
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff"
          >
            {zone.label}
          </Text>
        </group>
      </Float>

      {/* glowing ring beneath the platform */}
      <mesh ref={ringRef} position={[0, -baseHeight / 2 - 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[baseRadius * 1.15, baseRadius * 1.35, 48]} />
        <meshBasicMaterial color={zone.color} transparent opacity={isActive ? 0.9 : 0.35} side={2} />
      </mesh>

      {(isActive || hovered) && (
        <Sparkles count={30} scale={[baseRadius * 3, 2, baseRadius * 3]} size={2} speed={0.4} color={zone.color} />
      )}
    </group>
  );
}
