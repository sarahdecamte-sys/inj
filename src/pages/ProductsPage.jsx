import { CreditCard, PiggyBank, TrendingUp, Wallet } from "lucide-react";
import PageTitle from "../components/PageTitle";
const products = [["Sparen", "Bekijk algemene spaarmogelijkheden.", PiggyBank], ["Betaalrekening", "Bekijk de functies van een betaalrekening.", Wallet], ["Betaalkaarten", "Bekijk kaartinformatie in de demonstratie.", CreditCard], ["Financieel inzicht", "Krijg overzicht van inkomsten en uitgaven.", TrendingUp]];
export default function ProductsPage() {
  return <><PageTitle title="Producten" subtitle="Ontdek de onderdelen van de JMG-demonstratie."/><div className="product-grid">{products.map(([name, desc, Icon]) => <article className="product-card" key={name}><div className="product-icon"><Icon/></div><h3>{name}</h3><p>{desc}</p><span className="text-button">Meer informatie →</span></article>)}</div></>;
}