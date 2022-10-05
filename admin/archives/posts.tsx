import Head from 'next/head'
import React from 'react'
import { Navbar, Sidenav } from '../../components/Admin'
import ArchivedPosts from '../../components/Admin/archives/posts'

const Archives = () => {
	return (
		<div>
			<Head>
				<title>Bentility| Admin | Archived Posts</title>
				<meta name='description' content='Bentility Admin | Archives' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<main className='bg-gray-200 w-screen h-screen '>
				<div className=''>
					<Navbar />
					<div className='flex'>
						<Sidenav page='Archives' />
						<div className='min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-3 px-5 poppins '>
							<ArchivedPosts />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Archives
