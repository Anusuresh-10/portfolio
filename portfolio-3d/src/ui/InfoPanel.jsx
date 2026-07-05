import { profile, socials, zones, about, skillTree, projects, contact } from "../data/portfolio";

function HomePanel({ zone }) {
  return (
    <>
      <div className="eyebrow">// welcome.exe</div>
      <h2>Hi, I'm <span style={{ color: zone.color }}>Anu Suresh</span> 👋</h2>
      <p>Final-year B.E. CSE student at Sri Sairam Engineering College, Chennai. Grinding DSA in Java, learning full-stack development, and building real-world products through SSTIF × Tata Insights.</p>
      <p style={{ fontSize: "0.82rem" }}>Click any floating island (or use the nav above) to explore my world.</p>
      <div className="cta-row">
        <a className="btn primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">📄 Resume</a>
        <a className="btn" href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a className="btn" href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </div>
    </>
  );
}

function AboutPanel() {
  return (
    <>
      <div className="eyebrow">// about.json</div>
      <h2>About Me</h2>
      {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      <div className="hl-list">
        {about.highlights.map((h) => (
          <div className="hl-row" key={h.label}>
            <span className="k">{h.label}</span>
            <span className="v">{h.value}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function SkillsPanel({ zone }) {
  return (
    <>
      <div className="eyebrow">// skill_tree.json</div>
      <h2>Skill Tree</h2>
      <p>A live map of what I'm building with right now.</p>
      {skillTree.map((group) => (
        <div className="skill-group" key={group.category}>
          <h3>{group.category}</h3>
          {group.skills.map((s) => (
            <div className="skill-row" key={s.name}>
              <div className="skill-label">
                <span>{s.name}</span>
                <span style={{ color: zone.color }}>{s.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

function ProjectsPanel() {
  return (
    <>
      <div className="eyebrow">// project_vault</div>
      <h2>Projects</h2>
      {projects.map((p) => (
        <div className={`project-card ${p.featured ? "featured" : ""}`} key={p.id}>
          {p.featured && <div className="feat-badge">⭐ Featured · Industry Project</div>}
          <div className="project-title">{p.title}</div>
          <div className="project-org">{p.org}</div>
          <div className="project-summary">{p.summary}</div>
          <div className="tag-row">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          {p.links.length > 0 && (
            <div className="cta-row">
              {p.links.map((l) => <a className="btn" href={l.url} target="_blank" rel="noreferrer" key={l.label}>{l.label} ↗</a>)}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

function ContactPanel({ zone }) {
  return (
    <>
      <div className="eyebrow">// contact_beacon</div>
      <h2>{contact.heading}</h2>
      <p>{contact.message}</p>
      <div className="contact-links">
        <a href={`mailto:${socials.email}`} style={{ "--zc": zone.color }}>
          <span>📧 Email</span><span>{socials.email}</span>
        </a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" style={{ "--zc": zone.color }}>
          <span>💼 LinkedIn</span><span>anu-suresh ↗</span>
        </a>
        <a href={socials.github} target="_blank" rel="noreferrer" style={{ "--zc": zone.color }}>
          <span>🐙 GitHub</span><span>Anusuresh-10 ↗</span>
        </a>
        <a href={socials.hackerrank} target="_blank" rel="noreferrer" style={{ "--zc": zone.color }}>
          <span>👾 HackerRank</span><span>Profile ↗</span>
        </a>
      </div>
    </>
  );
}

const PANELS = { home: HomePanel, about: AboutPanel, skills: SkillsPanel, projects: ProjectsPanel, contact: ContactPanel };

export default function InfoPanel({ activeZone }) {
  const zone = zones.find((z) => z.id === activeZone) || zones[0];
  const Panel = PANELS[activeZone] || HomePanel;
  return (
    <div className="info-panel" style={{ "--zc": zone.color }} key={activeZone}>
      <Panel zone={zone} />
    </div>
  );
}
