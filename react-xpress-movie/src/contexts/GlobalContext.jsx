import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    false || localStorage.getItem("email")
  );

  return (
    <GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </GlobalContext.Provider>
  );
};
