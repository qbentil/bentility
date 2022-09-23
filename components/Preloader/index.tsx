import Head from "next/head";
import { BiLoaderCircle } from "react-icons/bi";
const Preloader = () => {
  return (
    <div>
      <Head>
        <title>Bentility| Admin Login</title>
        <meta name="description" content="Bentil's Blog | Bentility" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="w-screen h-screen bg-active-bg flex items-center justify-center ">
        <div className="animate-pulse text-2xl flex items-center justify-center gap-x-3">
          <BiLoaderCircle className="animate animate-spin text-active" />
          <p className="text-xl text-active">Loading!.....</p>
        </div>
      </main>
    </div>
  );
};

export default Preloader;
