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
    mid.y += 2.2;
    return { id: zone.id, color: zone.color, points: new THREE.QuadraticBezierCurve3(start, mid, end).getPoints(32) };
  }), [home, others]);

  return (
    <group>
      {paths.map((p) => {
        const active = activeZone === p.id || activeZone === "home";
        return (
          <Line key={p.id} points={p.points} color={p.color}
            lineWidth={active ? 2.5 : 0.8} transparent opacity={active ? 0.65 : 0.15}
            dashed dashScale={3} dashSize={0.6} gapSize={0.4}
          />
        );
      })}
    </group>
  );
}
