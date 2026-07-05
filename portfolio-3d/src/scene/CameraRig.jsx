import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const OFFSETS = {
  home:     { pos: [0, 10, 16],   look: [0, 0, 0]    },
  about:    { pos: [-2, 4, 6],    look: [0, 1, 0]     },
  skills:   { pos: [2.5, 4, 6],   look: [0, 1, 0]     },
  projects: { pos: [2, 4.5, 6.5], look: [0, 1, 0]     },
  contact:  { pos: [-2, 4, 6],    look: [0, 1, 0]     },
};

export default function CameraRig({ zones, activeZone }) {
  const { camera, pointer } = useThree();
  const curPos  = useRef(new THREE.Vector3(0, 10, 16));
  const curLook = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, dt) => {
    const zone   = zones.find((z) => z.id === activeZone);
    if (!zone) return;
    const cfg = OFFSETS[zone.id] || OFFSETS.home;
    const tPos  = new THREE.Vector3(zone.position[0] + cfg.pos[0],  zone.position[1] + cfg.pos[1],  zone.position[2] + cfg.pos[2]);
    const tLook = new THREE.Vector3(zone.position[0] + cfg.look[0], zone.position[1] + cfg.look[1], zone.position[2] + cfg.look[2]);

    const d = 1 - Math.pow(0.001, dt);
    curPos.current.lerp(tPos, d);
    curLook.current.lerp(tLook, d);

    camera.position.set(curPos.current.x + pointer.x * 0.7, curPos.current.y + pointer.y * 0.35, curPos.current.z);
    camera.lookAt(curLook.current);
  });

  return null;
}
