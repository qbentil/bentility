import Head from "next/head";
import React from "react";
import { Categories, Navbar, Sidenav } from "../../components/Admin";

const Categorie = () => {
  return (
    <div>
      <Head>
        <title>Bentility| Admin</title>
        <meta name="description" content="Bentility Admin | Categories" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-gray-200 w-screen h-screen ">
        <div className="">
          <Navbar />
          <div className="flex">
          <Sidenav page="New" />
          <div className="min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-3 px-5">
            <Categories />
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Categorie;
