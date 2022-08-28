
import Auth from "./auth";
import Dashboard from "./dashboard";
import { useStateValue } from "../../context/StateProvider"

const Admin = ({page = <Dashboard />}: {page?:JSX.Element}) => {
    const [{user}, dispatch] = useStateValue();
  return (
    <div>
        {
            !user ? <Auth />: page
        }
    </div>
  );
};

export default Admin;
