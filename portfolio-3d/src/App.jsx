import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./scene/Experience";
import { zones } from "./data/portfolio";
import AboutPage    from "./pages/AboutPage";
import SkillsPage   from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import AchievePage  from "./pages/AchievePage";
import ContactPage  from "./pages/ContactPage";
import "./index.css";

const PAGES = { about:AboutPage, skills:SkillsPage, projects:ProjectsPage, achieve:AchievePage, contact:ContactPage };

const BLURBS = {
  home:     { text:"Explore my 3D world — click any floating island or use the nav above.", btn:null },
  about:    { text:"My story, 2 internships, tech stack, and what drives me.", btn:"Open About →" },
  skills:   { text:"Full skill arsenal — Java, React, Node.js, DSA, and more.", btn:"Open Skills →" },
  projects: { text:"Bird Survey App (Tata Insights), Task Manager, and more.", btn:"Open Projects →" },
  achieve:  { text:"4 NPTEL Elite certs, ET-AI Semi-Finalist, prize wins, and extracurriculars.", btn:"Open Achievements →" },
  contact:  { text:"Actively looking for SDE placements. All my links in one place.", btn:"Open Contact →" },
};

function Intro({ onEnter }) {
  return (
    <div style={{position:"fixed",inset:0,background:"radial-gradient(ellipse at 50% 55%, #0c1a2e 0%, #04080f 70%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",gap:20,padding:28,zIndex:50}}>
      <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".7rem",letterSpacing:".14em",textTransform:"uppercase",color:"#4DEEEA"}}>portfolio_world.exe — v3.0 loaded</p>
      <h1 style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(2rem,5vw,3.2rem)",fontWeight:800,lineHeight:1.1,color:"#e8f1f8"}}>
        Welcome to<br/>
        <span style={{background:"linear-gradient(135deg,#4DEEEA,#9D7BFF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Anu Suresh's</span> Dev World
      </h1>
      <p style={{color:"rgba(200,220,240,.6)",fontSize:".92rem",maxWidth:460,lineHeight:1.7}}>
        A 3D interactive world with 6 floating zones — About, Skills, Projects, Achievements, and Contact.
      </p>
      <button onClick={onEnter} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".84rem",padding:"13px 32px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#4DEEEA,#4D9FFF)",color:"#04080f",fontWeight:700,cursor:"pointer",letterSpacing:".04em"}}>
        Enter World →
      </button>
      <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".66rem",color:"rgba(200,220,240,.35)",letterSpacing:".06em"}}>Click islands to travel · Toggle orbit in HUD · All pages open full-screen</p>
    </div>
  );
}

function HUD({ activeZone, onSelect, orbitEnabled, onOrbitToggle, onOpenPage }) {
  const blurb = BLURBS[activeZone] || BLURBS.home;
  const zone  = zones.find(z=>z.id===activeZone)||zones[0];
  return (
    <>
      {/* top */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap"}}>
        <div style={{background:"rgba(4,8,15,.8)",border:"1px solid rgba(255,255,255,.08)",borderRadius:14,padding:"12px 18px",backdropFilter:"blur(20px)"}}>
          <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"1.05rem",fontWeight:700,color:"#e8f1f8"}}>Anu Suresh</div>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".64rem",color:"#4DEEEA",marginTop:3,letterSpacing:".05em"}}>B.E. CSE Student • Full-Stack & DSA</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end"}}>
          <nav style={{display:"flex",gap:5,flexWrap:"wrap",background:"rgba(4,8,15,.8)",border:"1px solid rgba(255,255,255,.08)",borderRadius:14,padding:5,backdropFilter:"blur(20px)"}}>
            {zones.map(z=>(
              <button key={z.id}
                style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".68rem",letterSpacing:".04em",padding:"7px 12px",borderRadius:9,border:`1px solid ${activeZone===z.id?"transparent":"transparent"}`,background:activeZone===z.id?z.color:"transparent",color:activeZone===z.id?"#04080f":"rgba(200,220,240,.55)",fontWeight:activeZone===z.id?700:400,cursor:"pointer",transition:"all .2s",display:"flex",alignItems:"center",gap:5}}
                onClick={()=>onSelect(z.id)}>
                <span style={{width:5,height:5,borderRadius:"50%",background:activeZone===z.id?"#04080f":z.color,opacity:activeZone===z.id?1:.5}}/>
                {z.shortLabel}
              </button>
            ))}
          </nav>
          <button onClick={onOrbitToggle} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".64rem",background:"rgba(4,8,15,.8)",border:`1px solid ${orbitEnabled?"#4DEEEA":"rgba(255,255,255,.08)"}`,borderRadius:8,padding:"6px 12px",color:orbitEnabled?"#4DEEEA":"rgba(200,220,240,.45)",cursor:"pointer",backdropFilter:"blur(16px)",transition:"all .2s"}}>
            🔄 Free Orbit: {orbitEnabled?"ON":"OFF"}
          </button>
        </div>
      </div>

      {/* bottom mini panel */}
      <div style={{alignSelf:"flex-end",width:"min(380px,100%)",background:"rgba(4,8,15,.82)",border:`1px solid rgba(255,255,255,.08)`,borderRadius:16,padding:"18px 20px",backdropFilter:"blur(20px)",boxShadow:`0 0 0 1px ${zone.color}18`}}>
        <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".62rem",letterSpacing:".12em",textTransform:"uppercase",color:zone.color,marginBottom:6}}>// {zone.label}</div>
        <p style={{fontSize:".82rem",color:"rgba(200,220,240,.58)",lineHeight:1.6,marginBottom:blurb.btn?12:0}}>{blurb.text}</p>
        {blurb.btn&&(
          <button onClick={()=>onOpenPage(activeZone)} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".72rem",background:zone.color,color:"#04080f",border:"none",padding:"8px 18px",borderRadius:8,cursor:"pointer",fontWeight:700,transition:"filter .2s"}}
            onMouseEnter={e=>e.target.style.filter="brightness(1.12)"} onMouseLeave={e=>e.target.style.filter="none"}>
            {blurb.btn}
          </button>
        )}
      </div>
    </>
  );
}

export default function App() {
  const [entered,      setEntered]      = useState(false);
  const [activeZone,   setActiveZone]   = useState("home");
  const [openPage,     setOpenPage]     = useState(null);
  const [orbitEnabled, setOrbitEnabled] = useState(false);
  const PageComponent = openPage ? PAGES[openPage] : null;
  return (
    <>
      {!entered && <Intro onEnter={()=>setEntered(true)}/>}
      <div style={{position:"fixed",inset:0,visibility:entered?"visible":"hidden"}}>
        <Canvas shadows camera={{position:[0,11,18],fov:45}} dpr={[1,1.5]}>
          <Suspense fallback={null}>
            <Experience zones={zones} activeZone={activeZone} onSelect={setActiveZone} orbitEnabled={orbitEnabled}/>
          </Suspense>
        </Canvas>
      </div>
      {entered&&!openPage&&(
        <div style={{position:"fixed",inset:0,pointerEvents:"none",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:18}}>
          <div style={{pointerEvents:"auto"}} className="hud-wrap">
            <HUD activeZone={activeZone} onSelect={setActiveZone} orbitEnabled={orbitEnabled} onOrbitToggle={()=>setOrbitEnabled(v=>!v)} onOpenPage={setOpenPage}/>
          </div>
        </div>
      )}
      {PageComponent&&<PageComponent onBack={()=>setOpenPage(null)}/>}
    </>
  );
}
