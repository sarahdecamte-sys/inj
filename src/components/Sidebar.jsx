import { Home, CreditCard, ArrowLeftRight, ReceiptText, UserRound, Package, BarChart3 } from "lucide-react";

const items = [
  ["dashboard", "Overzicht", Home],
  ["accounts", "Rekeningen", CreditCard],
  ["transfer", "Overschrijven", ArrowLeftRight],
  ["transactions", "Transacties", ReceiptText],
  ["products", "Producten", Package],
  ["budget", "Budget", BarChart3],
  ["profile", "Profiel", UserRound],
];

export default function Sidebar({ active, onChange }) {
  return <aside className="sidebar">
    <div className="brand"><img src="/images/L1.jpeg" alt="JMG" /><span>JMG</span></div>
    <p className="side-label">MENU</p>
    {items.map(([id, label, Icon]) => <button key={id} onClick={() => onChange(id)} className={`side-link ${active === id ? "selected" : ""}`}><Icon size={19} /><span>{label}</span></button>)}
    
  </aside>;
}