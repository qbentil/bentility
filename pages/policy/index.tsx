import Head from 'next/head'
import Navbar from '../../components/Navbar'
import React from 'react'
import Hola from '../../components/Hola'
import BlogHeader from '../../components/BlogHeader'
import Footer from '../../components/Footer'
import Pageheader from '../../components/PageHeader'

const Policy = () => {
    return (
        <div className={'items-center flex flex-col'}>
          <Head>
            <title>Bentility | Policy</title>
            <meta name="description" content="Bentil's Blog| Bentility" />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <Navbar />
          <main className={`md:w-[80%] min-h-[40vh] `}>
          <Pageheader title='Terms and Conditions' />

          </main>
    
          {/* Footer */}
          <Footer />
        </div>
      )
}

export default Policy