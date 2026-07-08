import BackBar from "./BackBar";
import { profile, about, internships } from "../data/portfolio";
import "./pages.css";

function PhotoStrip({ photos, color }) {
  return (
    <div className="photo-strip">
      {photos.map((p, i) => (
        <div key={i} style={{ position: "relative" }}>
          <div className="photo-placeholder">
            <span>📷</span>
            <span>{p.caption}</span>
            <span style={{ fontSize: "0.55rem", marginTop: 2 }}>
              Add: public{p.src}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage({ onBack }) {
  return (
    <div className="page-shell">
      <BackBar label="about.json" onBack={onBack} />

      <div className="page-hero" style={{ "--zc": "#9D7BFF" }}>
        <div className="eyebrow">// about_me</div>
        <h1>About <span style={{ color: "#9D7BFF" }}>Anu Suresh</span></h1>
        <p>{about.bio[0]}</p>
      </div>

      <div className="page-content">

        {/* Bio */}
        <div className="section-title">My Story</div>
        {about.bio.slice(1).map((p, i) => (
          <p key={i} style={{ color: "var(--text-dim)", fontSize: "0.93rem", lineHeight: 1.7, marginBottom: 12 }}>{p}</p>
        ))}

        {/* Highlights */}
        <div className="section-title" style={{ marginTop: 36 }}>Quick Facts</div>
        <div className="hl-list">
          {about.highlights.map((h) => (
            <div className="hl-row" key={h.label}>
              <span className="k">{h.label}</span>
              <span className="v">{h.value}</span>
            </div>
          ))}
        </div>

        {/* Internships */}
        <div className="section-title" style={{ marginTop: 48 }}>Internships</div>

        {internships.map((intern) => (
          <div className="internship-card" key={intern.id} style={{ "--ic": intern.color }}>
            <div className="role-line">{intern.role}</div>
            <div className="company-line">{intern.company}</div>
            <div className="meta-line">{intern.duration}  ·  {intern.location}</div>
            <p className="desc">{intern.description}</p>
            <div className="highlight-chips">
              {intern.highlights.map((h, i) => <span className="chip" key={i}>{h}</span>)}
            </div>
            <PhotoStrip photos={intern.photos} color={intern.color} />
            <p style={{ marginTop: 12, fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
              💡 To add photos: copy your images into the paths shown above inside the <code>public/</code> folder.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
