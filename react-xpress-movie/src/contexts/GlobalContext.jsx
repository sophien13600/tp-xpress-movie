import { useMemo, useState } from "react";
import { GlobalContext } from "./globalContext";

export const Provider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("email"))
  );
  const [user, setUser] = useState(null);

  const value = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated, user, setUser }),
    [isAuthenticated, user]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
