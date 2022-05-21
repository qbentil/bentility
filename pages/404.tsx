/* eslint-disable @next/next/no-img-element */

import Footer from "../components/Footer";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-200 flex flex-col items-center justify-center text-gray-700">
      <div className="w-[70%] h-[70%] flex-col flex justify-center items-center">
      <div className="h-10 w-10 md:h-16 md:w-16 lg:h-24 lg:w-24 items-center flex justify-center rounded-full border border-gray-300 mr-2 cursor-pointer">
            <Link href="/">
              <img
                src="https://codersquiz.netlify.app/img/bentil.jpeg"
                alt="ben"
                // width={"50px"}
                // height={"50px"}
                className="w-[90%] h-[90%] border border-gray-200 rounded-full"
              />
            </Link>
          </div>
          <div className="my-3 text-blue-600 font-semibold text-sm md:text-xl font-sans">
            <p>404 Error</p>
          </div>
          <div className="mb-2 text-lg md:text-2xl lg:text-4xl text-black font-bold">
            <p>Page not Found</p>
          </div>
          <div className="mb-3 text-sm md:text-lg text-gray-500 font-thin">
            <p>{`Sorry, we didn't find the page you are looking for`}</p>
          </div>
          <div className="my-4 text-blue-600 font-semibold">
            <Link href = "/">
              Go back home
            </Link>
          </div>
      </div>
      <Footer nav = {false} />
    </div>
  );
};

export default NotFound;
