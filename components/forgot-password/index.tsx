import { BsEye, BsEyeSlash } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-toastify";


const NewPassword = ({ token }: { token: string }) => {
  const [credentials, setCredentials] = useState({
    password: "",
    confirm: "",
  });
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    if (credentials.password === "" || credentials.confirm === "") {
      toast.error("Please enter all fields");
      setLoading(false);
      return;
    }
    // perform password reset here~!!
    toast.success("Password reset successful");
    setLoading(false);
  };

  const togglePasswordShow = () => {
    credentials.password.length > 0 &&
      setPasswordInputType(
        passwordInputType === "password" ? "text" : "password"
      );
  };

  return (
    <form method="POST" autoComplete="OFF">
      <div className="flex flex-col items-end gap-2 text-active w-80 my-2">
        <label className="text-sm font-sans" htmlFor="email">
        New password
        </label>
        <input
          type={passwordInputType}
          name="password"
          id="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({
              password: e.target.value,
              confirm: credentials.confirm,
            })
          }
          className="w-full border border-active-bg px-2 focus:border-active outline-none font-sans h-10 text-right"
        />
      </div>
      <div className="flex flex-col items-end gap-2 text-active w-80 my-2 relative">
        <label className="text-sm font-sans" htmlFor="password">
          Confirm password
        </label>
        <input
          type={passwordInputType}
          name="password"
          id="password"
          value={credentials.confirm}
          onChange={(e) =>
            setCredentials({
              password: credentials.password,
              confirm: e.target.value,
            })
          }
          className="w-full border border-active-bg px-2 pl-8 group focus:border-active outline-none font-sans h-10 text-right"
        />
        {passwordInputType === "password" ? (
          <BsEye
            className={`${
              credentials.password.length > 0 ? "text-active" : "text-active-bg"
            } text-lg absolute top-10 left-2 cursor-pointer `}
            onClick={togglePasswordShow}
          />
        ) : (
          <BsEyeSlash
            className={`${
              credentials.password.length > 0 ? "text-active" : "text-active-bg"
            } text-lg absolute top-10 left-2 cursor-pointer `}
            onClick={togglePasswordShow}
          />
        )}
      </div>
      <div className="flex items-center justify-center py-5">
        <button
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
          className={`w-[95%] ${
            loading ? "bg-active-bg text-primary" : "bg-primary text-white"
          }  font-sans font-bold py-2 px-4 cursor-pointer text-base flex items-center justify-center gap-x-3`}
        >
          {loading && <ImSpinner9 className="animate-spin text-2xl" />}
          {!loading ? "Change Password" : "Changing password..."}
        </button>
      </div>
    </form>
  );
};

export default NewPassword;
