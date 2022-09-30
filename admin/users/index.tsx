import Head from 'next/head'
import React from 'react'
import { Navbar, Sidenav } from '../../components/Admin'
import AllUsers from '../../components/Admin/users'

const Users = () => {
	return (
		<div>
			<Head>
				<title>Bentility| User</title>
				<meta name='description' content='Bentility Admin | Users' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<main className='bg-gray-200 w-screen h-screen '>
				<div className=''>
					<Navbar />
					<div className='flex'>
						<Sidenav page='Users' />
						<div className='min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-3 px-5 poppins'>
							<AllUsers />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Users
