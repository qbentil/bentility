import { toast } from "react-toastify";
import { removeImage } from "../firebase";
import { Category } from "../types";
import Axios from "./axios";

export const ADD_CATEGORY = async (access_token:string, category: Category, callback: (data: any) => void) => {
    if(!access_token) return;
    try {
        const { data } = await Axios
        ({
            method: 'POST',
            url: 'categories',
            data: category,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`
            }
        })
        callback(data);
    } catch (error:any) {
        await removeImage(category.imageURL || '');
        console.log(error);
        toast.error(error?.response?.data?.message || "Check console for error😤")
    }
}