/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useStateValue } from "../../context/StateProvider";
import { Post } from "../../types";
import { FETCH_DATA } from "../../util";
import { convertDate, readingTime } from "../../util/functions";
import CategoriesBadge from "../Categories/badge";

const SingleBlog = ({ data }: { data: Post }) => {
  const [{ pusers }, dispatch] = useStateValue();
  const router = useRouter();
  const viewPost = () => {
    router.push({
      pathname: `/blog/${data?.slug}`,
    });
  };
  // to make sure pusers are loaded
  useEffect(() => {
    if (pusers.length > 0) return;
    FETCH_DATA("users", (data) => {
      dispatch({
        type: "SET_PUSERS",
        users: data,
      });
    });
    // setWriter(pusers && pusers.filter((user: any) => user._id === id)[0]);
  }, []);

  return (
    <div className={`hover:cursor-pointer  mb-14`} onClick={viewPost}>
      <div className="h-[40vh] bg-white border-primary border items-center flex  justify-center shadow-sm shadow-gray-50 hover:shadow-lg mb-3  ">
        <div className="w-full md:w-[85%]  flex flex-col items-center justify-around h-[85%]  ">
          <div className="w-full lg:w-[80%]  px-5  font-bold text-gray-600">
            <p className={`text-lg lg:text-xl `}>{data?.title}</p>

            <div className="text-sm font-normal text-gray-500 my-3">
              <p>{data?.content.slice(0, 50)} ...</p>
            </div>
          </div>
          <div className="flex gap-3 overflow-hidden max-w-[80%]">
            <CategoriesBadge ids={data?.categories} />
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-4 items-center mx-auto w-full px-4 max-w-[75%] justify-evenly">
              <div className="flex items-center justify-center gap-x-2">
                <MdDateRange className="text-[0.7rem] text-primary" />
                <p className="text-[0.7rem] text-gray-500 flex items-center gap-x-1">
                  {convertDate(data?.createdAt || "", "long")}
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-2">
                <BsClock className="text-[0.7rem] text-primary " />
                <p className="text-[0.7rem] text-gray-500 flex items-center gap-x-1">
                  {readingTime(data?.content || "")}
                </p>
              </div>
            </div>
            <WriterSignature id={data?.writer || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

type WriterProps = {
  id: string;
  className?: string;
};

export const Writer = ({ id, className }: WriterProps) => {
  const [{ pusers }, dispatch] = useStateValue();

  return (
    <div className={className}>
      <FaUserAlt className="text-primary " />
      <p>
        {(pusers && pusers.filter((user: any) => user._id === id)[0]?.name) ||
          "N/A"}
      </p>
    </div>
  );
};

export const WriterSignature = ({ id }: WriterProps) => {
  const [{ pusers }, dispatch] = useStateValue();
  const writer =
    (pusers && pusers.filter((user: any) => user._id === id)[0]) || null;
  const router = useRouter();
  const viewWriter = () => {
    router.push({
      pathname: `/writers/${writer?.username}`,
      query: { id: writer?._id },
    });
  };
  return (
    <div className="flex w-max mx-auto  justify-center items-center">
      {writer ? (
        <div
          className="items-center flex justify-center"
          onClick={viewWriter}
        >
          <div className="h-3 w-3 md:h-5 md:w-5 lg:h-7 lg:w-7 items-center flex justify-center rounded-full border border-gray-300 mr-2 cursor-pointer">
            <img
              src={writer?.avatar}
              alt="ben"
              className="w-full h-full border border-gray-200 rounded-full"
            />
          </div>
          <p className="text-[0.5rem]  md:text-[0.8rem] text-gray-500  w-[90%] font-semibold">
            Posted by <span className="font-bold">{writer?.name}</span>
          </p>
        </div>
      ) : (
        <div className="flex w-max mx-auto  justify-center items-center">
          <div className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 items-center flex justify-center rounded-full border border-gray-300 mr-2 cursor-pointer">
            <Link href="/">
              <img
                src="https://codersquiz.netlify.app/img/bentil.jpeg"
                alt="ben"
                className="w-[90%] h-[90%] border border-gray-200 rounded-full"
              />
            </Link>
          </div>
          <p className="text-[0.5rem]  md:text-[0.8rem] text-gray-500 lg:w-[80%] w-[90%] font-semibold">
            Poster by <span className="font-bold">Bentility</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
