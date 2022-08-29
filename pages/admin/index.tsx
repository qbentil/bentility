
import Auth from "./auth";
import Dashboard from "./dashboard";
import { useStateValue } from "../../context/StateProvider"
import { useEffect, useState } from "react";
import { GET_SESSION_USER } from "../../util/session";
import { User } from "../../types";
import Preloader from "../../components/Preloader";

const Admin = ({page = <Dashboard />}: {page?:JSX.Element}) => {
    const [{user}, dispatch] = useStateValue();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const fetchSession = async () => {
        // retrun if user is already logged in
        if (user) {
          return;
        };
        setLoading(true);
          const session_user:User = await GET_SESSION_USER()

        if(session_user){
          dispatch({
            type: "SET_USER",
            user:session_user
          })
        }
        setLoading(false)
      };
      fetchSession();
    }, []);

    if(loading) return <Preloader />
    return  user ? page : <Auth />
};

export default Admin;
