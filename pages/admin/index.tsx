import React, { useState } from "react";

import Auth from "./auth";
import Dashboard from "./dashboard";

const Admin = ({page = <Dashboard />}: {page?:JSX.Element}) => {
    const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <div>
        {
            !isLoggedin ? <Auth />: page
        }
    </div>
  );
};

export default Admin;
