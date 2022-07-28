import Head from "next/head";
import React from "react";
import { Navbar, Sidenav, CreatePost } from "../../components/Admin";

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
          <div className="flex">
          <Sidenav page="New" />
          <div className="min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-3 px-5">
            <CreatePost />
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default NewPost;
