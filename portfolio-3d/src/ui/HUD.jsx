import { profile, zones } from "../data/portfolio";

export default function HUD({ activeZone, onSelect }) {
  return (
    <div className="hud">
      <div className="hud-identity">
        <div className="name">{profile.name}</div>
        <div className="role">{profile.role}</div>
      </div>

      <nav className="hud-nav" aria-label="Portfolio zones">
        {zones.map((zone) => (
          <button
            key={zone.id}
            className={activeZone === zone.id ? "active" : ""}
            style={{ "--zone-color": zone.color }}
            onClick={() => onSelect(zone.id)}
            aria-current={activeZone === zone.id}
          >
            <span className="dot" />
            {zone.shortLabel}
          </button>
        ))}
      </nav>
    </div>
  );
}
