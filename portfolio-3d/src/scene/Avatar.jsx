import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Trail } from "@react-three/drei";
import * as THREE from "three";

const DURATION = 1.1;
const ease = (t) => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;

export default function Avatar({ zones, activeZone }) {
  const mesh = useRef();
  const glow = useRef();
  const from = useRef(new THREE.Vector3());
  const to = useRef(new THREE.Vector3());
  const progress = useRef(1);
  const prev = useRef(activeZone);

  useEffect(() => {
    const home = zones.find((z) => z.shape === "core");
    const p = new THREE.Vector3(...home.position).add(new THREE.Vector3(0, 1.9, 0));
    from.current.copy(p); to.current.copy(p);
    if (mesh.current) mesh.current.position.copy(p);
  }, [zones]);

  useEffect(() => {
    if (activeZone === prev.current) return;
    const target = zones.find((z) => z.id === activeZone);
    if (!target || !mesh.current) return;
    from.current.copy(mesh.current.position);
    to.current.set(target.position[0], target.position[1] + 1.9, target.position[2]);
    progress.current = 0;
    prev.current = activeZone;
  }, [activeZone, zones]);

  useFrame((state, dt) => {
    if (!mesh.current) return;
    if (progress.current < 1) {
      progress.current = Math.min(1, progress.current + dt / DURATION);
      const t = ease(progress.current);
      const pos = from.current.clone().lerp(to.current, t);
      pos.y += Math.sin(t * Math.PI) * 1.8;
      mesh.current.position.copy(pos);
    } else {
      mesh.current.position.y = to.current.y + Math.sin(state.clock.elapsedTime * 2.4) * 0.13;
    }
    mesh.current.rotation.y += dt * 1.8;
    if (glow.current) glow.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3.2) * 0.09);
  });

  return (
    <Trail width={2.5} length={6} color="#4DEEEA" attenuation={(t) => t * t}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial color="#4DEEEA" emissive="#4DEEEA" emissiveIntensity={1.6} roughness={0.15} metalness={0.7} />
        <mesh ref={glow} scale={1.9}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshBasicMaterial color="#4DEEEA" transparent opacity={0.15} />
        </mesh>
      </mesh>
    </Trail>
  );
}
