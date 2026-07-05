export default function Intro({ onEnter }) {
  return (
    <div className="intro">
      <p className="mono-tag">portfolio_world.exe — loading complete</p>
      <h1>Welcome to<br /><span>Anu Suresh's</span> Dev World</h1>
      <p>
        A 3D interactive portfolio — navigate floating islands representing
        my About, Skills, Projects, and Contact zones. Click any platform
        or use the nav to travel there.
      </p>
      <button className="btn primary" style={{ "--zc": "#4DEEEA", fontSize: "0.85rem", padding: "12px 28px" }} onClick={onEnter}>
        Enter World →
      </button>
      <p className="hint">Drag to look around · Click islands to travel</p>
    </div>
  );
}
