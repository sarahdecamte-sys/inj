import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AccountsPage from "./pages/AccountsPage";
import TransactionsPage from "./pages/TransactionsPage";
import TransferPage from "./pages/TransferPage";
import ProductsPage from "./pages/ProductsPage";
import BudgetPage from "./pages/BudgetPage";
import ProfilePage from "./pages/ProfilePage";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import JMGHeader from "./components/JMGHeader";

const initialTransactions = [
  { id: 1, name: "Supermarkt", detail: "Dagelijkse boodschappen", date: "Vandaag", amount: -84.50, status: "Voorbeeld", icon: "shopping" },
  { id: 2, name: "Inkomende betaling", detail: "Voorbeeldtransactie", date: "Gisteren", amount: 2450, status: "Voorbeeld", icon: "income" },
  { id: 3, name: "Energiemaatschappij", detail: "Maandelijkse factuur", date: "18 nov", amount: -126.40, status: "Voorbeeld", icon: "home" },
  { id: 4, name: "Online aankoop", detail: "Webwinkel", date: "16 nov", amount: -59.99, status: "Voorbeeld", icon: "shopping" },
];
const titles = { dashboard: "Overzicht", accounts: "Rekeningen", transfer: "Overschrijven", transactions: "Transacties", products: "Producten", budget: "Budget", profile: "Profiel" };

export default function App() {
  const { currentUser, login, logout } = useAuth();
  const [active, setActive] = useState("dashboard");
  const [transactions, setTransactions] = useState(initialTransactions);
  const [mobileMenu, setMobileMenu] = useState(false);
  if (!currentUser) return <LoginPage onLogin={login}/>;

  const saveRequest = (request) => setTransactions(prev => [{ id: Date.now(), name: request.recipient, detail: "Overschrijfverzoek — testomgeving", date: "Zojuist", amount: -request.amount, status: "In afwachting", icon: "transfer" }, ...prev]);
  const navigate = page => { setActive(page); setMobileMenu(false); };
  const pages = {
    dashboard: <DashboardPage user={currentUser} transactions={transactions} onNavigate={navigate}/>,
    accounts: <AccountsPage user={currentUser}/>,
    transfer: <TransferPage onSave={saveRequest}/>,
    transactions: <TransactionsPage transactions={transactions}/>,
    products: <ProductsPage/>,
    budget: <BudgetPage/>,
    profile: <ProfilePage/>
  };

  return <div className="app-shell">
    <Sidebar active={active} onChange={navigate}/>
    {mobileMenu && <div className="mobile-drawer"><button className="drawer-close" onClick={() => setMobileMenu(false)}>×</button><Sidebar active={active} onChange={navigate}/></div>}
    <main className="main-area">
      <JMGHeader user={currentUser}/>
      <div className="content">
        
        {pages[active]}
      </div>
      <footer className="footer">© 2020 ING <button onClick={logout}></button></footer>
    </main>
    <BottomNav active={active} onChange={navigate}/>
  </div>;
}