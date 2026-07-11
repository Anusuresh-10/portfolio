import { profile, about, internships, techStack } from "../data/portfolio";
import "./pages.css";

const stats = [
  { v:"8.49", l:"CGPA", g:"linear-gradient(135deg,#4DEEEA,#4D9FFF)", bg:"rgba(77,238,234,.08)" },
  { v:"2",    l:"Internships", g:"linear-gradient(135deg,#9D7BFF,#FF6B9D)", bg:"rgba(157,123,255,.08)" },
  { v:"4",    l:"NPTEL Certs", g:"linear-gradient(135deg,#FFB454,#FF6B9D)", bg:"rgba(255,180,84,.08)" },
  { v:"8+",   l:"Competitions", g:"linear-gradient(135deg,#5CF29A,#4DEEEA)", bg:"rgba(92,242,154,.08)" },
];

export default function AboutPage({ onBack }) {
  return (
    <div className="ps" style={{"--font-m":"'JetBrains Mono',monospace","--ac":"#9D7BFF"}}>
      <div className="ps-bg"/><div className="ps-scan"/>
      <div className="bb">
        <button className="bb-back" onClick={onBack}>← Back to World</button>
        <div className="bb-right"><span className="bb-tag">about.json</span></div>
      </div>

      {/* HERO */}
      <div className="ph ph-2col">
        <div>
          <div className="ph-eyebrow">Who I Am</div>
          <h1 className="ph-t">About <span className="gt-v">Anu Suresh</span></h1>
          <p className="ph-sub">{about.bio[0]}</p>
          <div style={{marginTop:28,display:"flex",gap:10,flexWrap:"wrap"}}>
            {["B.E. CSE","Final Year","Java Developer","Full-Stack Learner"].map(t=>(
              <span key={t} style={{fontFamily:"var(--font-m)",fontSize:".7rem",padding:"5px 14px",borderRadius:20,border:"1px solid rgba(157,123,255,.3)",color:"#9D7BFF",background:"rgba(157,123,255,.07)"}}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {stats.map(s=>(
            <div key={s.l} className="sc" style={{"--sc-bg":`radial-gradient(circle at 50% 0%,${s.bg},transparent 65%)`}}>
              <span className="sc-val" style={{background:s.g,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{s.v}</span>
              <span className="sc-lbl">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pw">
        {/* Story + Quick Facts */}
        <div className="sec" style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:32,alignItems:"start"}}>
          <div>
            <div className="sl">My Story</div>
            {about.bio.map((p,i)=>(
              <p key={i} style={{color:"rgba(200,220,240,.65)",fontSize:".95rem",lineHeight:1.85,marginBottom:18}}>{p}</p>
            ))}
            {/* quote */}
            <div style={{marginTop:28,padding:"22px 26px",background:"rgba(157,123,255,.05)",border:"1px solid rgba(157,123,255,.2)",borderLeft:"3px solid #9D7BFF",borderRadius:"0 14px 14px 0"}}>
              <p style={{fontFamily:"var(--font-m)",fontSize:".82rem",color:"rgba(200,220,240,.6)",lineHeight:1.75,fontStyle:"italic"}}>
                "Every line of code is a step closer to the career I'm building — one DSA problem, one project, one internship at a time."
              </p>
            </div>
          </div>
          <div>
            <div className="sl">Quick Facts</div>
            <div className="gc" style={{padding:"22px 26px"}}>
              <div style={{position:"relative"}}><div className="grid-bg" style={{opacity:.5}}/></div>
              <div className="ht">
                {about.highlights.map(h=>(
                  <div className="ht-row" key={h.label}>
                    <span className="ht-k">{h.label}</span>
                    <span className="ht-v">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="sec">
          <div className="sl">Tech Stack</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
            {techStack.map(t=>(
              <div className="tp" key={t.name}>
                <span style={{fontSize:"1.1rem"}}>{t.icon}</span>
                <span>{t.name}</span>
                <span style={{width:6,height:6,borderRadius:"50%",background:t.color,boxShadow:`0 0 6px ${t.color}`,flexShrink:0}}/>
              </div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="sec">
          <div className="sl">Experience</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}} className="two-col">
            {internships.map(intern=>(
              <div key={intern.id} className="gc" style={{padding:"30px",borderLeft:`3px solid ${intern.color}`}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:18,gap:12,flexWrap:"wrap"}}>
                  <div>
                    <div style={{fontFamily:"var(--font-m)",fontSize:".65rem",color:intern.color,letterSpacing:".08em",marginBottom:6}}>{intern.duration} · {intern.period}</div>
                    <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"1.2rem",fontWeight:700,color:"#e8f1f8",marginBottom:4}}>{intern.role}</div>
                    <div style={{fontSize:".88rem",color:"rgba(200,220,240,.55)"}}>{intern.company}</div>
                  </div>
                  <span style={{fontFamily:"var(--font-m)",fontSize:".6rem",padding:"5px 12px",borderRadius:20,border:`1px solid ${intern.color}50`,color:intern.color,background:`${intern.color}10`,whiteSpace:"nowrap"}}>{intern.location}</span>
                </div>
                <p style={{fontSize:".85rem",color:"rgba(200,220,240,.6)",lineHeight:1.7,marginBottom:18}}>{intern.description}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:18}}>
                  {intern.tags.map(t=><span className="chip" key={t}>{t}</span>)}
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:18}}>
                  {intern.highlights.map((h,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"flex-start",gap:6,fontSize:".76rem",color:"rgba(200,220,240,.55)"}}>
                      <span style={{color:intern.color,fontSize:".5rem",marginTop:4,flexShrink:0}}>✦</span>{h}
                    </div>
                  ))}
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
                  {intern.photos.map((p,i)=>(
                    <div className="pslot" key={i}>
                      <span style={{fontSize:"1.2rem"}}>📷</span>
                      <span>{p.caption}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
