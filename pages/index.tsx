import AdBanner from "../components/Ad";
import Blog from "../components/Blog";
import BlogHeader from "../components/BlogHeader";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Head from "next/head";
import Hola from "../components/Hola";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import type { NextPage } from "next";
import SearchBar from "../components/Searchbar";
import { useEffect } from "react";
import { FETCH_DATA } from "../util";
import { useStateValue } from "../context/StateProvider";

const Home: NextPage = () => {
  const [{user, posts, categories}, dispatch] = useStateValue();

  useEffect(() => {
    //   fetch and dispatch posts and categories if empty
    posts.length <= 0 && FETCH_DATA("posts", (data:any) => {
        dispatch({
            type: "SET_POSTS",
            posts: data
        });
    });
    categories.length <= 0 && FETCH_DATA("categories", (data:any) => {
        dispatch({
            type: "SET_CATEGORIES",
            categories: data
        });
    })
    }, [])
  return (
    <div className={"items-center flex flex-col"}>
      <Head>
        <title>Bentility | Home</title>
        <meta name="description" content="Bentil's Blog | Bentility" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <>
        <Navbar />
        <Hola message={"We have the ability to build infinite way for us."} />
        <SearchBar />
      </>
      <main className={`md:w-[80%] w-[95%] min-h-[40vh] `}>
        <BlogHeader />
        <AdBanner />
        <Blog />
        <Categories titlePosition="start" />
        <Newsletter  />
      </main>

      {/* Footer */}
      <Footer nav />
    </div>
  );
};

export default Home;
