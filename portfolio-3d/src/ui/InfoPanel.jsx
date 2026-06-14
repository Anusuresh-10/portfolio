import {
  profile,
  socials,
  zones,
  about,
  skillTree,
  projects,
  contact,
} from "../data/portfolio";

function HomePanel({ zone }) {
  return (
    <>
      <div className="eyebrow">// system online</div>
      <h2>
        Hi, I'm <span style={{ color: zone.color }}>{profile.name}</span>
      </h2>
      <p>{profile.tagline}</p>
      <p style={{ fontSize: "0.8rem" }}>
        Use the nav above (or click a floating platform) to explore my world —
        About, Skills, Projects, and Contact.
      </p>
      <div className="cta-row">
        <a className="btn primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
          Download Resume
        </a>
        <a className="btn" href={socials.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn" href={socials.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </>
  );
}

function AboutPanel() {
  return (
    <>
      <div className="eyebrow">// about.json</div>
      <h2>{about.heading}</h2>
      {about.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <div className="highlight-list">
        {about.highlights.map((h) => (
          <div className="highlight-row" key={h.label}>
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
      <div className="eyebrow">// skill_tree</div>
      <h2>Skill Tree</h2>
      <p>A living map of what I'm building with right now.</p>
      {skillTree.map((group) => (
        <div className="skill-group" key={group.category}>
          <h3>{group.category}</h3>
          {group.skills.map((skill) => (
            <div className="skill-row" key={skill.name}>
              <div className="skill-label">
                <span>{skill.name}</span>
                <span style={{ color: zone.color }}>{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
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
          {p.featured && <div className="featured-badge">Featured · Industry Project</div>}
          <div className="project-title">{p.title}</div>
          <div className="project-org">{p.org}</div>
          <div className="project-summary">{p.summary}</div>
          <div className="tag-row">
            {p.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          {p.links.length > 0 && (
            <div className="cta-row">
              {p.links.map((link) => (
                <a className="btn" href={link.url} target="_blank" rel="noreferrer" key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

function ContactPanel() {
  return (
    <>
      <div className="eyebrow">// contact_beacon</div>
      <h2>{contact.heading}</h2>
      <p>{contact.message}</p>
      <div className="contact-links">
        <a href={`mailto:${socials.email}`}>
          <span>Email</span>
          <span>{socials.email}</span>
        </a>
        <a href={socials.github} target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <span>↗</span>
        </a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer">
          <span>LinkedIn</span>
          <span>↗</span>
        </a>
        {socials.leetcode && (
          <a href={socials.leetcode} target="_blank" rel="noreferrer">
            <span>LeetCode</span>
            <span>↗</span>
          </a>
        )}
      </div>
    </>
  );
}

const PANELS = {
  home: HomePanel,
  about: AboutPanel,
  skills: SkillsPanel,
  projects: ProjectsPanel,
  contact: ContactPanel,
};

export default function InfoPanel({ activeZone }) {
  const zone = zones.find((z) => z.id === activeZone) || zones[0];
  const Panel = PANELS[activeZone] || HomePanel;

  return (
    <div className="info-panel" style={{ "--zone-color": zone.color }} key={activeZone}>
      <Panel zone={zone} />
    </div>
  );
}
