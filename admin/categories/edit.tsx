import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import { BiLoaderCircle } from 'react-icons/bi'
import { BsTextCenter } from 'react-icons/bs'
import {
	MdDriveFileRenameOutline,
	MdOutlineAddCircleOutline,
	MdOutlineColorLens,
} from 'react-icons/md'
import Button from '../../components/Button'
import ImageUploader from '../../components/ImageUploader'
import { useStateValue } from '../../context/StateProvider'

const EditC = () => {
	const router = useRouter()
	const postId = router.query._id
	const [{ categories, user }, dispatch] = useStateValue()
	const cat = categories.filter((post: any) => post._id === postId)[0]

	const [image, setImage] = useState('')
	const [imageURI, setImageURI] = useState('')
	const [showColorPicker, setShowColorPicker] = useState(false)
	const [color, setColor] = useState(cat.color || '#000')
	const [title, setTitle] = useState(cat.title || '')
	const [description, setDescription] = useState(cat.description)
	const [slug, setSlug] = useState(cat.slug)
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
		setImage('')
	}

    const editCategory = () => {
        // TODO: Edit category here
    }

	return (
		<div className=''>
			<div className='bg-white w-full h-full rounded-md shadow-md p-5 flex flex-col gap-8'>
				<h1 className='poppins font-bold text-2xl'>New Category</h1>
				<form
					action=''
					className='w-full flex gap-6 flex-col md:flex-row'
				>
					<div className='flex flex-col mx-auto gap-6 mt-5 w-[40%]'>
						<ImageUploader
							image={image}
							setImage={setImage}
							setImageURI={setImageURI}
							className='h-full'
						/>
					</div>
					<div className=' py-10 w-[50%] flex flex-col gap-6'>
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
											onChangeComplete={changeColor}
											color={color}
											className='absolute left-0 z-10'
										/>
										<div
											className=' px-5 py-2 mt-4 border-2 rounded-full border-primary text-primary cursor-pointer absolute right-0 '
											onClick={() =>
												setShowColorPicker(false)
											}
										>
											Done
										</div>
									</div>
								) : (
									<div
										className='flex items-center gap-4 cursor-pointer'
										onClick={() => setShowColorPicker(true)}
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
											placeholder={'Select Color'}
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
												backgroundColor: color,
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
										setDescription(e.target.value)
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
							text={loading ? 'Updating.....' : 'Update Category'}
							disabled={loading}
							onClick={editCategory}
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditC
