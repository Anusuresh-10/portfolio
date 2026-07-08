import BackBar from "./BackBar";
import { skillTree } from "../data/portfolio";
import "./pages.css";

export default function SkillsPage({ onBack }) {
  return (
    <div className="page-shell">
      <BackBar label="skill_tree" onBack={onBack} />

      <div className="page-hero" style={{ "--zc": "#4DEEEA" }}>
        <div className="eyebrow">// skill_tree.json</div>
        <h1>Skill <span style={{ color: "#4DEEEA" }}>Tree</span></h1>
        <p>A live map of what I'm building with right now — updated as I learn.</p>
      </div>

      <div className="page-content">
        <div className="skills-grid">
          {skillTree.map((group) => (
            <div className="skill-group-card" key={group.category}>
              <div className="skill-group-title">{group.category}</div>
              {group.skills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <div className="skill-label">
                    <span>{s.name}</span>
                    <span className="skill-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, padding: "20px", background: "rgba(77,238,234,0.05)", border: "1px solid rgba(77,238,234,0.15)", borderRadius: "var(--radius)" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-dim)", lineHeight: 1.6 }}>
            🎯 Currently deep in: <span style={{ color: "var(--accent-cyan)" }}>DSA in Java</span> · <span style={{ color: "var(--accent-violet)" }}>Full-Stack (React + Node)</span> · <span style={{ color: "var(--accent-amber)" }}>Aptitude prep</span> — through Apna College's structured roadmap.
          </p>
        </div>
      </div>
    </div>
  );
}
