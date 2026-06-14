import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Per-zone camera framing: offset from the platform's position, plus
// where the camera should look (relative to the platform too).
const CAMERA_OFFSETS = {
  home: { pos: [0, 10, 15], look: [0, 0, 0] },
  about: { pos: [-2.5, 3.5, 5.5], look: [0, 1, 0] },
  skills: { pos: [2.5, 3.5, 5.5], look: [0, 1, 0] },
  projects: { pos: [2, 4, 6], look: [0, 1, 0] },
  contact: { pos: [-2, 3.5, 5.5], look: [0, 1, 0] },
};

export default function CameraRig({ zones, activeZone }) {
  const { camera, pointer } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 10, 15));
  const currentLook = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    const zone = zones.find((z) => z.id === activeZone);
    if (!zone) return;

    const config = CAMERA_OFFSETS[zone.id] || CAMERA_OFFSETS.home;
    const targetPos = new THREE.Vector3(
      zone.position[0] + config.pos[0],
      zone.position[1] + config.pos[1],
      zone.position[2] + config.pos[2]
    );
    const targetLook = new THREE.Vector3(
      zone.position[0] + config.look[0],
      zone.position[1] + config.look[1],
      zone.position[2] + config.look[2]
    );

    const damping = 1 - Math.pow(0.001, delta);
    currentPos.current.lerp(targetPos, damping);
    currentLook.current.lerp(targetLook, damping);

    // subtle parallax based on pointer position
    const parallaxX = pointer.x * 0.6;
    const parallaxY = pointer.y * 0.3;

    camera.position.set(
      currentPos.current.x + parallaxX,
      currentPos.current.y + parallaxY,
      currentPos.current.z
    );
    camera.lookAt(currentLook.current);
  });

  return null;
}
