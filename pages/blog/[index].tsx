import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import BlogPost from '../../components/Blog/post'
import Footer from '../../components/Footer'
import Hola from '../../components/Hola'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'

const UserViewPost = () => {
    const router = useRouter()
	const path = router.asPath;
	const paths = path.split("/");
    const slug = paths[paths.length - 1];
  return (
    <div className={"items-center flex flex-col"}>
    <Head>
              <title>Bentility | Blog - {slug}</title>
      <meta name="description" content="Bentil's Blog | Bentility" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <>
      <Navbar />
      <Hola message={"We have the ability to build infinite way for us."} />
      
    </>
    <main className={`md:w-[80%] w-[95%] min-h-[40vh] `}>
      
      <BlogPost />
      
      <Newsletter  />
    </main>

    {/* Footer */}
    <Footer nav />
  </div>
  )
}

export default UserViewPost