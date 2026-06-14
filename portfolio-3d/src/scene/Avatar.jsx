import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Trail } from "@react-three/drei";
import * as THREE from "three";

const TRAVEL_DURATION = 1.1; // seconds

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function Avatar({ zones, activeZone }) {
  const meshRef = useRef();
  const glowRef = useRef();

  const fromPos = useRef(new THREE.Vector3());
  const toPos = useRef(new THREE.Vector3());
  const progress = useRef(1); // 1 = at rest at "to"
  const prevZone = useRef(activeZone);

  // initialize position at the home zone
  useEffect(() => {
    const home = zones.find((z) => z.shape === "core");
    const startPos = new THREE.Vector3(...home.position).add(new THREE.Vector3(0, 1.8, 0));
    fromPos.current.copy(startPos);
    toPos.current.copy(startPos);
    if (meshRef.current) meshRef.current.position.copy(startPos);
  }, [zones]);

  // kick off a new travel animation whenever the active zone changes
  useEffect(() => {
    if (activeZone === prevZone.current) return;
    const target = zones.find((z) => z.id === activeZone);
    if (!target || !meshRef.current) return;

    fromPos.current.copy(meshRef.current.position);
    toPos.current.set(target.position[0], target.position[1] + 1.8, target.position[2]);
    progress.current = 0;
    prevZone.current = activeZone;
  }, [activeZone, zones]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (progress.current < 1) {
      progress.current = Math.min(1, progress.current + delta / TRAVEL_DURATION);
      const t = easeInOutCubic(progress.current);

      const pos = fromPos.current.clone().lerp(toPos.current, t);
      // arc upward mid-flight
      const arc = Math.sin(t * Math.PI) * 1.6;
      pos.y += arc;

      meshRef.current.position.copy(pos);
    } else {
      // idle bob while resting on a platform
      const bob = Math.sin(state.clock.elapsedTime * 2.2) * 0.12;
      meshRef.current.position.y = toPos.current.y + bob;
    }

    meshRef.current.rotation.y += delta * 1.5;
    if (glowRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.08;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <Trail width={2.2} length={5} color="#4DEEEA" attenuation={(t) => t * t}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.32, 1]} />
        <meshStandardMaterial
          color="#4DEEEA"
          emissive="#4DEEEA"
          emissiveIntensity={1.4}
          roughness={0.2}
          metalness={0.6}
        />
        <mesh ref={glowRef} scale={1.8}>
          <sphereGeometry args={[0.32, 16, 16]} />
          <meshBasicMaterial color="#4DEEEA" transparent opacity={0.18} />
        </mesh>
      </mesh>
    </Trail>
  );
}
