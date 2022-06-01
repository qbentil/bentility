import AdBanner from '../../components/Ad'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'
import Pageheader from '../../components/PageHeader'
import React from 'react'
import SearchBar from '../../components/Searchbar'
import { Seperator } from '../../components/Seperator'

const About = () => {
    return (
        <div className={'items-center flex flex-col'}>
          <Head>
            <title>Bentility | About</title>
            <meta name="description" content="Bentil's Blog| Bentility" />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <Navbar />
          <main className={`md:w-[100%] min-h-[40vh]  flex items-center justify-start flex-col`}>
            <Pageheader title='About Us' />
            <SearchBar />
            <div className={`md:w-[80%] w-[95%] min-h-[40vh] `}>
            <Newsletter />
            <Seperator width = {"10"} />
            <AdBanner />
            <Categories titlePosition='center' />
            </div>
          </main>
    
          {/* Footer */}
          <Footer nav />
        </div>
      )
}

export default About