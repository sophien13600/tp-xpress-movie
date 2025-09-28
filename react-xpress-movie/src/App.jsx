import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routes from "../src/router/Routes";
import { Provider } from "./contexts/GlobalContext.jsx";

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
