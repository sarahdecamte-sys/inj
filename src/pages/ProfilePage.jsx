
import { useAuth } from "../context/AuthContext";
import PageTitle from "../components/PageTitle";

export default function ProfilePage() {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <PageTitle
        title="Mijn profiel"
        subtitle="Je persoonlijke gegevens."
      />

      <section className="panel profile-panel">
        <div className="profile-avatar">J</div>

        <h2>{currentUser?.name || "JMG"}</h2>

        <p className="muted">Persoonlijk profiel</p>

        <div className="detail-line">
          <span>Naam</span>
          <strong>{currentUser?.name}</strong>
        </div>

        <div className="detail-line">
          <span>E-mailadres</span>
          <strong>{currentUser?.email}</strong>
        </div>

        <div className="detail-line">
          <span>Gebruikerscode</span>
          <strong>{currentUser?.code}</strong>
        </div>

        <button className="logout-button" onClick={logout}>
          Uitloggen
        </button>
      </section>
    </>
  );
}
