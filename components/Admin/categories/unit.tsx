/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Category } from "../../../types";

function UnitCat({data}:{data:Category}) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
      <div>
        <img
          className="rounded-t-lg"
          src={newFunction()}
          alt=""
        />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {data.title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700">
          {data.description}
        </p>
        <div className="cursor-pointer transition-all duration-100 ease-in-out inline-flex gap-2 items-center py-2 px-3 text-sm font-medium text-center text-active hover:text-white bg-active-bg rounded-lg hover:bg-active focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          <span>Browse posts</span>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );

  function newFunction(): string | undefined {
    return "https://flowbite.com/docs/images/blog/image-1.jpg";
  }
}

export default UnitCat;
