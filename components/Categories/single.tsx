import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { CategoryPostCount, ColorOpacity, convertDate } from "../../util/functions";
import SectionTitle from "../SectionTitle";
import { Seperator } from "../Seperator";
import UtilButton from "../UtilButton";
import { Category } from "../../types";
import { Writer } from "../Blog/item";
import { AiOutlineNumber } from "react-icons/ai";
import { useStateValue } from "../../context/StateProvider";
import CategoryRelatedPosts from "../Blog/crelated";

const SingleCategory = ({ category }: { category: Category }) => {
  const [{ posts }, dispatch] = useStateValue();
  const router = useRouter();
  return (
    <div className="bg-transparent py-10">
      <div 
        style={{
            backgroundImage: `url(${category?.imageURL || ""})`,
            backgroundColor: ColorOpacity(category?.color || '', 20)
        }}
      className="w-full h-full rounded p-4 poppins overflow-y-scroll scrollbar-hidden ">
        <div className="flex flex-col gap-3" style={{color: category?.color || ''}}>
          <div className="flex items-center justify-between md:justify-start md:gap-x-4">
            {/* back button */}
            <UtilButton
              icon={<BiArrowBack />}
              color="blue-600"
              title="back"
              onClick={() => router.back()}
            />

            <h1 className="text-lg md:text-2xl font-bold capitalize truncate">
              {category?.description || "N/A"}
            </h1>
          </div>
          <div className="flex gap-4 font-bold">
            <Writer
              id={category?.user || "N/A"}
              className={
                "text-[0.6rem] md:text-[0.7rem] text-gray-500 flex gap-2 items-center"
              }
            />
            <div className="flex items-center justify-center gap-x-2" style={{color: category?.color || ''}}>
              <MdDateRange className="text-[0.6rem] md:text-[0.7rem]" />
              <p className="hidden text-[0.6rem] md:text-[0.7rem]  md:flex items-center gap-x-1">
                {convertDate(category?.createdAt || "", "long")}
              </p>
              <p className="text-[0.6rem] md:text-[0.7rem] flex md:hidden items-center gap-x-1">
                {convertDate(category?.createdAt || "", "short")}
              </p>
            </div>

            <div className="flex items-center justify-center gap-x-1 text-[0.6rem] md:text-[0.7rem] " style={{color: category?.color || ''}}>
              <AiOutlineNumber className="" />
              <span>{CategoryPostCount(category?._id || "", posts)}</span>
            </div>
          </div>
        </div>
      </div>
      <Seperator width="2" />
      <SectionTitle title="Articles in Category" tp="start" />
      <CategoryRelatedPosts categories={[category?._id ||'']}  />
    </div>
  );
};

export default SingleCategory;
