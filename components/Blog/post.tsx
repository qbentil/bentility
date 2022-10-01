import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { BiArchiveIn, BiArrowBack } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import { useStateValue } from '../../context/StateProvider';
import { convertDate } from '../../util/functions';
import { Categories } from '../Admin/posts';
import SectionTitle from '../SectionTitle';
import { Seperator } from '../Seperator';
import UtilButton from '../UtilButton';
import { Writer } from './item';
import RelatedPosts from './crelated';

const BlogPost = () => {
    const router = useRouter()
	const path = router.asPath;
	const paths = path.split("/");
    const slug = paths[paths.length - 1];
    const [{ posts, user }, dispatch] = useStateValue()
	const post = posts.filter((post: any) =>
		post.slug.toLowerCase().includes(slug.toLowerCase())
    )[0]
  return (
      <div className='bg-transparent py-10'>
          <div className='w-full h-full bg-white rounded p-4 poppins overflow-y-scroll scrollbar-hidden '>
			<div className='flex items-center justify-start gap-x-5 px-4'>
				{/* back button */}
				<UtilButton
					icon={<BiArrowBack />}
					color='blue-600'
					title='Go back'
					onClick={() => router.back()}
				/>
				
				
			</div>
			<div className='flex items-center p-4 justify-between'>
				<div className='flex flex-col gap-3'>
					<h1 className='text-2xl font-bold capitalize text-primary'>
						{post?.title || 'N/A'}
					</h1>
					<div className='flex gap-4'>
						<Writer
							id={post?.writer || 'N/A'}
							className={
								'text-[0.7rem] text-gray-500 flex gap-2 items-center'
							}
						/>
						<div className='flex items-center justify-center gap-x-2'>
							<MdDateRange className='text-[0.7rem] text-primary' />
							<p className='text-[0.7rem] text-[#4B4B4B] flex items-center gap-x-1'>
								{convertDate(post?.createdAt || '', 'long')}
							</p>
						</div>
					</div>
				</div>
				<div className='flex gap-2'>
					<Categories ids={post?.categories} />
				</div>
			</div>
			<div
				className='py-5 px-4 w-full text-gray-700'
				contentEditable={false}
			>
				{post?.content || 'N/A'}
			</div>
		</div>
		<Seperator width='2' />
		<SectionTitle title='Related Posts' tp = "start" />
		<RelatedPosts />
    </div>
  )
}

export default BlogPost