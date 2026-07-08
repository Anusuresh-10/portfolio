import BackBar from "./BackBar";
import { projects } from "../data/portfolio";
import "./pages.css";

export default function ProjectsPage({ onBack }) {
  return (
    <div className="page-shell">
      <BackBar label="project_vault" onBack={onBack} />

      <div className="page-hero" style={{ "--zc": "#FFB454" }}>
        <div className="eyebrow">// project_vault</div>
        <h1>Project <span style={{ color: "#FFB454" }}>Vault</span></h1>
        <p>Things I've built — from industry products to personal explorations.</p>
      </div>

      <div className="page-content">
        <div className="projects-grid">
          {projects.map((p) => (
            <div className={`project-card ${p.featured ? "featured" : ""}`} key={p.id} style={{ "--pc": p.color }}>
              <div className="project-img">
                {/* TODO: add screenshot as public/projects/<name>.jpg */}
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, padding:20, width:"100%" }}>
                  <span style={{ fontSize:"2rem" }}>🖼️</span>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:"0.62rem", color:"var(--text-dim)", textAlign:"center" }}>
                    Add: public{p.image}
                  </span>
                </div>
              </div>
              <div className="project-body">
                {p.featured && <div className="feat-badge">⭐ Featured · Industry Project</div>}
                <div className="project-type">{p.type}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-org">{p.org}</div>
                <p className="project-desc">{p.summary}</p>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom: p.links.length ? 12 : 0 }}>
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                {p.links.length > 0 && (
                  <div style={{ display:"flex", gap:8, marginTop:12 }}>
                    {p.links.map((l) => (
                      <a className="btn" href={l.url} target="_blank" rel="noreferrer" key={l.label} style={{ "--zc": p.color }}>
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
