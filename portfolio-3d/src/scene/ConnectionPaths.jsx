import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function ConnectionPaths({ zones, activeZone }) {
  const home = zones.find((z) => z.shape === "core");
  const others = zones.filter((z) => z.shape !== "core");

  const paths = useMemo(() => {
    return others.map((zone) => {
      const start = new THREE.Vector3(...home.position);
      const end = new THREE.Vector3(...zone.position);
      const mid = start.clone().lerp(end, 0.5);
      mid.y += 1.4; // arc the path upward in the middle

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      return { id: zone.id, color: zone.color, points: curve.getPoints(24) };
    });
  }, [home, others]);

  return (
    <group>
      {paths.map((path) => {
        const isActivePath = activeZone === path.id || activeZone === "home";
        return (
          <Line
            key={path.id}
            points={path.points}
            color={path.color}
            lineWidth={isActivePath ? 2 : 1}
            transparent
            opacity={isActivePath ? 0.55 : 0.18}
            dashed
            dashScale={3}
            dashSize={0.6}
            gapSize={0.4}
          />
        );
      })}
    </group>
  );
}
