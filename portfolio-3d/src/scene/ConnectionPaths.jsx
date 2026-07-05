import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function ConnectionPaths({ zones, activeZone }) {
  const home = zones.find((z) => z.shape === "core");
  const others = zones.filter((z) => z.shape !== "core");

  const paths = useMemo(() => others.map((zone) => {
    const start = new THREE.Vector3(...home.position);
    const end = new THREE.Vector3(...zone.position);
    const mid = start.clone().lerp(end, 0.5);
    mid.y += 1.8;
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return { id: zone.id, color: zone.color, points: curve.getPoints(28) };
  }), [home, others]);

  return (
    <group>
      {paths.map((path) => {
        const active = activeZone === path.id || activeZone === "home";
        return (
          <Line key={path.id} points={path.points} color={path.color}
            lineWidth={active ? 2.2 : 0.8} transparent opacity={active ? 0.6 : 0.15}
            dashed dashScale={3} dashSize={0.55} gapSize={0.45}
          />
        );
      })}
    </group>
  );
}
