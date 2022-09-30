import React from "react";
import { User } from "../../../../types";

const PlatformSettings = ({user}:{user:User}) => {
  return (
    <>
      {/* platform settings */}
      <div className="col-span-1 bg-white rounded-sm shadow-sm p-3">
        <p className="font-semibold text-active">Platform Settings</p>
        <div className="flex flex-col items-start justify-center gapy-y-2 py-2 mt-3">
          <p className="text-[#5C6E9A] uppercase text-xs font-semibold">
            Account
          </p>
          <div className="w-full flex flex-col gap-y-3 py-2">
            <label
              htmlFor="follow"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="follow"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-600 ">
                Email me when someone follows me
              </span>
            </label>
            <label
              htmlFor="comment"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="comment"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium truncate text-gray-600 ">
                Email me on post comments
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gapy-y-2 py-2">
          <p className="text-[#5C6E9A] uppercase text-xs font-semibold">
            Application
          </p>
          <div className="w-full flex flex-col gap-y-3 py-2">
            <label
              htmlFor="news-letter"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="news-letter"
                className="sr-only peer"
                checked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-600 ">
                Subscribe to our newsletter
              </span>
            </label>
            <label
              htmlFor="updates"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="updates"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium truncate text-gray-600 ">
                Email me on system updates
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformSettings;
