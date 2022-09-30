import React from 'react'
import { useRouter } from 'next/router'
import Admin from '../..'
import CategoryEdit from '../../../../admin/categories/editcategory'

const EditCategory = () => {
    const router = useRouter()
    const { slug } = router.query
  return (
    <Admin page={<CategoryEdit />} />
  )
}

export default EditCategory