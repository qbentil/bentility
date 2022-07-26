import Head from "next/head";
import React from "react";
import { Navbar, Sidenav } from "../../components/Admin";

const NewPost = () => {
  return (
    <div>
      <Head>
        <title>Bentility| New Post</title>
        <meta name="description" content="Bentility Admin | Post" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-gray-200 w-screen h-screen ">
        <div className="">
          <Navbar />
          <Sidenav page="New" />
        </div>
      </main>
    </div>
  );
};

export default NewPost;
