import React from 'react'
import { useRouter } from 'next/router'

const ViewPost = () => {
    const router = useRouter()
    const { slug } = router.query
  return (
      <div>
          ViewPost : {slug}
          
    </div>
  )
}

export default ViewPost