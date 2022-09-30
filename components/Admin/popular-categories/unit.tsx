/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { useStateValue } from "../../../context/StateProvider";
import { Category } from "../../../types";
import { CategoryPostCount, ColorOpacity, convertDate, generateInitials } from "../../../util/functions";
import { useRouter } from "next/router";


const Unit = ({ data }: { data: Category }) => {
  const [{ posts }] = useStateValue();
  const router = useRouter();
  
  const viewCategory = () => {
    router.push({
     pathname: `admin/categories/view/${data.slug}`,
     query: { _id : data._id }
   })
 };

  return (
    <div className="w-full  flex items-center justify-between py-2 border-b-2 border-gray-200 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75" onClick={viewCategory}>
      <div className="flex items-center w-[80%] gap-8 font-sans ">
        <div
          className="w-20 h-10 flex justify-center items-center rounded-md group-hover:bg-white"
          style={{
            backgroundColor: ColorOpacity(data.color || "", 20),
            color: data.color || "black",
          }}
        >
          {data.imageURL ? (
            <img
              src={data.imageURL}
              alt={data.slug}
              className="w-full rounded-sm h-full object-cover "
            />
          ) : (
            generateInitials(data.title)
          )}
        </div>
        <div className="flex flex-col mr-10">
          <h2 className="text-active">{data.title}</h2>
          <p className="text-[0.7rem] text-[#9F9F9F]">{convertDate(data.createdAt || '', 'short')}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-2 font-sans">
          <FaClipboardList className="text-[#6E6E6E]" />
          <p className="text-[#4B4B4B] text-[0.9rem]">
			{
				CategoryPostCount(data._id || '', posts)
			}
		  </p>
        </div>
      </div>
    </div>
  );
};

export default Unit;
