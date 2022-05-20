import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-200 flex items-center justify-center text-gray-700">
      <div className="w-[70%] h-[70%] flex justify-around items-center">
        <div className="h-full flex flex-col items-center justify-center">
          <p className="font-bold text-xl">404</p>
          <p className="capitalize">page not found</p>
        </div>
        <div className="h-full bg-gray-800 w-[0.05rem]"></div>
        <div className="w-[50%] h-full flex justify-center flex-col">
          <p>
            The site configured at this address does not contain the requested
            file.
          </p>
          <p>
            If this is your site, make sure that the filename case matches the
            URL. For root URLs (like http://example.com/) you must provide an
            index.html file.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
