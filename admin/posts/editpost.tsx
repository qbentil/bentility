import React, { useState } from 'react'
import Head from 'next/head'
import { Navbar, Sidenav } from '../../components/Admin'

import EditP from './edit'

const PostEdit = () => {
	return (
		<div>
			<Head>
				<title>Bentility| Edit Post</title>
				<meta name='description' content='Bentility Admin | Post' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<main className='bg-gray-200 w-screen h-screen '>
				<div className=''>
					<Navbar />
					<div className='flex'>
						<Sidenav page='New' />
						<div className='min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-3 px-5'>
							<EditP />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}


export default PostEdit
