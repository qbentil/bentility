import {	SketchPicker} from 'react-color'
import {
	MdDriveFileRenameOutline,
	MdOutlineAddCircleOutline,
	MdOutlineColorLens,
} from 'react-icons/md'
import { Navbar, Sidenav } from '../../../components/Admin'
import React, { useState } from 'react'

import { BsTextCenter } from 'react-icons/bs'
import Button from '../../../components/Button/'
import Head from 'next/head'
import ImageUploader from '../../../components/ImageUploader'
import { removeImage, uploadImage } from '../../../firebase'
import { ADD_CATEGORY } from '../../../util/categories'
import { useStateValue } from '../../../context/StateProvider'
import { toast } from 'react-toastify'
import { BiLoaderCircle } from 'react-icons/bi'

const NewCategory = () => {
	const [{ user }, dispatch] = useStateValue()
	const [image, setImage] = useState(null)
	const [imageURI, setImageURI] = useState()
	const [showColorPicker, setShowColorPicker] = useState(false)
	const [color, setColor] = useState('#000')
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [slug, setSlug] = useState('')
	const [loading, setLoading] = useState(false)

	const changeColor = (color: any) => {
		setColor(color.hex)
	}

	const generateSlug = (e: any) => {
		const value = e.target.value
		const slug = value.toLowerCase().replace(/ /g, '-')
		setSlug(slug)
	}

	const clearFields = () => {
		setColor('#000')
		setTitle('')
		setSlug('')
		setDescription('')
		setImage(null)
	}
	const validate = () => {
		if (!title || !description || !slug || !image || color == '#000') {
			toast.error('All fields are required')
			return false
		}
		return true
	}

	//Add category to database here
	const addCategory = () => {
		if (!validate()) {
			setLoading(false)
			return
		}
		setLoading(true)
		uploadImage(imageURI, 'categories', async (url: string) => {
			const category = {
				title,
				slug,
				description,
				imageURL: url,
				color,
			}
			await ADD_CATEGORY(
				user?.access_token,
				category,
				async (data: any) => {
					if (data.success) {
						dispatch({
							type: 'ADD_CATEGORY',
							category: data.data,
						})
						toast.success(
							data?.message || 'Category added successfully'
						)
						clearFields()
					} else {
						await removeImage(url)
						toast.error(data?.message || 'Something went wrong')
					}
				}
			)
		})
		setLoading(false)
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
											<div className='flex w-full items-center relative '>
												{showColorPicker ? (
													<div className='flex z-10  '>
														<SketchPicker
															onChangeComplete={
																changeColor
															}
															color={color}
															className='absolute left-0 z-10'
														/>
														<div
															className=' px-5 py-2 mt-4 border-2 rounded-full border-primary text-primary cursor-pointer absolute right-0 '
															onClick={() =>
																setShowColorPicker(
																	false
																)
															}
														>
															Done
														</div>
													</div>
												) : (
													<div
														className='flex items-center gap-4 cursor-pointer'
														onClick={() =>
															setShowColorPicker(
																true
															)
														}
													>
														<MdOutlineColorLens
															style={{
																color: color,
															}}
															className='text-xl'
														/>
														<input
															color={color}
															type='button'
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
															className='poppins font-bold cursor-pointer'
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
													rows={7}
													placeholder='Enter category description'
													className=' rounded-md px-2 focus:outline-none focus:border-active-bg resize-none w-full pl-5 '
													value={description}
													onChange={(e) =>
														setDescription(
															e.target.value
														)
													}
												/>
											</div>
										</div>

										<Button
											icon={
												!loading ? (
													<MdOutlineAddCircleOutline />
												) : (
													<BiLoaderCircle className='animate animate-spin' />
												)
											}
											text={
												loading
													? 'Adding.....'
													: 'Add Category'
											}
											disabled={loading}
											onClick={addCategory}
										/>
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
