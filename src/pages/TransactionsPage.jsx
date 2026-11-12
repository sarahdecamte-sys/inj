
import PageTitle from "../components/PageTitle";
import TransactionList from "../components/TransactionList";

export default function TransactionsPage({ transactions = [] }) {
  return (
    <>
      <PageTitle
        title="Transacties"
        subtitle="Overzicht van uw rekeningactiviteiten."
      />

      <section className="panel transactions-panel">
        <div className="section-title">
          <h2>Rekeningstatus</h2>
          <span className="pill">Geblokkeerd</span>
        </div>

        <div className="account-blocked-notice">
          <strong>Overboekingen niet beschikbaar</strong>
          <p>
            Overboekingen zijn momenteel uitgeschakeld voor deze rekening.
          </p>
        </div>
      </section>

      <section className="panel transactions-panel">
        <div className="section-title">
          <h2>Alle transacties</h2>
        </div>

        <TransactionList transactions={transactions} />
      </section>
    </>
  );
}
