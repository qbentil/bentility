import { toast } from 'react-toastify';
import { Category, Post } from './../../types';
export const VALIDATE_POST = (post: Post) => {
    const {title, slug, content, categories} = post;
    if(!title || !slug || !content || !categories.length){
        toast.error("Please fill all the fields")
        return false
    }
    return true
}

export const VALIDATE_CATEGORY = (category: Category) => {
    const {title, description, slug, imageURL, color} = category;
    if (!title || !description || !slug || !imageURL || color == '#000') {
      toast.error('All fields are required')
      return false
    }
    return true
}