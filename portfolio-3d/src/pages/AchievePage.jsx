import BackBar from "./BackBar";
import { nptelCerts, competitions, extracurricular, volunteer } from "../data/portfolio";
import "./pages.css";

export default function AchievePage({ onBack }) {
  return (
    <div className="page-shell">
      <BackBar label="achievements" onBack={onBack} />

      <div className="page-hero" style={{ "--zc": "#FF6B9D" }}>
        <div className="eyebrow">// achievements_&_extracurricular</div>
        <h1><span style={{ color: "#FF6B9D" }}>Achievements</span> & More</h1>
        <p>Certifications, competition results, volunteer work, and life beyond code.</p>
      </div>

      <div className="page-content">

        {/* NPTEL */}
        <div className="section-title">NPTEL Elite Certifications</div>
        <div className="certs-grid">
          {nptelCerts.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-grade">🏅 {c.grade} · NPTEL / IIT</div>
              <div className="cert-course">{c.course}</div>
              <div className="cert-meta">{c.period} · {c.institute}</div>
              <div className="cert-score">Score: {c.score}</div>
            </div>
          ))}
        </div>

        {/* Competitions */}
        <div className="section-title">Competitions & Events</div>
        <div className="comp-list">
          {competitions.map((c, i) => (
            <div className="comp-row" key={i} style={{ "--cc": c.color }}>
              <div className="comp-left">
                <div className="comp-title">{c.title}</div>
                <div className="comp-org">{c.org}</div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4 }}>
                <div className="comp-result">{c.result}</div>
                <div className="comp-year">{c.year}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Extracurricular */}
        <div className="section-title" style={{ marginTop: 40 }}>Extracurricular</div>
        <div className="extra-grid">
          {extracurricular.map((e, i) => (
            <div className="extra-card" key={i}>
              <span className="emoji">{e.emoji}</span>
              <div className="etitle">{e.title}</div>
              <div className="edesc">{e.desc}</div>
            </div>
          ))}
        </div>

        {/* Photos placeholder */}
        <div style={{ marginTop: 32, padding:"20px 24px", background:"rgba(255,107,157,0.05)", border:"1px dashed rgba(255,107,157,0.2)", borderRadius:"var(--radius)" }}>
          <p style={{ fontFamily:"var(--font-mono)", fontSize:"0.75rem", color:"var(--text-dim)", lineHeight:1.7 }}>
            📸 <span style={{ color:"var(--accent-pink)" }}>Coming soon:</span> Add your MC/hosting photos, Hip Hop Tamizha concert pics, Bharatanatyam performance photos, and modeling shots here. Just drop them in <code>public/extra/</code> and update <code>src/data/portfolio.js</code>.
          </p>
        </div>

        {/* Volunteer */}
        <div className="section-title" style={{ marginTop: 40 }}>Volunteer & Social</div>
        <div className="vol-list">
          {volunteer.map((v, i) => (
            <div className="vol-row" key={i}>
              <span>🤝</span>
              <div>
                <div className="vtitle">{v.title}</div>
                <div className="vorg">{v.org}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
