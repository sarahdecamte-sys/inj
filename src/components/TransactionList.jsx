import { ArrowDownLeft, ArrowUpRight, ShoppingBag, House, ArrowLeftRight } from "lucide-react";
const money = (value) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(Math.abs(value));
export default function TransactionList({ transactions = [] }) {
  const icon = (t) => t.amount > 0 ? <ArrowDownLeft /> : t.icon === "home" ? <House /> : t.icon === "transfer" ? <ArrowLeftRight /> : <ShoppingBag />;
  return <div className="transaction-list">{transactions.map(t => <div className="transaction-row" key={t.id}>
    <div className={`transaction-icon ${t.amount > 0 ? "income" : ""}`}>{icon(t)}</div>
    <div className="transaction-info"><strong>{t.name}</strong><small>{t.detail}</small></div>
    <div className="transaction-date">{t.date}</div>
    <div className={`transaction-amount ${t.amount > 0 ? "positive" : ""}`}>{t.amount > 0 ? "+" : "−"}{money(t.amount)}<small>{t.status}</small></div>
  </div>)}</div>;
}