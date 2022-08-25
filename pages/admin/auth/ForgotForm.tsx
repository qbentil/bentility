import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { CgSpinnerTwo } from "react-icons/cg";
const ForgotForm = ({setForm}: {setForm: any}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    if (email === "") {
      toast.error("Please enter your email");
    } else {
      if (!validateEmail(email)) {
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-active-bg px-2 focus:border-active outline-none font-sans h-10 text-right"
        />
      </div>
      <div className="flex items-center justify-between font-sans px-1 py-3">
        <p className="text-primary text-sm cursor-pointer" onClick={()=> setForm("login")}>Login to account</p>
        <div className="flex items-center flex-row-reverse justify-center gap-2">

        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        <button
          type="submit"
          onClick={handleSubmit}
          className={`w-[100%] ${
            loading ? "bg-active-bg text-primary" : "bg-primary text-white"
          }  font-sans font-bold py-2 px-4 cursor-pointer flex items-center justify-center gap-x-3`}
        >
          {loading && <CgSpinnerTwo className="animate-spin" />}
          {loading ? "Sending......" : "SEND PASSWORD RESET LINK"}
        </button>
      </div>
    </form>
  );
};

export default ForgotForm;
