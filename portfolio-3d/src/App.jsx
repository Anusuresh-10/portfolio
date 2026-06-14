import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./scene/Experience";
import HUD from "./ui/HUD";
import InfoPanel from "./ui/InfoPanel";
import Intro from "./ui/Intro";
import { zones } from "./data/portfolio";
import "./ui/ui.css";

export default function App() {
  const [activeZone, setActiveZone] = useState("home");
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <Intro onEnter={() => setEntered(true)} />}

      <div className="canvas-wrap">
        <Canvas
          shadows
          camera={{ position: [0, 10, 15], fov: 45 }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <Experience zones={zones} activeZone={activeZone} onSelect={setActiveZone} />
          </Suspense>
        </Canvas>
      </div>

      <div className="ui-layer">
        <HUD activeZone={activeZone} onSelect={setActiveZone} />
        <InfoPanel activeZone={activeZone} />
      </div>
    </>
  );
}
