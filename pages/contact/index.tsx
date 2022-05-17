import Head from 'next/head'
import Navbar from '../../components/Navbar'
import React from 'react'
import Hola from '../../components/Hola'
import BlogHeader from '../../components/BlogHeader'
import Footer from '../../components/Footer'

const Contact = () => {
    return (
        <div className={'items-center flex flex-col'}>
          <Head>
            <title>Bentility | Contact</title>
            <meta name="description" content="Bentil's Blog| Bentility" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <Hola message={'Contact us'} />
          <main className={`md:w-[80%] min-h-[40vh] `}>
            <BlogHeader />
          </main>
    
          {/* Footer */}
          <Footer />
        </div>
      )
}

export default Contact