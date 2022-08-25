import React, { useEffect, useState } from "react";

import Auth from "./auth";
import Dashboard from "./dashboard";
import { useStateValue } from "../../context/StateProvider";

const Admin = ({page = <Dashboard />}: {page?:JSX.Element}) => {
    const [{user}, dispatch] = useStateValue();
    useEffect(()=> {
      console.log("user", user);
    })
  return (
    <div>
        {
            !user ? <Auth />: page
        }
    </div>
  );
};

export default Admin;
