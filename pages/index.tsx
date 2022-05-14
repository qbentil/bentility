import Head from 'next/head'
import Hola from '../components/Hola'
import Navbar from '../components/Navbar'
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
      <Navbar />
      <Hola message={'We have the ability to build infinite way for us.'} />
      <main className={styles.main}>
      </main>
    </div>
  )
}

export default Home
