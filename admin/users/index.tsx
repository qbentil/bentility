import Head from "next/head";
import React from "react";
import { Navbar, Sidenav } from "../../components/Admin";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Bentility| Admin</title>
        <meta name="description" content="Bentility Admin | Users" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-gray-200 w-screen h-screen ">
        <div className="">
          <Navbar />
          <Sidenav page="Users" />
        </div>
      </main>
    </div>
  );
};

export default Users;
