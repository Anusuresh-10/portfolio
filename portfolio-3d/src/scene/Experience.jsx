import { Stars } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import Platform from "./Platform";
import ConnectionPaths from "./ConnectionPaths";
import Avatar from "./Avatar";
import CameraRig from "./CameraRig";

export default function Experience({ zones, activeZone, onSelect, orbitEnabled }) {
  return (
    <>
      <color attach="background" args={["#060a12"]} />
      <fog attach="fog" args={["#060a12", 22, 48]} />

      {/* rich lighting */}
      <ambientLight intensity={0.45} />
      <directionalLight position={[10, 16, 8]} intensity={1.3} castShadow />
      <pointLight position={[0, 8, 0]}   intensity={1.0} color="#4DEEEA" />
      <pointLight position={[-10, 5, -5]} intensity={0.5} color="#9D7BFF" />
      <pointLight position={[10, 5, 5]}   intensity={0.4} color="#FFB454" />
      <pointLight position={[0, 5, 10]}   intensity={0.4} color="#5CF29A" />

      <Stars radius={70} depth={60} count={4000} factor={4} saturation={0} fade speed={0.5} />

      <ConnectionPaths zones={zones} activeZone={activeZone} />

      {zones.map((zone) => (
        <Platform key={zone.id} zone={zone} isActive={activeZone === zone.id} onSelect={onSelect} />
      ))}

      <Avatar zones={zones} activeZone={activeZone} />

      {orbitEnabled
        ? <OrbitControls enablePan={false} minDistance={5} maxDistance={30} />
        : <CameraRig zones={zones} activeZone={activeZone} />
      }
    </>
  );
}
