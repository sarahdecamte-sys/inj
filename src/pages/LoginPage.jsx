
import { useState } from "react";
import { LockKeyhole, ArrowRight } from "lucide-react";

export default function LoginPage({ onLogin }) {
  const [code, setCode] = useState("07893516");
  const [password, setPassword] = useState("260823");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const result = onLogin(code, password);
    setError(result.success ? "" : result.message);
  };

  return (
    <main className="login-screen">
      <section className="login-card">

        <div className="login-brand">
          <b>ING</b>
          <img src="/images/L1.jpeg" alt="Logo" />
        </div>

        <p className="eyebrow">PERSOONLIJKE OMGEVING</p>

        <h1>Welkom terug</h1>

        <p className="muted">
          Log in op uw persoonlijke omgeving.
        </p>

        <form className="transfer-form login-form" onSubmit={submit}>
          <label>
            Gebruikersnummer
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              autoComplete="username"
              inputMode="numeric"
              required
            />
          </label>

          <label>
            Wachtwoord
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </label>

          {error && <div className="notice">{error}</div>}

          <button className="primary-button" type="submit">
            <LockKeyhole size={17} />
            Inloggen
            <ArrowRight size={17} />
          </button>
        </form>

        <p className="fine-print">
          Uw persoonlijke gegevens worden vertrouwelijk behandeld.
        </p>

      </section>
    </main>
  );
}
