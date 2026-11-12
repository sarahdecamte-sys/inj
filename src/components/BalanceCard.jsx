import { MoreHorizontal } from "lucide-react";
const money = (value) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(value);
export default function BalanceCard({ title, value, kind = "orange", show = true, subtitle = "Voorbeeldsaldo" }) {
  return <div className={`balance-card ${kind}`}><div className="card-top"><span>{title}</span><MoreHorizontal size={20} /></div><div className="balance-label">{subtitle}</div><strong>{show ? money(value) : "••••••••"}</strong><div className="card-bottom"><span>JMG · Persoonlijk</span><span>•••• 4821</span></div></div>;
}