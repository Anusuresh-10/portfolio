import { Stars } from "@react-three/drei";
import Platform from "./Platform";
import ConnectionPaths from "./ConnectionPaths";
import Avatar from "./Avatar";
import CameraRig from "./CameraRig";
import PlatformLabels from "./PlatformLabels";

export default function Experience({ zones, activeZone, onSelect }) {
  return (
    <>
      <color attach="background" args={["#060a12"]} />
      <fog attach="fog" args={["#060a12", 20, 42]} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[8, 14, 6]} intensity={1.2} castShadow />
      <pointLight position={[0, 6, 0]} intensity={0.8} color="#4DEEEA" />
      <pointLight position={[-8, 4, -4]} intensity={0.4} color="#9D7BFF" />

      <Stars radius={65} depth={55} count={3000} factor={3.5} saturation={0} fade speed={0.5} />

      <ConnectionPaths zones={zones} activeZone={activeZone} />

      {zones.map((zone) => (
        <Platform key={zone.id} zone={zone} isActive={activeZone === zone.id} onSelect={onSelect} />
      ))}

      <PlatformLabels zones={zones} activeZone={activeZone} />
      <Avatar zones={zones} activeZone={activeZone} />
      <CameraRig zones={zones} activeZone={activeZone} />
    </>
  );
}
