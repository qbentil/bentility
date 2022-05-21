/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-200 flex items-center justify-center text-gray-700">
      <div className="w-[70%] h-[70%] flex justify-around items-center">
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
          <div>
            <p>Page not Found</p>
          </div>
      </div>
    </div>
  );
};

export default NotFound;
