
import Auth from "./auth";
import Dashboard from "./dashboard";
import { useStateValue } from "../../context/StateProvider"
import { useEffect } from "react";
import { GET_SESSION_USER } from "../../util/session";
import { User } from "../../types";

const Admin = ({page = <Dashboard />}: {page?:JSX.Element}) => {
    const [{user}, dispatch] = useStateValue();
    useEffect(() => {
      const fetchSession = async () => {
        // retrun if user is already logged in
        if (user) return;
          const session_user:User = await GET_SESSION_USER()
        if(session_user){
          dispatch({
            type: "SET_USER",
            user:session_user
          })
        }
      };
      fetchSession();
    }, []);
  return (
    <div>
        {
            !user ? <Auth />: page
        }
    </div>
  );
};

export default Admin;
