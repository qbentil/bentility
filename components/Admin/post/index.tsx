import React, { useEffect, useState } from "react";
import { BsBook, BsEye } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { Post } from "../../../types";
import { convertDate, generateInitials } from "../../../util/functions";

import { Writer, Categories } from "../posts";

const Post = ({ post }: { post: Post }) => {
  return (
    <div className="w-full  flex items-center justify-between py-2 border-b-2 border-gray-200 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75 ">
      <div className="flex items-center w-[90%] gap-8 font-sans ">
        <div className="w-10 h-10 flex justify-center text-primary items-center bg-active-bg rounded-full group-hover:bg-white">
          {generateInitials(post.title || "")}
        </div>
        <div className="flex flex-col mr-10 gap-y-2 w-[45%]">
          <h2 className="text-active truncate">{post.title}</h2>
          <div className="flex items-center justify-start gap-x-2">
            <Categories ids={post.categories} />
          </div>
        </div>
        <div className=" flex flex-col justify-start items-start overflow-auto gap-2 scrollbar-hidden mx-auto">
          <Writer
            id={post?.writer || "N/A"}
            className={"text-[0.7rem] text-gray-500 flex gap-2 items-center"}
          />
          <div className="flex items-center justify-center gap-x-2">
            <MdDateRange className="text-[0.7rem] text-primary" />
            <p className="text-[0.7rem] text-[#4B4B4B] flex items-center gap-2">
              {convertDate(post.createdAt || "", "short")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 w-[10%]">
        <div className="flex items-center justify-center gap-2 font-sans">
          <BsEye className="text-[#6E6E6E]" />
          <p className="text-[#4B4B4B] text-[0.9rem]">{post.views}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
