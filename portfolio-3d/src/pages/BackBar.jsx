export default function BackBar({ label, onBack }) {
  return (
    <div className="back-bar">
      <button className="back-btn" onClick={onBack}>
        ← Back to World
      </button>
      <span className="page-name">// {label}</span>
    </div>
  );
}
