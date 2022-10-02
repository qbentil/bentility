import { toast } from "react-toastify";
import { Post } from "../types";
import Axios from "./axios";

export const CREATE_POST = async (token:string, post: Post, callback: (data:any) => void) => {
    if(!token) return toast.error("Please login to create a post");
    console.log(post); // check if the post is correct
    try{
        const {data} = await Axios({
            method: "POST",
            url: "posts",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: post
        })
        callback(data)
    }catch(err: any){
        console.log(err)
        toast.error(err?.response?.data?.message || ">> Something went wrong")
    }

};

export const EDIT_POST = async (access_token:string, _id:string, post: Post, callback: (data: any) => void) => {
    if(!access_token) return;
    try {
        const { data } = await Axios
        ({
            method: 'PUT',
            url: `posts/${_id}`,
            data: post,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`
            }
        })
        callback(data);
    } catch (error:any) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Check console for error😤")
    }
}