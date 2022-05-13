import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bentility| Home</title>
        <meta name="description" content="Bentil's Blog| Bentility" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`text-red-800 font-bold`}>
          Welcome to Next.js!
        </h1>
      </main>
    </div>
  )
}

export default Home
