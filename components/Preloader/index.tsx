import Head from "next/head";
import { BiLoaderCircle } from "react-icons/bi";
const Preloader = () => {
  return (
    <div>
      <Head>
        <title>Bentility| Admin Login</title>
        <meta name="description" content="Bentil's Blog | Bentility" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css"
        />
      </Head>
      <main className="w-screen h-screen bg-active-bg flex items-center justify-center ">
        <div className="animate-pulse text-2xl flex items-center justify-center gap-x-3">
          <BiLoaderCircle className="animate animate-spin text-active" />
          <p className="text-xl">Loading!.....</p>
        </div>
      </main>
    </div>
  );
};

export default Preloader;
