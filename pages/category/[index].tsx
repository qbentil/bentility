import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import BlogPost from "../../components/Blog/post";
import SingleCategory from "../../components/Categories/single";
import Footer from "../../components/Footer";
import Hola from "../../components/Hola";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import { useStateValue } from "../../context/StateProvider";

const UserViewPost = () => {
  const [{categories}, dispatch] = useStateValue()
  const router = useRouter();
  const path = router.asPath;
  const paths = path.split("/");
  const slug = paths[paths.length - 1];
    const category = categories.filter((category: any) => category?.slug.toLowerCase().includes(slug.toLowerCase()))[0]
  return (
    <div className={"items-center flex flex-col"}>
      <Head>
        <title>Bentility | Categories - {slug}</title>
        <meta name="description" content="Bentil's Blog | Bentility" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <>
        <Navbar />
        {/* <Hola twColor="primary" message={category?.title || "We have the ability to build infinite way for us."} />
        <p className="poppins font-medium">{category?.description}</p> */}
      </>
      <main className={`md:w-[80%] w-[95%] min-h-[40vh] `}>
        <SingleCategory category={category} />
        <Newsletter />
      </main>
      {/* Footer */}
      <Footer nav />
    </div>
  );
};

export default UserViewPost;
