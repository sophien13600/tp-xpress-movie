import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./contexts/GlobalContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
);
