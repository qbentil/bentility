import Head from 'next/head'
import Navbar from '../../components/Navbar'
import React from 'react'

import Footer from '../../components/Footer'
import Pageheader from '../../components/PageHeader'

const About = () => {
    return (
        <div className={'items-center flex flex-col'}>
          <Head>
            <title>Bentility | About</title>
            <meta name="description" content="Bentil's Blog| Bentility" />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <Navbar />
          <main className={`md:w-[80%] min-h-[40vh] `}>
          <Pageheader title='About Us' />
          </main>
    
          {/* Footer */}
          <Footer />
        </div>
      )
}

export default About