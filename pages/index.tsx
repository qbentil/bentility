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

const Home: NextPage = () => {
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
        <hr />
        <Categories titlePosition="start" />
        <Newsletter  />
      </main>

      {/* Footer */}
      <Footer nav />
    </div>
  );
};

export default Home;
