import Head from 'next/head'
import Navbar from '../../components/Navbar'
import React from 'react'
import Hola from '../../components/Hola'
import BlogHeader from '../../components/BlogHeader'
import Footer from '../../components/Footer'
import Pageheader from '../../components/PageHeader'

const Contact = () => {
    return (
        <div className={'items-center flex flex-col'}>
          <Head>
            <title>Bentility | Contact</title>
            <meta name="description" content="Bentil's Blog| Bentility" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <main className={`md:w-[80%] min-h-[40vh] `}>
          <Pageheader title='Contact Us' />
          </main>
    
          {/* Footer */}
          <Footer />
        </div>
      )
}

export default Contact