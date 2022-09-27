import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useStateValue } from "../../context/StateProvider";
import Button from "../Button";

const Quickedit = ({
  setEditing,
  customClose,
}: {
  setEditing?: (e: boolean) => void;
  customClose?: boolean;
}) => {
  const [{ user }, dispatch] = useStateValue();

  const markComplete = () => {
    const done = confirm("Are you sure you want to save changes?");
    if (done) {
      setEditing && setEditing(false);
    }
  };
  return (
    <form className="col-span-1 bg-white rounded-sm shadow-sm p-3">
      <div className="font-semibold flex items-center justify-between">
        <p className="text-active">Update Profile</p>
        {customClose && (
          <span
            onClick={() => markComplete()}
            className="cursor-pointer hover:scale-105"
          >
            <IoMdDoneAll className="text-green-600" />
          </span>
        )}
      </div>
      <div className="flex flex-col items-start justify-center gap-y-5 py-2 mt-2">
        <div className="w-full">
          <textarea
            className="text-md w-full resize-y border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
            value={user.about}
          ></textarea>
        </div>
        <div className="flex items-center justify-start gap-x-5 text-sm w-full">
          <label htmlFor="name" className="text-active font-semibold w-[18%]">
            Full Name:{" "}
          </label>
          <input
            type="text"
            className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
            value={user.name}
            placeholder="Full Name"
            id="name"
          />
        </div>
        <div className="flex items-center justify-start gap-x-5 text-sm w-full">
          <label htmlFor="email" className="text-active font-semibold w-[18%]">
            Email:{" "}
          </label>
          <input
            type="email"
            className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
            value={user.email}
            placeholder="Email ID"
            id="email"
          />
        </div>
        <div className="flex items-center justify-start gap-x-5 w-full text-sm">
          <label
            htmlFor="username"
            className="text-active font-semibold w-[18%]"
          >
            Username:{" "}
          </label>
          <input
            type="text"
            className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
            value={user.username}
            placeholder="Username"
            id="username"
          />
        </div>
        <div className="flex items-center justify-start gap-x-5 w-full text-sm">
          <label htmlFor="phone" className="text-active font-semibold w-[18%]">
            Phone:{" "}
          </label>
          <input
            type="email"
            className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
            value={user.phone}
            placeholder="Phone Number"
            id="phone"
            readOnly
          />
        </div>
        <div className="flex items-center justify-start gap-x-3 text-sm">
          {/* save changes */}
          <Button
            text="Save changes"
            type="submit"
            shape="rounded-md"
            onClick={() => markComplete()}
            icon={<RiSecurePaymentLine className="text-white" />}
          />
        </div>
      </div>
    </form>
  );
};

export default Quickedit;
