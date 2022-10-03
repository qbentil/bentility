import React from 'react'
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import WriterProfile from '../../components/WriterProfile';


const WriterPage = () => {
    const router = useRouter();
  const path = router.asPath;
  const paths = path.split("/");
  const slug = paths[paths.length - 1];
  return (
    <div className={"items-center flex flex-col"}>
      <Head>
        <title>Bentility | Categories - {slug}</title>
        <meta name="description" content="Bentil's Blog | Bentility" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <>
        <Navbar />
       
      </>
      <main className={`md:w-[80%] w-[95%] min-h-[40vh] `}>
        <WriterProfile />
        {/* <Newsletter /> */}
      </main>
      {/* Footer */}
      <Footer nav />
    </div>
  )
}

export default WriterPage