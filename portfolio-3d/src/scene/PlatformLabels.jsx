import { Html } from "@react-three/drei";

export default function PlatformLabels({ zones, activeZone }) {
  return (
    <>
      {zones.map((zone) => (
        <Html
          key={zone.id}
          position={[zone.position[0], zone.position[1] + 2.6, zone.position[2]]}
          center
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            color: activeZone === zone.id ? zone.color : "rgba(232,241,248,0.7)",
            textShadow: activeZone === zone.id ? `0 0 12px ${zone.color}` : "none",
            whiteSpace: "nowrap",
            transition: "all 0.3s ease",
          }}>
            {zone.label}
          </div>
        </Html>
      ))}
    </>
  );
}
