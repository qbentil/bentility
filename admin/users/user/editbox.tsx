import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { IoMdDoneAll } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import { User } from "../../../types";
import { UPDATE_SELF } from "../../../util/admins";

const Quickedit = ({
  setEditing,
  customClose,
  user,
}: {
  setEditing?: (e: boolean) => void;
  customClose?: boolean;
  user:User
}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [about, setAbout] = useState(user.about);
  const [username, setUsername] = useState(user.username);
  const [role, setRole] = useState(user.role);
  const [loading, setLoading] = useState(false);


  const markComplete = () => {
      setEditing && setEditing(false);
  };
  const UpdateProfile = () => {
    if ( name === user.name && email === user.email && phone === user.phone && about === user.about && username === user.username && role === user.role) return toast.info("No change detected in profile");
    if(!name || !email || !phone || !about || !username || !role) return toast.error("Please fill all fields");
    setLoading(true);
    const updated = {
      name,  email, phone, about, username, role
    }
    // toast.promise(UPDATE_SELF(user.access_token, updated, (data) => {
    //   dispatch({
    //     type: "SET_USER",
    //     user: data,
    //   });
    // }), {
    //   pending: "Updating profile",
    //   success: "Profile updated successfully",
    //   error: "Failed to update profile",
    // }, {
    //   toastId: "updateProfile"});

    setLoading(false);
  }
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
            value={about}
            onChange= {(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-start gap-x-5 text-sm w-full">
          <label htmlFor="name" className="text-active font-semibold w-[18%]">
            Full Name:
          </label>
          <input
            type="text"
            className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
            value={name}
            onChange= {(e) => setName(e.target.value)}
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
            value={email}
            placeholder="Email ID"
            onChange= {(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div className="flex items-center justify-start gap-x-5 w-full text-sm">
          <label
            htmlFor="username"
            className="text-active font-semibold w-[18%]"
          >
            Username:
          </label>
          <input
            type="text"
            className="w-[80%] cursor-not-allowed border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
            value={user.username}
            placeholder="Username"
            id="username"
            readOnly
            title="Username cannot be changed"
          />
        </div>
        <div className="flex items-center justify-start gap-x-5 w-full text-sm">
          <label htmlFor="phone" className="text-active font-semibold w-[18%]">
            Phone:
          </label>
          <input
            type="text"
            className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
            value={phone}
            onChange= {(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            id="phone"
          />
        </div>
        <div className="flex items-center justify-start gap-x-3 text-sm">
          {/* save changes */}
          <Button
            type="button"
            shape="rounded-md"
            disabled={loading}
            onClick={UpdateProfile}
            text={loading ? "Saving..." : "Save changes"}
            icon={
              loading ? (
                <BiLoaderCircle className="animate animate-spin" />
              ) : (
                <RiSecurePaymentLine className="text-white" />
              )
            }
          />
        </div>
      </div>
    </form>
  );
};

export default Quickedit;
