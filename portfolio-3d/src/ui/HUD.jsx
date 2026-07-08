import { useState } from "react";
import { profile, zones } from "../data/portfolio";
import "./hud.css";

const ZONE_BLURBS = {
  home:     { text: "Start here — explore my 3D world. Click any floating island or use the nav to travel.",   btn: null },
  about:    { text: "Learn about me, my background, and my 2 internships with real photos.",                    btn: "Open About Page" },
  skills:   { text: "A live skill tree — languages, frameworks, tools, and problem-solving.",                   btn: "Open Skills Page" },
  projects: { text: "Bird Survey App (Tata Insights), Task Management, and more — with project details.",       btn: "Open Projects Page" },
  achieve:  { text: "NPTEL Elite certs, competition results, and extracurricular life beyond code.",            btn: "Open Achievements Page" },
  contact:  { text: "I'm actively looking for SDE placements. All my social links in one place.",              btn: "Open Contact Page" },
};

export default function HUD({ activeZone, onSelect, orbitEnabled, onOrbitToggle, onOpenPage }) {
  const blurb = ZONE_BLURBS[activeZone] || ZONE_BLURBS.home;
  const zone = zones.find((z) => z.id === activeZone) || zones[0];

  return (
    <>
      {/* top bar */}
      <div className="hud">
        <div className="hud-id">
          <div className="name">{profile.name}</div>
          <div className="role">{profile.role}</div>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:6, alignItems:"flex-end" }}>
          <nav className="hud-nav">
            {zones.map((z) => (
              <button
                key={z.id}
                className={activeZone === z.id ? "active" : ""}
                style={{ "--zc": z.color }}
                onClick={() => onSelect(z.id)}
              >
                <span className="dot" />
                {z.shortLabel}
              </button>
            ))}
          </nav>
          <button
            className={`orbit-toggle ${orbitEnabled ? "on" : ""}`}
            onClick={onOrbitToggle}
          >
            {orbitEnabled ? "🔄 Free Orbit: ON" : "🔄 Free Orbit: OFF"}
          </button>
        </div>
      </div>

      {/* bottom mini panel */}
      <div className="mini-panel" style={{ "--zc": zone.color }} key={activeZone}>
        <div className="zone-eyebrow">// {zone.label}</div>
        <h3>{zone.label}</h3>
        <p>{blurb.text}</p>
        {blurb.btn && (
          <button className="open-btn" onClick={() => onOpenPage(activeZone)}>
            {blurb.btn} →
          </button>
        )}
      </div>
    </>
  );
}
