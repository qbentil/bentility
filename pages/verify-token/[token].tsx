/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import NewPassword from "../../components/forgot-password";
import { ImSpinner9 } from "react-icons/im";
import { VERIFY_TOKEN } from "../../util";

const Auth = () => {
  const [status, setStatus] = useState("started");
  const [token, setToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    const path = router.asPath;
    const paths = path.split("/");
    const token = paths[paths.length - 1];
    setToken(token);
    VERIFY_TOKEN(token, setStatus, (data: any) => {
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("failed");
      }
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Bentility| Admin Verify Token</title>
        <meta name="description" content="Bentil's Blog| Bentility" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css"
        />
      </Head>
      <main className="w-screen h-screen bg-[url('/images/login-bg.jpg')] bg-cover bg-center  flex items-center justify-center">
        <div className="w-screen h-screen bg-black-rgba flex items-center justify-evenly px-10">
          {/* Brand */}
          <div className="hidden md:flex justify-center items-center w-[20%] gap-5">
            <Link href="/admin">
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-active-bg rounded-full">
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
          <div className="bg-white rounded-lg py-5 px-10">
            <h2 className="font-sans text-center font-bold text-2xl mb-4">
              {status == "started" ? (
                <Loader />
              ) : status == "failed" ? (
                <Failed />
              ) : (
                <NewPassword token={token} />
              )}
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
};

const Loader = () => (
  <div className="flex items-center justify-center gap-x-3">
    <ImSpinner9 className="animate-spin text-2xl" />
    <p className="text-base">Verifying token</p>
  </div>
);
const Failed = () => (
  <div className="flex items-center flex-col justify-center gap-x-3">
    <p className="text-base">Token verification failed</p>
    <p className="text-base">
      <span className="text-red-500">Possible reasons: </span>
      <ul className="list-disc list-inside">
        <li>Token has expired</li>
        <li>Token is invalid</li>
      </ul>
    </p>
    {/* request new token */}
    <p>
      Use the forgot password form to request a new token Link to forgot
      password form : <Link href="/admin">Forgot Password</Link>
    </p>
  </div>
);

export default Auth;
