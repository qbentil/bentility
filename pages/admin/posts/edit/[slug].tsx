import React from 'react'
import { useRouter } from 'next/router'


const EditPost = () => {
    const router = useRouter()
    const { slug } = router.query
  return (
    <div>EditPost  : {slug} </div>
  )
}

export default EditPost