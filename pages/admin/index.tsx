
import Auth from "./auth";
import Dashboard from "./dashboard";
import { useStateValue } from "../../context/StateProvider"
import { useEffect, useState } from "react";
import { GET_SESSION_USER } from "../../util/session";
import { User } from "../../types";
import Preloader from "../../components/Preloader";
import { FETCH_DATA } from "../../util";
import {Navs} from "../../components/Admin/sidenav"
import { useRouter } from "next/router";

const Admin = ({page = <Dashboard />}: {page?:JSX.Element}) => {
    const router = useRouter();
    
    const [{user, posts, categories}, dispatch] = useStateValue();
    const [forbiden, setForbiden] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (user) return
        setLoading(true)
        GET_SESSION_USER((data:User) => {
            dispatch({
                type: "SET_USER",
                user: data
            });
        });
        setLoading(false);
    }, []);
    useEffect(() => {
    //   fetch and dispatch posts and categories if empty
    posts.length <= 0 && FETCH_DATA("posts", (data:any) => {
        dispatch({
            type: "SET_POSTS",
            posts: data
        });
    });
    posts.length <= 0 && FETCH_DATA("categories", (data:any) => {
        dispatch({
            type: "SET_CATEGORIES",
            categories: data
        });
    })
    }, [])

    useEffect(() => {
        if (router.asPath !== router.route) {
          const route =router.pathname;
          const nav = Navs.find((nav) => nav.link === route);
            if (nav && nav.protected && user.role !== 'admin' ) {
                setForbiden(true)
            }
        }
      }, [router, user]);


    return loading ? <Preloader /> : !user ?  <Auth /> : forbiden ? <Dashboard /> : page;
};

export default Admin;
