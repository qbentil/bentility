import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { IoMdDoneAll } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import { useStateValue } from "../../../context/StateProvider";
import { User } from "../../../types";
import { UPDATE_USER } from "../../../util/admins";
interface Props {
  setEditing?: (e: boolean) => void;
  customClose?: boolean;
  admin: User;
}

const Quickedit = ({ setEditing, customClose, admin }: Props) => {
  const [{user}, dispatch] = useStateValue();
  const [name, setName] = useState(admin?.name);
  const [email, setEmail] = useState(admin?.email);
  const [phone, setPhone] = useState(admin?.phone);
  const [about, setAbout] = useState(admin?.about);
  const [username, setUsername] = useState(admin?.username);
  const [role, setRole] = useState(admin?.role);
  const [loading, setLoading] = useState(false);

  const markComplete = () => {
    setEditing && setEditing(false);
  };
  const UpdateProfile = () => {
    if (
      name === admin?.name &&
      email === admin?.email &&
      phone === admin?.phone &&
      about === admin?.about &&
      username === admin?.username &&
      role === admin?.role
    )
      return toast.info("No change detected in profile");
    if (!name || !email || !phone || !about || !username || !role)
      return toast.error("Please fill all fields");
    setLoading(true);
    const updated = {
      name,
      email,
      phone,
      about,
      username,
      role,
    };
    toast.promise(    UPDATE_USER(user?.access_token, admin._id || '', updated, async (data:User) => {
      setLoading(false);
      toast.success("Profile updated successfully");
      dispatch({
        type: "UPDATE_USER",
        user: data,
      });
      customClose && markComplete();
    }),{
      pending: "Updating profile...",
    })



    setLoading(false);
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
            value={about}
            onChange={(e) => setAbout(e.target.value)}
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            value={admin?.username}
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
            onChange={(e) => setPhone(e.target.value)}
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
