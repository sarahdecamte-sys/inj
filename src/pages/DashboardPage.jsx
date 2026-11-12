
import { useState } from "react";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Plus,
  CalendarDays,
  MoreHorizontal,
  Search,
  Bell,
  ChevronRight,
  Home,
  Wallet,
  TrendingUp,
  Package,
  CreditCard,
  Clock,
  LockKeyhole,
  AlertTriangle
} from "lucide-react";

import TransactionList from "../components/TransactionList";

const money = (value) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR"
  }).format(Number(value || 0));

export default function DashboardPage({
  user,
  transactions = [],
  onNavigate
}) {
  const [showBalance, setShowBalance] = useState(true);

  const recentTransactions = Array.isArray(transactions)
    ? transactions.slice(0, 4)
    : [];

  const upcomingTransactions = Array.isArray(transactions)
    ? transactions
        .filter((transaction) => transaction.status === "Gepland")
        .slice(0, 2)
    : [];

  const blockedReason =
    user?.blockedReason || "Aanvullende rekeningcontrole vereist.";

  const blockedAmount = user?.blockedAmount;

  return (
    <main className="dashboard-home">

      {/* HEADER */}
      <header className="dashboard-topbar">
        <div>
          <h1>Home</h1>
          <p>Welkom terug, {user?.name || "Gebruiker"}</p>
        </div>

        <div className="dashboard-header-actions">
          <button type="button" aria-label="Zoeken">
            <Search size={21} />
          </button>

          <button
            type="button"
            aria-label={showBalance ? "Saldo verbergen" : "Saldo tonen"}
            onClick={() => setShowBalance((prev) => !prev)}
          >
            {showBalance ? <Eye size={21} /> : <EyeOff size={21} />}
          </button>

          <button type="button" aria-label="Meldingen">
            <Bell size={21} />
          </button>

          <div className="dashboard-avatar">
            {(user?.name || "J").charAt(0).toUpperCase()}
          </div>
        </div>
      </header>

      {/* ACCOUNT CARD */}
      <section className="dashboard-account-slider">
        <div className="dashboard-account-card">
          <div className="account-card-icon">
            <Wallet size={23} />
          </div>

          <h3>Cornet account</h3>

          <strong className="account-balance">
            {showBalance
              ? money(user?.sampleBalance)
              : "••••••••"}
          </strong>

          <span>Rekeningoverzicht</span>
        </div>

        <div className="account-slider-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* ACCOUNT STATUS */}
      <section className="panel account-blocked-panel">
        <div className="section-title">
          <div className="blocked-heading">
            <LockKeyhole size={21} />
            <h2>Rekening geblokkeerd</h2>
          </div>

          <span className="pill">Geblokkeerd</span>
        </div>

        <div className="blocked-reason">
          <AlertTriangle size={19} />
          <div>
            <strong>Reden van de blokkering</strong>
            <p>{blockedReason}</p>
          </div>
        </div>

        <div className="blocked-amount">
          <span>Bedrag ter beoordeling</span>
          <strong>
            {blockedAmount !== undefined && blockedAmount !== null
              ? money(blockedAmount)
              : "Niet opgegeven"}
          </strong>
        </div>

       
      </section>

      {/* QUICK ACTIONS */}
      <section className="dashboard-quick-actions">
        <button
          type="button"
          onClick={() => onNavigate("transfer")}
        >
          <span className="quick-icon primary">
            <ArrowRight size={23} />
          </span>
          <span>Overmaken</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate("accounts")}
        >
          <span className="quick-icon primary">
            <Plus size={25} />
          </span>
          <span>Geld toevoegen</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate("transactions")}
        >
          <span className="quick-icon secondary">
            <CalendarDays size={22} />
          </span>
          <span>Plannen</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate("products")}
        >
          <span className="quick-icon secondary">
            <MoreHorizontal size={24} />
          </span>
          <span>Meer</span>
        </button>
      </section>

      {/* UPCOMING PAYMENTS */}
      <section className="dashboard-content-section">
        <div className="dashboard-section-heading">
          <h2>Komende betalingen</h2>

          <button
            type="button"
            onClick={() => onNavigate("transactions")}
          >
            Alles bekijken
            <ChevronRight size={16} />
          </button>
        </div>

        {upcomingTransactions.length > 0 ? (
          <div className="dashboard-upcoming-list">
            {upcomingTransactions.map((transaction) => (
              <div
                className="dashboard-upcoming-item"
                key={transaction.id}
              >
                <div className="transaction-symbol orange">
                  <Clock size={21} />
                </div>

                <div className="upcoming-description">
                  <strong>{transaction.description}</strong>
                  <span>{transaction.date}</span>
                </div>

                <strong className="transaction-amount">
                  {money(transaction.amount)}
                </strong>
              </div>
            ))}
          </div>
        ) : (
          <div className="dashboard-empty">
            <CalendarDays size={23} />
            <span>Geen geplande betalingen</span>
          </div>
        )}
      </section>

      {/* RECENT TRANSACTIONS */}
      <section className="dashboard-content-section">
        <div className="dashboard-section-heading">
          <div>
            <h2>Transacties</h2>
            <p>Recente rekeningactiviteiten</p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("transactions")}
          >
            Alles bekijken
            <ChevronRight size={16} />
          </button>
        </div>

        {recentTransactions.length > 0 ? (
          <div className="dashboard-transactions">
            <TransactionList transactions={recentTransactions} />
          </div>
        ) : (
          <div className="dashboard-empty">
            <Wallet size={23} />
            <span>Geen transacties beschikbaar</span>
          </div>
        )}
      </section>

      {/* BOTTOM NAVIGATION */}
      <nav className="dashboard-bottom-nav">
        <button
          type="button"
          className="active"
          onClick={() => onNavigate("dashboard")}
        >
          <Home size={21} />
          <span>Home</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate("accounts")}
        >
          <Wallet size={21} />
          <span>Financiën</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate("budget")}
        >
          <TrendingUp size={21} />
          <span>Investeren</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate("products")}
        >
          <Package size={21} />
          <span>Producten</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate("transactions")}
        >
          <CreditCard size={21} />
          <span>Kaarten</span>
        </button>
      </nav>

    </main>
  );
}
