import Footer from "../../components/Footer";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import React from "react";
import WriterProfile from "../../components/WriterProfile";
import { useRouter } from "next/router";
import { useStateValue } from "../../context/StateProvider";

const WriterPage = () => {
  const router = useRouter();
  const path = router.asPath;
  const paths = path.split("/");
  const username = paths[paths.length - 1];
  const [{pusers}, dispatch] = useStateValue();
  const user = pusers.filter((user: any) => user?.username === username)[0];
  return (
    <div className={"items-center flex flex-col"}>
      <Head>
        <title>Bentility | Writer - {username}</title>
        <meta name="description" content="Bentil's Blog | Bentility" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <>
        <Navbar />
      </>
      <main className={`md:w-[80%] w-[95%] min-h-[40vh] `}>
        <WriterProfile user={user} />
        {/* <Newsletter /> */}
      </main>
      {/* Footer */}
      <Footer nav />
    </div>
  );
};

export default WriterPage;
