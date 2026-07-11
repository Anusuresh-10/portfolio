import { projects } from "../data/portfolio";
import "./pages.css";
const emojis = { "bird-survey":"🦅","task-management":"📋","project-3":"🚀" };
export default function ProjectsPage({ onBack }) {
  return (
    <div className="ps" style={{"--font-m":"'JetBrains Mono',monospace","--ac":"#FFB454"}}>
      <div className="ps-bg"/><div className="ps-scan"/>
      <div className="bb">
        <button className="bb-back" onClick={onBack}>← Back to World</button>
        <div className="bb-right"><span className="bb-tag">project_vault</span></div>
      </div>
      <div className="ph ph-2col">
        <div>
          <div className="ph-eyebrow">Things I've Built</div>
          <h1>Project <span className="gt-a">Vault</span></h1>
          <p className="ph-sub">From industry products for Tata Insights to personal explorations — real code, real impact.</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {[{v:projects.length,l:"Projects Built",c:"#FFB454"},{v:"1",l:"Industry Client",c:"#9D7BFF"},{v:"2",l:"Live Internship Apps",c:"#4DEEEA"}].map(s=>(
            <div key={s.l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px",background:`${s.c}0d`,border:`1px solid ${s.c}30`,borderRadius:14}}>
              <span style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:800,fontSize:"1.4rem",color:s.c}}>{s.v}</span>
              <span style={{fontFamily:"var(--font-m)",fontSize:".7rem",color:"rgba(200,220,240,.5)"}}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pw">
        <div className="sl">All Projects</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}} className="proj-g3">
          {projects.map(p=>(
            <div key={p.id} className={`pc ${p.featured?"feat":""}`} style={{"--pc":p.color,"--pc-bg":`${p.color}18`}}>
              <div className="pc-img">
                {p.featured&&<div className="feat-pin">⭐ Featured</div>}
                <div className="pc-img-bg"/>
                <span className="pc-emoji">{emojis[p.id]||"🛠️"}</span>
                <div className="pc-img-hint">Add: public{p.image}</div>
              </div>
              <div className="pc-body">
                <div className="pc-type">{p.type}</div>
                <div className="pc-title">{p.title}</div>
                <div className="pc-org">{p.org}</div>
                <p className="pc-desc">{p.summary}</p>
                <div className="pc-feats">{p.features.map(f=><div className="pc-feat" key={f}>{f}</div>)}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                  {p.tags.map(t=><span style={{fontFamily:"var(--font-m)",fontSize:".62rem",padding:"3px 9px",borderRadius:20,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.09)",color:"rgba(200,220,240,.5)"}} key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:40,padding:"22px 28px",background:"rgba(255,180,84,.04)",border:"1px dashed rgba(255,180,84,.2)",borderRadius:16}}>
          <p style={{fontFamily:"var(--font-m)",fontSize:".74rem",color:"rgba(200,220,240,.5)",lineHeight:1.7}}>
            💡 <span style={{color:"#FFB454"}}>To add screenshots:</span> Drop images into <code style={{color:"#4DEEEA",background:"rgba(77,238,234,.08)",padding:"1px 6px",borderRadius:4}}>public/projects/</code> using filenames shown above, then push to GitHub — Vercel auto-updates.
          </p>
        </div>
      </div>
    </div>
  );
}
