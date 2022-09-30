import React from 'react'
import { useRouter } from 'next/router'
import Admin from '../..'
import PostView from '../../../../admin/posts/viewpost'

const ViewPost = () => {
    const router = useRouter()
    const { slug } = router.query
  return (
      <Admin page={<PostView />} />
  )
}

export default ViewPost