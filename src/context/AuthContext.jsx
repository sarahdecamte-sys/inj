
import { createContext, useContext, useState } from "react";
import { loginUser } from "../services/UserService";

const AuthContext = createContext(null);
const STORAGE_KEY = "jmg_user";

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  });

  const login = (code, password) => {
    const result = loginUser(code.trim(), password);

    if (!result.success) {
      return result;
    }

    setCurrentUser(result.user);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(result.user)
    );

    return result;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
