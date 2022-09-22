import { Navbar, Sidenav } from '../../../components/Admin'
import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

import { MdDriveFileRenameOutline, MdOutlineColorLens } from 'react-icons/md'
import { BsTextCenter } from 'react-icons/bs'

import Head from 'next/head'
import ImageUploader from '../../../components/ImageUploader'

const NewCategory = () => {
	const [image, setImage] = useState()
	const [imageURI, setImageURI] = useState()
	const [showColorPicker, setShowColorPicker] = useState(false)
  const [color, setColor] = useState('#000')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [slug, setSlug] = useState('')

	const changeColor = (color: any) => {
		setShowColorPicker(false)
		setColor(color.hex)
  }
  
  const generateSlug = (e: any) => { 
    const value = e.target.value
    const slug = value.toLowerCase().replace(/ /g, '-')
    setSlug(slug)
  }

	return (
		<div>
			<Head>
				<title>Bentility| Admin | New Category</title>
				<meta
					name='description'
					content='Bentility Admin | New Category'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<main className='bg-gray-200 w-screen h-screen '>
				<div className=''>
					<Navbar />
					<div className='flex'>
						<Sidenav page='Categories' />
						<div className='min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-3 px-5'>
							<div className='bg-white w-full h-full rounded-md shadow-md p-5 flex flex-col gap-8'>
								<h1 className='poppins font-bold text-2xl'>
									New Category
								</h1>
								<form
									action=''
									className='w-full flex gap-6 flex-col md:flex-row'
								>
									<div className='flex flex-col mx-auto gap-6 mt-5 w-[60%]'>
										<ImageUploader
											image={image}
											setImage={setImage}
											setImageURI={setImageURI}
											className='w-[20px]'
										/>
									</div>
									<div className=' py-10 w-[40%] flex flex-col gap-6'>
										<div className='flex flex-col gap-2'>
											<label
												htmlFor='name'
												className='poppins font-medium text-base'
											>
												Title
											</label>
											<div className='flex w-full items-center border-b-2 border-blue-200 '>
												<MdDriveFileRenameOutline className='text-primary' />
												<input
													type='text'
													name='name'
													id='name'
													placeholder='Enter category title'
                          className=' rounded-md px-2 py-1 focus:outline-none focus:border-active-bg w-full pl-5 '
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value)
                            generateSlug(e)
                          }}
												/>
											</div>
											<p className='text-sm text-gray-400 font-medium'>
												{slug}
											</p>
										</div>
										<div className='flex flex-col gap-2'>
											<label
												htmlFor='color'
												className='poppins font-medium text-base'
											>
												Color
											</label>
											<div className='flex w-full items-center '>
												{showColorPicker ? (
													<SketchPicker
														onChangeComplete={
															changeColor
														}
													/>
												) : (
													<div className='flex items-center gap-4'>
														<MdOutlineColorLens
															style={{
																color: color,
															}}
															className='text-xl'
														/>
														<input
															color={color}
															type='button'
															onClick={() =>
																setShowColorPicker(
																	true
																)
															}
															placeholder={
																'Select Color'
															}
															value={
																color == '#000'
																	? 'Select Color'
																	: color
															}
															style={{
																color: color,
															}}
															className='poppins font-bold'
														/>

														<div
															className='border-black border-2 w-4 h-4'
															style={{
																backgroundColor:
																	color,
															}}
														></div>
													</div>
												)}
											</div>
										</div>
										<div className='flex flex-col gap-2 mt-5'>
											<label
												htmlFor='description'
												className='poppins font-medium text-base'
											>
												Description
											</label>
											<div className='flex w-full  border-b-2 border-blue-200 '>
												<div className='block pt-4 h-max'>
													<BsTextCenter className='text-primary ' />
												</div>
												<textarea
													name='description'
													id='description'
													cols={40}
													rows={3}
													placeholder='Enter category description'
                          className=' rounded-md px-2 focus:outline-none focus:border-active-bg resize-none w-full pl-5 '
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
												/>
											</div>
                    </div>
                    <div className='mx-auto bg-primary text-white '>
                      <button type='submit'>
                            Add Category
                      </button>
                    </div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default NewCategory
