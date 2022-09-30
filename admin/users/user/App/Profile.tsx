import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { User } from "../../../../types";

const Profile = ({ setEditing, user }: { setEditing: (e: boolean) => void, user:User }) => {
  return (
    <div className="col-span-1 bg-white rounded-sm shadow-sm p-3">
      <div className="font-semibold flex items-center justify-between">
        <p className="text-active">Profile Information</p>
        <span
          onClick={() => setEditing(true)}
          className="cursor-pointer hover:scale-105"
        >
          <AiOutlineEdit className="text-gray-600" />
        </span>
      </div>
      <div className="flex flex-col items-start justify-center gap-y-4 py-2 mt-2">
        <div className="w-full">
          <p className="text-md text-gray-600">{user.about}</p>
        </div>
        <div className="flex items-center justify-start gap-x-5 text-sm w-full ">
          <p className="text-active font-semibold">Full Name: </p>
          <span>{user.name}</span>
        </div>
        <div className="flex items-center justify-start gap-x-5 text-sm w-full ">
          <p className="text-active font-semibold">Email: </p>
          <span>{user.email}</span>
        </div>
        <div className="flex items-center justify-start gap-x-5 text-sm w-full ">
          <p className="text-active font-semibold">Username: </p>
          <span>{user.username}</span>
        </div>
        <div className="flex items-center justify-start gap-x-5 text-sm w-full ">
          <p className="text-active font-semibold">Phone: </p>
          <span>{user.phone || "N/A"}</span>
        </div>
        <div className="flex items-center justify-start gap-x-5 text-sm w-full ">
          <p className="text-active font-semibold">Role: </p>
          <span className="capitalize flex items-center justify-center gap-x-1">
            {user.role || "N/A"}
            {user.role == "admin" && (
              <RiSecurePaymentLine className="text-green-600" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
