import Head from "next/head";
import React from "react";
import { Navbar, Sidenav } from "../../../components/Admin";
import ImageUploader from "../../../components/ImageUploader";
const NewCategory = () => {
  return (
    <div>
      <Head>
        <title>Bentility| Admin | New Category</title>
        <meta name="description" content="Bentility Admin | New Category" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-gray-200 w-screen h-screen ">
        <div className="">
          <Navbar />
          <div className="flex">
            <Sidenav page="Categories" />
            <div className="min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-3 px-5">
              <div className="bg-white w-full h-full rounded-md shadow-md p-5">
                <h1 className="font-poppins font-bold text-2xl">
                  New Category
                </h1>
                <form action="" className="w-full mt-5 flex items-start  gap-10">
                  <div className="flex flex-col gap-2 mt-5 w-1/2">
                    <ImageUploader />
                  </div>
                  <div className="w-1/2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="font-poppins font-medium text-base"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter category name"
                        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-active-bg"
                      />
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                      <label
                        htmlFor="description"
                        className="font-poppins font-medium text-base"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        cols={40}
                        rows={2}
                        placeholder="Enter category description"
                        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-active-bg"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewCategory;
