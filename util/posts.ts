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