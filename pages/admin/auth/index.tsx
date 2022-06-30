import React, { useState } from "react";

import Head from "next/head";
import { toast } from "react-toastify";
import { BiErrorCircle } from "react-icons/bi";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (email === "" || password === "") {
            toast.error("Please enter all fields");
        } else {
            if(!validateEmail(email)) {
                toast.error("Please enter a valid email", {
                    autoClose: 3000,
                });
            }else{
                setError("");
                toast.success("Login Successful");
            }
        }
    }
    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
  return (
    <div>
      <Head>
        <title>Bentility| Admin Login</title>
        <meta name="description" content="Bentil's Blog| Bentility" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="w-screen h-screen bg-gray-200 flex items-center justfy-center">
        <form className="w-[32vw] mx-auto bg-gray-200 p-5 drop-shadow-lg">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded w-full h-12 px-2 outline-none text-lg focus:border-blue-600 "
              placeholder="name@bentility.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded w-full h-12 px-2 outline-none text-lg focus:border-blue-600 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Auth;
