import { profile, zones } from "../data/portfolio";

export default function HUD({ activeZone, onSelect }) {
  return (
    <div className="hud">
      <div className="hud-id">
        <div className="name">{profile.name}</div>
        <div className="role">{profile.role}</div>
      </div>
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
    </div>
  );
}
