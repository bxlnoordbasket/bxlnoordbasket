export default function SectionHeader({ eyebrow, title, text, action }) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      <div className="section-header-side">
        {text && <p>{text}</p>}
        {action}
      </div>
    </div>
  );
}
