import BackBar from "./BackBar";
import { profile, socials } from "../data/portfolio";

const contact = {
  message: "I'm actively looking for SDE internships and full-time placements. If you're hiring or want to collaborate, reach out!",
};
import "./pages.css";

export default function ContactPage({ onBack }) {
  return (
    <div className="page-shell">
      <BackBar label="contact_beacon" onBack={onBack} />

      <div className="page-hero" style={{ "--zc": "#5CF29A" }}>
        <div className="eyebrow">// contact_beacon</div>
        <h1>Let's <span style={{ color: "#5CF29A" }}>Connect</span></h1>
        <p>{contact.message}</p>
      </div>

      <div className="page-content">
        <div className="section-title">Reach Out</div>
        <div className="contact-links">
          <a className="contact-link" href={`mailto:${socials.email}`} style={{ "--zc": "#5CF29A" }}>
            <span className="cl-label">📧 Email</span>
            <span className="cl-value">{socials.email}</span>
          </a>
          <a className="contact-link" href={socials.linkedin} target="_blank" rel="noreferrer" style={{ "--zc": "#5CF29A" }}>
            <span className="cl-label">💼 LinkedIn</span>
            <span className="cl-value">anu-suresh-8166192b7 ↗</span>
          </a>
          <a className="contact-link" href={socials.github} target="_blank" rel="noreferrer" style={{ "--zc": "#5CF29A" }}>
            <span className="cl-label">🐙 GitHub</span>
            <span className="cl-value">Anusuresh-10 ↗</span>
          </a>
          <a className="contact-link" href={socials.hackerrank} target="_blank" rel="noreferrer" style={{ "--zc": "#5CF29A" }}>
            <span className="cl-label">👾 HackerRank</span>
            <span className="cl-value">Profile ↗</span>
          </a>
          <a className="contact-link" href={profile.resumeUrl} target="_blank" rel="noreferrer" style={{ "--zc": "#5CF29A" }}>
            <span className="cl-label">📄 Resume</span>
            <span className="cl-value">Download PDF ↗</span>
          </a>
        </div>

        <div style={{ marginTop:40, padding:"22px 24px", background:"rgba(92,242,154,0.05)", border:"1px solid rgba(92,242,154,0.15)", borderRadius:"var(--radius)" }}>
          <p style={{ fontFamily:"var(--font-mono)", fontSize:"0.82rem", color:"var(--text-dim)", lineHeight:1.7 }}>
            📍 Based in <span style={{ color:"var(--accent-green)" }}>Chennai, India</span> · Open to SDE roles, internships, and collaborations · Final year B.E. CSE @ Sri Sairam Engineering College
          </p>
        </div>
      </div>
    </div>
  );
}
