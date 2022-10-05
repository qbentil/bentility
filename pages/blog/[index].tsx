import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import BlogPost from "../../components/Blog/post";
import RelatedPosts from "../../components/Blog/crelated";
import Footer from "../../components/Footer";
import Hola from "../../components/Hola";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import { useStateValue } from "../../context/StateProvider";

const UserViewPost = () => {
  const [{posts}, dispatch] = useStateValue()
  const router = useRouter();
  const path = router.asPath;
  const paths = path.split("/");
  const slug = paths[paths.length - 1];
  const post = posts.filter((post: any) => post?.slug.toLowerCase().includes(slug.toLowerCase()))[0]
  return (
    <div className={"items-center flex flex-col"}>
      <Head>
        <title>Bentility | Blog - {slug}</title>
        <meta name="description" content="Bentil's Blog | Bentility" />
        <link rel="icon" href="/favicon.png" />
        {/* site except */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bentil" />
        <meta name="twitter:creator" content="@bentil" />
        <meta name="twitter:title" content="Bentility | Blog" />
        <meta name="twitter:description" content="Bentil's Blog | Bentility" />
        <meta name="twitter:image" content="https://bentility.com/images/og.png" />
        <meta property="og:url" content="https://bentility.com" />
        <meta property="og:title" content="Bentility | Blog" />
        <meta property="og:description" content="Bentil's Blog | Bentility" />
        <meta property="og:image" content="https://bentility.com/images/og.png" />
        <meta property="og:image:secure_url" content="https://bentility.com/images/og.png" />
        <meta property="og:image:alt" content="Bentility | Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bentility | Blog" /> */}

      </Head>
      <>
        <Navbar />
        <Hola message={post?.title || "We have the ability to build infinite way for us."} />
      </>
      <main className={`md:w-[80%] w-[95%] min-h-[40vh] `}>
        <BlogPost post={post} />
        <Newsletter />
      </main>
      {/* Footer */}
      <Footer nav />
    </div>
  );
};

export default UserViewPost;
