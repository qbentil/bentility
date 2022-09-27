import React from "react";
import { RiLockPasswordLine, RiSecurePaymentLine } from "react-icons/ri";
import Button from "../Button";

const SecuritySettings = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <form className="col-span-1 bg-white rounded-sm shadow-sm p-3 w-[50%]">
        <div className="text-lg font-semibold flex items-center justify-between">
          <p className="text-active w-full flex items-center gap-x-3">Change Password <RiSecurePaymentLine className="text-red-500" /></p>
        </div>
        <div className="flex flex-col items-start justify-center gap-y-5 py-2 mt-2">
          <div className="flex items-center justify-start gap-x-5 text-sm w-full">
            <label htmlFor="cpassword" className="text-active font-semibold w-[30%]">
              Current Password
            </label>
            <input
              type="text"
              className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
              value={""}
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
              type="email"
              className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
              value={""}
              placeholder="Email ID"
              id="npassword"
            />
          </div>
          <div className="flex items-center justify-start gap-x-5 w-full text-sm">
            <label
              htmlFor="conpassword"
              className="text-active font-semibold w-[30%]"
            >
              Confirm Password
            </label>
            <input
              type="text"
              className="w-[80%] border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-active"
              placeholder="Username"
              id="conpassword"
            />
          </div>
          <div className="flex items-center justify-start gap-x-3 text-sm">
            {/* save changes */}
            <Button
              text="Save changes"
              type="submit"
              shape="rounded-md"
              icon={<RiLockPasswordLine className="text-white" />}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SecuritySettings;
