import Head from "next/head";
import React from "react";
import { Navbar, Sidenav } from "../../components/Admin";

const Settings = () => {
  return (
    <div>
      <Head>
        <title>Bentility| Admin</title>
        <meta name="description" content="Bentility Admin | Settings" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-gray-200 w-screen h-screen ">
        <div className="">
          <Navbar />
          <Sidenav page="Settings" />
        </div>
      </main>
    </div>
  );
};

export default Settings;
