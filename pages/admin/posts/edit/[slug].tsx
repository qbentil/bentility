import React from 'react'
import { useRouter } from 'next/router'
import Admin from '../..'
import PostEdit from '../../../../admin/posts/editpost'

const EditPost = () => {
    const router = useRouter()
    const { slug } = router.query
  return (
    <Admin page={<PostEdit />} />
  )
}

export default EditPost