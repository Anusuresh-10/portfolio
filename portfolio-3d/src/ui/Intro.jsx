import { profile } from "../data/portfolio";

export default function Intro({ onEnter }) {
  return (
    <div className="intro-overlay">
      <p className="hint">PORTFOLIO_WORLD.exe</p>
      <h1>
        Welcome to <span className="accent">{profile.name}'s</span> Dev World
      </h1>
      <p>
        A small 3D world built from floating zones — Home, About, Skills,
        Projects, and Contact. Click a zone (or the nav above) to travel
        there, and drag your mouse to look around.
      </p>
      <button className="btn primary" style={{ "--zone-color": "#4DEEEA" }} onClick={onEnter}>
        Enter World →
      </button>
      <p className="hint">Best viewed on desktop · works on mobile too</p>
    </div>
  );
}
