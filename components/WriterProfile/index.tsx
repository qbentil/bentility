/* eslint-disable @next/next/no-img-element */

import { FaQuoteLeft, FaUserAlt } from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";
import SectionTitle from "../SectionTitle";
import { Seperator } from "../Seperator";
import { User } from "../../types";
import WriterPosts from "../Blog/WriterPosts";

const WriterProfile = ({ user }: { user: User }) => {
  const fallbackImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU";

  return (
    <div className="poppins flex flex-col gap-8">
      <div>
        <img
          className="w-full h-full max-h-[250px] object-cover object-center relative"
          src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30896675.jpg"
          alt="writer"
        />

        <div className="relative">
          <div className="">
            <img
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border-2 left-1/2 md:left-[150px] border-white absolute p-1 bg-blue-600 -bottom-[50px] md:-bottom-[70px] transform -translate-x-1/2 object-cover object-center"
              src={user?.avatar || fallbackImg}
              alt={user?.username}
            />
          </div>
        </div>
        <div className="w-full h-full bg-white px-7 py-16 md:py-6">
          <div className="mx-auto   md:w-1/2">
            <p className="text-center text-sm font-medium text-gray-600">
              Hey there, I am{" "}
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-center text-primary">
              {user?.name}
            </h1>
            <div>
              <h1 className="text-primary">
                <FaQuoteLeft className="inline-block text-lg" />{" "}
              </h1>
              <p className="text-center mt-4 font-medium text-gray-700">
                {user?.about}{" "}
              </p>
              <h1 className="text-primary text-right">
                <FaQuoteLeft className="inline-block text-lg transform rotate-180 " />{" "}
              </h1>
            </div>

            <div className="flex flex-col mt-4 gap-2 md:flex-row items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <FaUserAlt className="text-primary " />
                <p className="text-gray-600">{user?.username}</p>
              </div>
              <div className="flex items-center gap-2">
                <FiAtSign className="text-primary " />
                <p className="text-gray-600">{user?.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <BsTelephone className="text-primary " />
                <p className="text-gray-600">{user?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
              <Seperator width="2" />
      <SectionTitle title="Top Posts" tp="start" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <WriterPosts id={user?._id || ""} />
        </div>
      </div>
    </div>
  );
};

export default WriterProfile;
