/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import NewPassword from "../../components/forgot-password";
import { ImSpinner9 } from "react-icons/im";


const Auth = () => {
  const [token, setToken] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const path = router.asPath;
    const paths = path.split("/");
    setToken(paths[paths.length - 1])
  }, [])
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
             {
                !confirmed? <Loader /> : <NewPassword token={token} />
             }
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

)

export default Auth;
