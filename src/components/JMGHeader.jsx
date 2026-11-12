import { Bell, Search } from "lucide-react";

export default function JMGHeader({ user }) {
  return (
    <header className="topbar">
      <div className="searchbox"><Search size={18} /><input placeholder="Zoeken..." /></div>
      <div className="top-actions">
        <button className="icon-button" aria-label="Meldingen"><Bell size={19} /><i /></button>
        <div className="avatar">{user?.name?.charAt(0) || "J"}</div>
        <div className="user-mini"><strong>{user?.name || "JMG"}</strong><small>Persoonlijk</small></div>
      </div>
    </header>
  );
}