import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import PrivateRoute from "./Private.Route";
import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";

const AppRoutes = () => {
  const { isAuthenticated } = useContext(GlobalContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        {/* Routes protégées peuvent être ajoutées ici */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
