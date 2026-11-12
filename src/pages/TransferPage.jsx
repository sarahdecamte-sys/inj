
import { LockKeyhole, CircleHelp } from "lucide-react";
import PageTitle from "../components/PageTitle";

export default function TransferPage() {
  return (
    <>
      <PageTitle
        title="Overschrijven"
        subtitle="Beheer van overboekingen."
      />

      <div className="transfer-layout">
        <section className="panel transfer-panel">
          <div className="panel-heading">
            <div className="quick-icon orange-soft">
              <LockKeyhole size={22} />
            </div>

            <div>
              <h2>Overboekingen geblokkeerd</h2>
              <p className="muted">
                Overboekingen zijn momenteel niet beschikbaar.
              </p>
            </div>
          </div>

          <div className="account-blocked-notice">
            <strong>
              <LockKeyhole size={17} />
              Rekening geblokkeerd
            </strong>

            <p>
              Je kunt momenteel geen nieuwe overboekingen uitvoeren
              of indienen.
            </p>
          </div>
        </section>

        <aside className="panel help-panel">
          <CircleHelp size={22} />
          <h3>Belangrijk</h3>
          <p>
            De overboekingsfunctie is voor deze rekening uitgeschakeld.
          </p>
        </aside>
      </div>
    </>
  );
}
