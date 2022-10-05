import React from 'react'
import Admin from "..";
import Archives from "../../../admin/archives";
import ArchivedPosts from '../../../components/Admin/archives/posts';

const AchivedPosts = () => {
  return (
    <Admin page={<ArchivedPosts />} />
  )
}

export default AchivedPosts