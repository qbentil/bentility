import React, { useState } from "react";
import { toast } from "react-toastify";
import {ImSpinner9} from "react-icons/im";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const LoginForm = ({setForm}: {setForm: any}) => {
  const [credentials, setCredentials] = useState({
    email: "",
    secret: "",
  });
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    if (credentials.email === "" || credentials.secret === "") {
      toast.error("Please enter all fields");
    } else {
      if (!validateEmail(credentials.email)) {
        toast.error("Please enter a valid email", {
          autoClose: 3000,
        });
      } else {
        setError("");
        toast.success("Login Successful");
      }
    }
    // setLoading(false);
  };
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const togglePasswordShow = () => {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
    } else {
      setPasswordInputType("password");
    }
  };
  return (
    <form method="POST" autoComplete="OFF">
      <div className="flex flex-col items-end gap-2 text-active w-80 my-2">
        <label className="text-sm font-sans" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({
              email: e.target.value,
              secret: credentials.secret,
            })
          }
          className="w-full border border-active-bg px-2 focus:border-active outline-none font-sans h-10 text-right"
        />
      </div>
      <div className="flex flex-col items-end gap-2 text-active w-80 my-2 relative">
        <label className="text-sm font-sans" htmlFor="password">
          Password
        </label>
        <input
          type={passwordInputType}
          name="password"
          id="password"
          value={credentials.secret}
          onChange={(e) =>
            setCredentials({
              email: credentials.email,
              secret: e.target.value,
            })
          }
          className="w-full border border-active-bg px-2 pl-8 group focus:border-active outline-none font-sans h-10 text-right"
        />
        {passwordInputType === "password" ? (
          <BsEye
            className={`${
              credentials.secret.length > 0 ? "text-active" : "text-active-bg"
            } text-lg absolute top-10 left-2 cursor-pointer `}
            onClick={togglePasswordShow}
          />
        ) : (
          <BsEyeSlash
            className={`${
              credentials.secret.length > 0 ? "text-active" : "text-active-bg"
            } text-lg absolute top-10 left-2 cursor-pointer `}
            onClick={togglePasswordShow}
          />
        )}
      </div>
      <div className="flex items-center justify-between font-sans px-1 py-3">
        <p className="text-primary text-sm cursor-pointer" onClick={() => setForm('forgot')}>forgot password</p>
        <div className="flex items-center flex-row-reverse justify-center gap-2">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="remember" className="text-sm cursor-pointer">
            Remember me
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        <button
          type="submit"
          onClick={handleSubmit}
          className={`w-[95%] ${
            loading ? "bg-active-bg text-primary" : "bg-primary text-white"
          }  font-sans font-bold py-2 px-4 cursor-pointer flex items-center justify-center gap-x-3`}
        >
          {loading && <ImSpinner9 className="animate-spin" />}
          {loading ? "Logging in..." : "SIGN IN"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
