import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { RiLockPasswordLine, RiSecurePaymentLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { useStateValue } from "../../context/StateProvider";
import { CHANGE_PASSWORD } from "../../util/admins";
import Button from "../Button";

const SecuritySettings = () => {
  const [{ user }, dispatch] = useStateValue();
  const [password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputtype, setInputtype] = useState<"password" | "text"> ("password");

  const updatePassword = () => {
    if (!password || !new_password || !confirmPassword)
      return toast.error("Please fill all fields");
    setLoading(true);
    if (new_password !== confirmPassword) {
      setLoading(false);
      return toast.error("Passwords do not match");
    }
    if (new_password.length < 6) {
      setLoading(false);
      return toast.error("Password must be at least 6 characters");
    }
    toast.promise(
      CHANGE_PASSWORD(
        user?.access_token,
        { password, new_password },
        (data) => {
          if (data?.success) {
            toast.success("Password changed successfully");
            setPassword("");
            setNewPassword("");
            setConfirmPassword("");
          } else {
            toast.error(data?.message || "Failed to change password❌");
          }
        }
      ),
      {
        pending: "Updating password....",
      },
      {
        toastId: "updateProfile",}
    );
    setLoading(false);
  };
  const toggleType = () => {
    setInputtype(inputtype === "password" ? "text" : "password");
  }
  return (
    <div className="w-full flex items-center justify-center">
      <form className="col-span-1 bg-white rounded-sm shadow-sm p-3 w-[50%]">
        <div className="text-lg font-semibold flex items-center justify-between">
          <p className="text-active w-full flex items-center gap-x-3">
            Change Password <RiSecurePaymentLine className="text-red-500" />
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-y-5 py-2 mt-2">
          <div className="flex items-center justify-start gap-x-5 text-sm w-full">
            <label
              htmlFor="cpassword"
              className="text-active font-semibold w-[30%]"
            >
              Current Password
            </label>
            <input
              type={inputtype}
              className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Current Password"
              id="cpassword"
            />
          </div>
          <div className="flex items-center justify-start gap-x-5 text-sm w-full">
            <label
              htmlFor="npassword"
              className="text-active font-semibold w-[30%]"
            >
              New Password
            </label>
            <input
              type={inputtype}
              className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
              value={new_password}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              id="npassword"
            />
          </div>
          <div className="flex items-center justify-start gap-x-5 w-full text-sm relative">
            <label
              htmlFor="conpassword"
              className="text-active font-semibold w-[30%]"
            >
              Confirm Password
            </label>
            <input
              type={inputtype}
              className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="conpassword"
            />
            {/* show password */}
            <div onClick={toggleType} className="absolute right-0 text-lg top-0 mr-3 mt-3 cursor-pointer text-active hover:scale-105">
            {
              inputtype == "password" ? (
                <AiOutlineEye />
              ): (
                <AiOutlineEyeInvisible />
              )
            }
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-3 text-sm">
            {/* save changes */}
            <Button
              type="button"
              shape="rounded-md"
              text={loading ? "Saving..." : "Save changes"}
              onClick={updatePassword}
              icon={
                loading ? (
                  <BiLoaderCircle className="animate animate-spin" />
                ) : (
                  <RiLockPasswordLine className="text-white" />
                )
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SecuritySettings;
