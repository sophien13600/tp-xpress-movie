import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Nav from "../components/Nav";
import  DashboardAdmin from "../components/DashboardAdmin"

export default function Home() {
const { user } = useContext(GlobalContext) 

return(
    <div>
    <Nav />
    {
      user &&
        <DashboardAdmin />
    }
    </div>
  );
}
