import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { RiLockPasswordLine, RiSecurePaymentLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { User } from "../../../types";
import Button from "../../../components/Button";
import { RESET_PASSWORD } from "../../../util/admins";
import { useStateValue } from "../../../context/StateProvider";

const SecuritySettings = ({ admin }: { admin: User }) => {
  const [{ user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);

  const resetPassword = () => {
    setLoading(true);
    toast.promise(
      RESET_PASSWORD(user?.access_token, admin._id || "", async (data) => {
        if (data.success) {
          setLoading(false);
          toast.success("Password reset successful🚀");
        }
      }),
      {
        pending: "Resetting password...",
      }
    );
  };
  return (
    <div className="w-full flex items-center justify-center">
      <form className="col-span-1 bg-white rounded-sm shadow-sm p-3 w-[50%]">
        <div className="text-lg font-semibold flex items-center justify-between">
          <p className="text-active w-full flex items-center gap-x-3">
            Reset Password for {admin?.name}
            <RiSecurePaymentLine className="text-red-500" />
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-y-5 py-2 mt-2">
          <div className="flex items-center justify-start gap-x-5 w-full text-sm relative">
            {`NB! This feature will reset this user's password.  New Generated password will be sent to the user's email.`}
          </div>
          <div className="flex items-center justify-start gap-x-3 text-sm">
            {/* save changes */}
            <Button
              type="button"
              shape="rounded-md"
              text={loading ? "Saving..." : "Generate New Password"}
              onClick={resetPassword}
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
