import React from 'react'
import { useRouter } from 'next/router'
import Admin from '../..'
import CategoryView from '../../../../admin/categories/viewcategory'

const ViewCategory = () => {
    const router = useRouter()
    const { slug } = router.query
  return (
    <Admin page={<CategoryView />} />
  )
}

export default ViewCategory