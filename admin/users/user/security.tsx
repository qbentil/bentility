import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { RiLockPasswordLine, RiSecurePaymentLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { User } from "../../../types";
import { CHANGE_PASSWORD } from "../../../util/admins";
import Button from "../../../components/Button";

const SecuritySettings = ({ user }: { user: User }) => {
  const [loading, setLoading] = useState(false);

  const updatePassword = () => {
    // toast.promise(
    //   CHANGE_PASSWORD(
    //     user?.access_token,
    //     { password, new_password },
    //     (data) => {
    //       if (data?.success) {
    //         toast.success("Password changed successfully");
    //         setPassword("");
    //         setNewPassword("");
    //         setConfirmPassword("");
    //       } else {
    //         toast.error(data?.message || "Failed to change password❌");
    //       }
    //     }
    //   ),
    //   {
    //     pending: "Updating password....",
    //   },
    //   {
    //     toastId: "updateProfile",}
    // );
    setLoading(false);
  };
  return (
    <div className="w-full flex items-center justify-center">
      <form className="col-span-1 bg-white rounded-sm shadow-sm p-3 w-[50%]">
        <div className="text-lg font-semibold flex items-center justify-between">
          <p className="text-active w-full flex items-center gap-x-3">
            Reset Password for {user?.name}
            <RiSecurePaymentLine className="text-red-500" />
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-y-5 py-2 mt-2">
          <div className="flex items-center justify-start gap-x-5 w-full text-sm relative">
            {
              `NB! This feature will reset this user's password.  New Generated password will be sent to the user's email.`
            }
          </div>
          <div className="flex items-center justify-start gap-x-3 text-sm">
            {/* save changes */}
            <Button
              type="button"
              shape="rounded-md"
              text={loading ? "Saving..." : "Generate New Password"}
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
