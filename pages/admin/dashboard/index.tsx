import Head from "next/head";
import React from "react";
import { Navbar, Sidenav, Tabs } from "../../../components/Admin";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Bentility| Admin</title>
        <meta name="description" content="Bentility Admin | Dashboard" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-[#f8f8f8] w-screen h-screen ">
        <Navbar />
        <div className="flex">
          <Sidenav page="Dashboard" />
          <div className="min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-5">
            <Tabs />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
