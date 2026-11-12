export default function PageTitle({ eyebrow = "PERSOONLIJKE OMGEVING", title, subtitle }) {
  return <div className="page-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{subtitle && <p className="muted">{subtitle}</p>}</div></div>;
}