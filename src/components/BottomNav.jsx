import { Home, CreditCard, ArrowLeftRight, ReceiptText, UserRound } from "lucide-react";

const items = [
  ["dashboard", "Home", Home],
  ["accounts", "Rekeningen", CreditCard],
  ["transfer", "Overschrijven", ArrowLeftRight],
  ["transactions", "Activiteit", ReceiptText],
  ["profile", "Profiel", UserRound],
];

export default function BottomNav({ active, onChange }) {
  return <nav className="bottom-nav">
    {items.map(([id, label, Icon]) => (
      <button key={id} className={`nav-item ${active === id ? "active" : ""}`} onClick={() => onChange(id)}>
        <Icon size={20} /><span>{label}</span>
      </button>
    ))}
  </nav>;
}