import Head from "next/head";
import React from "react";
import { Navbar, Sidenav } from "../../../components/Admin";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Bentility| Admin</title>
        <meta name="description" content="Bentil's Blog| Bentility" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-gray-200 w-screen h-screen ">
        <div className="">
          <Navbar />
          <Sidenav />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
