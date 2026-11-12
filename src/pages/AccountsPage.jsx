
import { useState } from "react";
import {
  Search,
  CreditCard,
  Wallet,
  ChevronRight,
  LockKeyhole,
  RefreshCw,
  Gauge,
  LayoutGrid,
  KeyRound,
  Eye,
  EyeOff,
  CheckCircle,
  Info,
  X
} from "lucide-react";
import PageTitle from "../components/PageTitle";

export default function AccountsPage({ user }) {
  const [showNumber, setShowNumber] = useState(false);
  const [locked, setLocked] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [notice, setNotice] = useState("");

  const cardSections = [
    {
      id: "details",
      title: "Kaartgegevens",
      icon: CreditCard,
      content: (
        <>
          <div className="jmg-detail-line">
            <span>Kaarttype</span>
            <strong>Debit</strong>
          </div>
          <div className="jmg-detail-line">
            <span>Kaartnummer</span>
            <strong>•••• •••• •••• ••••</strong>
          </div>
          <div className="jmg-detail-line">
            <span>Kaartnaam</span>
            <strong>{user?.name || "JMG"}</strong>
          </div>
          <div className="jmg-detail-line">
            <span>Rekeningnummer</span>
            <strong>{user?.accountNumber || "Niet gekoppeld"}</strong>
          </div>
          <div className="jmg-detail-line">
            <span>Vervaldatum</span>
            <strong>Niet beschikbaar</strong>
          </div>
        </>
      )
    },
    {
      id: "limits",
      title: "Kaartlimieten",
      icon: Gauge,
      content: (
        <div className="jmg-info-content">
          <Info size={19} />
          <p>De kaartlimieten zijn momenteel niet beschikbaar.</p>
        </div>
      )
    },
    {
      id: "features",
      title: "Kaartfuncties",
      icon: LayoutGrid,
      content: (
        <>
          <div className="jmg-detail-line">
            <span>Online betalingen</span>
            <strong>Niet beschikbaar</strong>
          </div>
          <div className="jmg-detail-line">
            <span>Contactloos betalen</span>
            <strong>Niet beschikbaar</strong>
          </div>
          <div className="jmg-detail-line">
            <span>Internationale betalingen</span>
            <strong>Niet beschikbaar</strong>
          </div>
        </>
      )
    },
    {
      id: "pin",
      title: "Pincode beheren",
      icon: KeyRound,
      content: (
        <div className="jmg-info-content">
          <Info size={19} />
          <p>Neem contact op met de kaartbeheerder om je pincode te beheren.</p>
        </div>
      )
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? "" : id);
  };

  return (
    <div className="jmg-cards-page">
      <PageTitle
        title="Cards"
        subtitle="Beheer je betaalkaart en kaartinstellingen."
      />

      <div className="jmg-cards-topbar">
        <h2>Mijn kaarten</h2>
        <button
          className="jmg-search-button"
          onClick={() => setShowNumber(!showNumber)}
          aria-label="Kaartnummer tonen of verbergen"
        >
          {showNumber ? <EyeOff size={19} /> : <Eye size={19} />}
        </button>
      </div>

      <div className="jmg-card-showcase">
        <div className="jmg-bank-card">
          <div className="jmg-bank-card-top">
            <div className="jmg-card-brand">
              <div className="jmg-card-logo">
                <CreditCard size={29} />
              </div>
              <span>Debit</span>
            </div>
            <span className="jmg-card-status">
              {locked ? "Geblokkeerd" : "Actief"}
            </span>
          </div>

          <div className="jmg-card-number">
            {showNumber ? "•••• •••• •••• ••••" : "•••• •••• •••• ••••"}
          </div>

          <div className="jmg-bank-card-bottom">
            <div>
              <small>KAARTHOUDER</small>
              <strong>{user?.name || "JMG"}</strong>
            </div>
            <div className="jmg-card-brand-name">ING</div>
          </div>
        </div>

        <div className="jmg-card-caption">
          <strong>ING Card</strong>
          <span>Debitkaart</span>
        </div>

        <div className="jmg-card-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <button
        className="jmg-wallet-button"
        onClick={() =>
          setNotice("Apple Wallet-koppeling is momenteel niet beschikbaar.")
        }
      >
        <Wallet size={21} />
        Add to Apple Wallet
      </button>

      <div className="jmg-card-options">
        {cardSections.map((section) => {
          const Icon = section.icon;
          const isOpen = activeSection === section.id;

          return (
            <div className="jmg-card-option-wrapper" key={section.id}>
              <button
                className={`jmg-card-option ${isOpen ? "selected" : ""}`}
                onClick={() => toggleSection(section.id)}
              >
                <Icon size={21} />
                <span>{section.title}</span>
                <ChevronRight
                  size={20}
                  className={isOpen ? "rotated" : ""}
                />
              </button>

              {isOpen && (
                <div className="jmg-card-option-content">
                  {section.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="jmg-card-security">
        <button
          className="jmg-card-option security-option"
          onClick={() => {
            setLocked(!locked);
            setNotice(
              !locked
                ? "De kaart is tijdelijk vergrendeld in deze interface."
                : "De kaartstatus is gewijzigd. Controleer de status bij de kaartbeheerder."
            );
          }}
        >
          <LockKeyhole size={21} />
          <span>
            {locked ? "Kaart ontgrendelen" : "Kaart tijdelijk blokkeren"}
          </span>
          <ChevronRight size={20} />
        </button>

        <button
          className="jmg-card-option security-option"
          onClick={() =>
            setNotice(
              "Neem contact op met de kaartbeheerder voor een vervangende kaart."
            )
          }
        >
          <RefreshCw size={21} />
          <span>Kaart vervangen</span>
          <ChevronRight size={20} />
        </button>
      </div>

      {notice && (
        <div className="jmg-card-notice">
          <Info size={19} />
          <p>{notice}</p>
          <button onClick={() => setNotice("")}>
            <X size={17} />
          </button>
        </div>
      )}

      <div className="jmg-card-footer">
        <CheckCircle size={16} />
        <span>ING · Kaartbeheer</span>
      </div>
    </div>
  );
}
