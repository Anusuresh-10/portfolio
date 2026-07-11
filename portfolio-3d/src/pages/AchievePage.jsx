import { nptelCerts, competitions, extracurricular, volunteer } from "../data/portfolio";
import "./pages.css";

const extraColors = {
  "Hip Hop Tamizha Concert": { c:"#FF6B9D", bg:"rgba(255,107,157,.07)" },
  "Carnatic Music":          { c:"#9D7BFF", bg:"rgba(157,123,255,.07)" },
  "Bharatanatyam":           { c:"#FFB454", bg:"rgba(255,180,84,.07)"  },
  "Event Host / MC":         { c:"#4DEEEA", bg:"rgba(77,238,234,.07)"  },
  "Modeling & Acting":       { c:"#5CF29A", bg:"rgba(92,242,154,.07)"  },
};

export default function AchievePage({ onBack }) {
  return (
    <div className="ps" style={{"--font-m":"'JetBrains Mono',monospace","--ac":"#FF6B9D"}}>
      <div className="ps-bg"/><div className="ps-scan"/>
      <div className="bb">
        <button className="bb-back" onClick={onBack}>← Back to World</button>
        <div className="bb-right"><span className="bb-tag">achievements</span></div>
      </div>

      <div className="ph ph-2col">
        <div>
          <div className="ph-eyebrow">Wins & Milestones</div>
          <h1><span className="gt-p">Achievements</span><br/>& More</h1>
          <p className="ph-sub">NPTEL Elite certifications from IITs, competition results, and a life far beyond code.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[{v:"4",l:"NPTEL Elite",c:"#4DEEEA",bg:"rgba(77,238,234,.08)"},{v:"8+",l:"Competitions",c:"#FF6B9D",bg:"rgba(255,107,157,.08)"},{v:"2",l:"Prize Wins",c:"#FFB454",bg:"rgba(255,180,84,.08)"},{v:"1",l:"Semi-Finalist (ET-AI)",c:"#5CF29A",bg:"rgba(92,242,154,.08)"}].map(s=>(
            <div key={s.l} className="sc" style={{"--sc-bg":`radial-gradient(circle at 50% 0%,${s.bg},transparent 65%)`}}>
              <span className="sc-val" style={{background:`linear-gradient(135deg,${s.c},${s.c}99)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{s.v}</span>
              <span className="sc-lbl">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pw">
        {/* NPTEL */}
        <div className="sec">
          <div className="sl">NPTEL Elite Certifications</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}} className="cert-g4">
            {nptelCerts.map((c,i)=>(
              <div className="cc" key={i}>
                <div className="cc-iit">🏛️ {c.institute}</div>
                <div className="cc-course">{c.course}</div>
                <div className="cc-meta">{c.period} · 12 weeks</div>
                <div className="cc-score">✓ {c.score}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions */}
        <div className="sec">
          <div className="sl">Competitions & Events</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}} className="two-col">
            {competitions.map((c,i)=>(
              <div className="copc" key={i} style={{"--cc":c.color,"--ccb":`${c.color}40`}}>
                <div>
                  <div className="copc-title">{c.title}</div>
                  <div className="copc-org">{c.org}</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:6}}>
                  <div className="copc-result">{c.result}</div>
                  <div className="copc-year">{c.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular */}
        <div className="sec">
          <div className="sl">Extracurricular Life</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:14}} className="extra-g5">
            {extracurricular.map((e,i)=>{
              const cfg = extraColors[e.title] || {c:"#4DEEEA",bg:"rgba(77,238,234,.06)"};
              return (
                <div className="exc" key={i} style={{"--ex-bg":cfg.bg}}>
                  <span className="exc-em">{e.emoji}</span>
                  <div className="exc-t" style={{color:cfg.c}}>{e.title}</div>
                  <div className="exc-d">{e.desc}</div>
                </div>
              );
            })}
          </div>
          <div style={{marginTop:24,padding:"20px 26px",background:"rgba(255,107,157,.04)",border:"1px dashed rgba(255,107,157,.2)",borderRadius:14}}>
            <p style={{fontFamily:"var(--font-m)",fontSize:".73rem",color:"rgba(200,220,240,.45)",lineHeight:1.7}}>
              📸 <span style={{color:"#FF6B9D"}}>Coming soon:</span> MC/hosting photos, Hip Hop Tamizha concert pics, Bharatanatyam performance photos and modeling shots. Drop them in <code style={{color:"#4DEEEA",background:"rgba(77,238,234,.08)",padding:"1px 6px",borderRadius:4}}>public/extra/</code> when ready.
            </p>
          </div>
        </div>

        {/* Volunteer */}
        <div className="sec">
          <div className="sl">Volunteer & Social</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}} className="two-col">
            {volunteer.map((v,i)=>(
              <div className="vc" key={i}>
                <span style={{fontSize:"1.3rem",flexShrink:0}}>🤝</span>
                <div>
                  <div className="vc-title">{v.title}</div>
                  <div className="vc-org">{v.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
