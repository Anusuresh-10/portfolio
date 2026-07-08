import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./scene/Experience";
import HUD from "./ui/HUD";
import { zones } from "./data/portfolio";
import AboutPage    from "./pages/AboutPage";
import SkillsPage   from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import AchievePage  from "./pages/AchievePage";
import ContactPage  from "./pages/ContactPage";
import "./index.css";

function Intro({ onEnter }) {
  return (
    <div className="intro">
      <p className="mono-tag">portfolio_world.exe — v2.0 loaded</p>
      <h1>Welcome to<br /><span>Anu Suresh's</span> Dev World</h1>
      <p>
        A 3D interactive world with 6 floating zones — About, Skills,
        Projects, Achievements, and Contact. Click any island to travel
        there, or use the nav above.
      </p>
      <button
        className="btn primary"
        style={{ "--zc": "#4DEEEA", fontSize: "0.85rem", padding: "13px 30px" }}
        onClick={onEnter}
      >
        Enter World →
      </button>
      <p className="hint">Drag to look around · Toggle free orbit in the HUD · Click islands to travel</p>
    </div>
  );
}

const PAGE_MAP = {
  about:    AboutPage,
  skills:   SkillsPage,
  projects: ProjectsPage,
  achieve:  AchievePage,
  contact:  ContactPage,
};

export default function App() {
  const [entered,      setEntered]      = useState(false);
  const [activeZone,   setActiveZone]   = useState("home");
  const [openPage,     setOpenPage]     = useState(null); // zone id of open page
  const [orbitEnabled, setOrbitEnabled] = useState(false);

  const PageComponent = openPage ? PAGE_MAP[openPage] : null;

  return (
    <>
      {!entered && <Intro onEnter={() => setEntered(true)} />}

      {/* 3D Canvas — always mounted so it doesn't re-init */}
      <div className="canvas-wrap" style={{ visibility: entered ? "visible" : "hidden" }}>
        <Canvas shadows camera={{ position: [0, 11, 18], fov: 45 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <Experience
              zones={zones}
              activeZone={activeZone}
              onSelect={setActiveZone}
              orbitEnabled={orbitEnabled}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* HUD overlay (only when no page is open) */}
      {entered && !openPage && (
        <div className="ui-layer">
          <HUD
            activeZone={activeZone}
            onSelect={setActiveZone}
            orbitEnabled={orbitEnabled}
            onOrbitToggle={() => setOrbitEnabled((v) => !v)}
            onOpenPage={(zoneId) => setOpenPage(zoneId)}
          />
        </div>
      )}

      {/* Full page overlay */}
      {PageComponent && (
        <PageComponent onBack={() => setOpenPage(null)} />
      )}
    </>
  );
}
