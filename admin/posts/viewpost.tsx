import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { Navbar, Sidenav } from '../../components/Admin'
import ViewP from './view'


const PostView = () => {
  const router = useRouter()
	const path = router.asPath;
	const paths = path.split("/");
	const slug = paths[paths.length - 1];
  return (
    <div>
    <Head>
      <title>Bentility| Post - {slug}</title>
      <meta name='description' content='Bentility Admin | Post' />
      <link rel='icon' href='/favicon.png' />
    </Head>
    <main className='bg-gray-200 w-screen h-screen '>
      <div className=''>
        <Navbar />
        <div className='flex'>
          <Sidenav page='New' />
          <div className='min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-3 px-5'>
            <ViewP />
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default PostView