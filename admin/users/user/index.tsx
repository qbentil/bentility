import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Navbar, Sidenav } from '../../../components/Admin'
import UserView from './main'

const SingleUser = () => {
	const router = useRouter()
	const path = router.asPath;
	const paths = path.split("/");
	const username = paths[paths.length - 1];

	return (
		<div>
			<Head>
				<title>Bentility| User - {username}</title>
				<meta name='description' content='Bentility Admin | User' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<main className='bg-gray-200 w-screen h-screen '>
				<div className=''>
					<Navbar />
					<div className='flex'>
						<Sidenav page='Users' />
						<div className='min-h-[90vh] h-[90vh] overflow-y-auto  scrollbar-hidden w-[80%] py-3 px-5 poppins'>
							<UserView />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default SingleUser
