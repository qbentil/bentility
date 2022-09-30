/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Category } from "../../../types";
import UtilButton from "../../UtilButton";
import { BiTrashAlt, BiPencil } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { toast } from "react-toastify";
import { CategoryPostCount } from "../../../util/functions";
import { useStateValue } from "../../../context/StateProvider";
import { useRouter } from "next/router";

const Tableunit = ({ data }: { data: Category }) => {
  const { title, description, imageURL, _id, color, slug } = data;
  const [{ posts }, dispatch] = useStateValue();
  function newFunction(): string | undefined {
    return "https://flowbite.com/docs/images/blog/image-1.jpg";
  }
  const router = useRouter();

  const deleteCategory = () => {
    toast.success("Deleted Successfully !");
  };
  const editCategory = () => {
    router.push({
      pathname: `categories/edit/${slug}`,
    });
  };
  const viewCategory = () => {
    router.push({
      pathname: `categories/view/${slug}`,
    });
  };

  return (
    <div
      className="w-full hover:bg-active-bg border-b-2 border-blue-200 px-4 py-3  grid grid-cols-3  transition-colors duration-500 ease-in-out cursor-pointer z-0"
      onClick={viewCategory}
    >
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
      <div className="flex items-center justify-center">
        {CategoryPostCount(_id || "", posts)}
      </div>
      <div className="flex gap-4 items-center justify-end">
        <UtilButton
          icon={<BiTrashAlt />}
          title="delete"
          color="red-500"
          onClick={deleteCategory}
        />
        <UtilButton
          icon={<BiPencil />}
          color="yellow-500"
          title="edit"
          onClick={editCategory}
        />
        {/* <UtilButton
          icon={<BsEye />}
          color="green-500"
          title="view"
          onClick={viewCategory}
        /> */}
      </div>
    </div>
  );
};

export default Tableunit;
