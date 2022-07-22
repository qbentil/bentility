import React, { useState } from "react";

import Auth from "./auth";
import Dashboard from "./dashboard";
import Head from "next/head";

const Admin = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div>
        {
            !isLoggedin ? <Dashboard />: <Auth />
        }
    </div>
  );
};

export default Admin;
