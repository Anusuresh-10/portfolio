import { Stars } from "@react-three/drei";
import Platform from "./Platform";
import ConnectionPaths from "./ConnectionPaths";
import Avatar from "./Avatar";
import CameraRig from "./CameraRig";

export default function Experience({ zones, activeZone, onSelect }) {
  return (
    <>
      <color attach="background" args={["#060a12"]} />
      <fog attach="fog" args={["#060a12", 18, 38]} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[8, 12, 6]} intensity={1.1} castShadow />
      <pointLight position={[0, 6, 0]} intensity={0.6} color="#4DEEEA" />

      <Stars radius={60} depth={50} count={2500} factor={3} saturation={0} fade speed={0.6} />

      <ConnectionPaths zones={zones} activeZone={activeZone} />

      {zones.map((zone) => (
        <Platform key={zone.id} zone={zone} isActive={activeZone === zone.id} onSelect={onSelect} />
      ))}

      <Avatar zones={zones} activeZone={activeZone} />
      <CameraRig zones={zones} activeZone={activeZone} />
    </>
  );
}
