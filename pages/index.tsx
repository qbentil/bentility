import Head from 'next/head'
import Hola from '../components/Hola'
import Navbar from '../components/Navbar'
import type { NextPage } from 'next'
import BlogHeader from '../components/BlogHeader'

const Home: NextPage = () => {
  return (
    <div className={'items-center flex flex-col'}>
      <Head>
        <title>Bentility| Home</title>
        <meta name="description" content="Bentil's Blog| Bentility" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hola message={'We have the ability to build infinite way for us.'} />
      <main className={`md:w-[80%] `}>
        <BlogHeader />
      </main>
    </div>
  )
}

export default Home
