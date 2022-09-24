/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Category } from "../../../types";
import UtilButton from "../../UtilButton";
import { BiTrashAlt, BiPencil } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { toast } from "react-toastify";

const Tableunit = ({ data }: { data: Category }) => {
  const { title, description, imageURL, _id, color, slug } = data;
  function newFunction(): string | undefined {
    return "https://flowbite.com/docs/images/blog/image-1.jpg";
  }

  const deleteCategory = () => {
    toast.success("Deleted Successfully !");
  };
  const editCategory = () => {};
  const viewCategory = () => {};

  return (
    <div className="w-full bg-gray-100 border-b-2 border-blue-200 flex items-center px-4 py-3 justify-between  transition-colors duration-500 ease-in-out cursor-pointer ">
      <div className="flex items-center gap-2 text-xl w-full max-w-[40%]">
        <img
          src={imageURL || newFunction()}
          alt={slug}
          style={{
            borderColor: color,
          }}
          className={`w-[60px] h-[55px] border-[1.3px] object-contain rounded-lg`}
        />
        <div className="flex flex-col">
          <h1
            className="font-medium"
            style={{
              color: color,
            }}
          >
            {title}
          </h1>
          <p className="text-xs w-full truncate text-gray-500">{description}</p>
        </div>
      </div>
      <div>2 (No.: posts)</div>
      <div className="flex gap-4">
        <UtilButton
          icon={<BiTrashAlt />}
          color="delete"
          onClick={deleteCategory}
        />
        <UtilButton icon={<BiPencil />} color="edit" onClick={editCategory} />
        <UtilButton icon={<BsEye />} color="view" onClick={viewCategory} />
      </div>
    </div>
  );
};

export default Tableunit;
