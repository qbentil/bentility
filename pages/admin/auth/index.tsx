/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import Head from "next/head";
import { toast } from "react-toastify";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [error, setError] = useState("");
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please enter all fields");
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
  };
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const togglePasswordShow = () => {
    if (passwordInputType === 'password') {
      setPasswordInputType('text');
    } else {
      setPasswordInputType('password');
    }
  }

  return (
    <div>
      <Head>
        <title>Bentility| Admin Login</title>
        <meta name="description" content="Bentil's Blog| Bentility" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="w-screen h-screen bg-[url('/images/login-bg.jpg')] bg-cover bg-center  flex items-center justify-center">
        <div className="w-screen h-screen bg-black-rgba flex items-center justify-evenly px-10">
          {/* Brand */}
          <div className="flex justify-center items-center w-[20%] gap-5">
            <Link href="/admin">
              <div className="w-12 h-12 flex items-center justify-center border border-active-bg rounded-full">
                <img
                  src="https://codersquiz.netlify.app/img/bentil.jpeg"
                  alt=""
                  className="w-[90%] h-[90%] border border-active-bg rounded-full"
                />
              </div>
            </Link>
            <Link href="/">
              <h1 className="font-brand font-[500] text-5xl cursor-pointer text-white ">
                Bentility
              </h1>
            </Link>
          </div>
          {/* form */}
          <div className='bg-white rounded-lg py-5 px-10'>
            <h2 className='font-sans text-center font-bold text-2xl mb-4'>Administrator</h2>
            <form method="POST" autoComplete="OFF">
              <div className='flex flex-col items-end gap-2 text-active w-80 my-2'>
                <label className='text-sm font-sans' htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-active-bg px-2 focus:border-active outline-none font-sans h-10 text-right"
                />
              </div>
              <div className='flex flex-col items-end gap-2 text-active w-80 my-2 relative'>
                <label className='text-sm font-sans' htmlFor="password">Password</label>
                <input
                  type={passwordInputType}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-active-bg px-2 pl-8 group focus:border-active outline-none font-sans h-10 text-right"
                />
                {
                  passwordInputType === 'password' ? (
                    <BsEye className={`${password.length > 0? 'text-active':'text-active-bg'} text-lg absolute top-10 left-2 cursor-pointer `} onClick = {togglePasswordShow} />
                  ) : (
                    <BsEyeSlash className={`${password.length > 0? 'text-active':'text-active-bg'} text-lg absolute top-10 left-2 cursor-pointer `}  onClick = {togglePasswordShow} />
                  )
                }
              </div>
              <div className="flex items-center justify-between font-sans px-1 py-3">
                  <p className="text-primary text-sm">forgot password</p>
                  <div className="flex items-center flex-row-reverse justify-center gap-2">
                    <input type="checkbox" name="remember" id="remember" className="w-4 h-4 cursor-pointer" />
                    <label htmlFor="remember" className="text-sm cursor-pointer">Remember me</label>
                  </div>
              </div>
              <div className="flex items-center justify-center py-5">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-[80%] bg-primary text-white font-sans font-bold py-2 px-4 cursor-pointer"
                >
                  SIGN IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
