import { removeImage } from './../firebase/index';
import { toast } from "react-toastify";
import { User } from "../types";
import Axios from "./axios";

export const FECTCH_ADMINS = async (token:string, callback: (data:any)=> void) => {
    try {
      const { data } = await Axios({
        url: '/admin',
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        }
      });
      if (data.success) {
        console.log(`Admins🚀🎉`, data.data);
        callback(data.data);
      } else {
        console.log(`Fetching admins failed❌`);
        toast.error(data?.message || "Something went wrong");
      }
    } catch (e: any) {
      console.log(e);
      toast.error(e?.response?.data?.message);
    }
  }

export const ADD_ADMIN = async (token:string, admin: User, callback: (data:any)=> void) => {
    try {
      const { data } = await Axios({
        url: '/admin',
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: admin
      });
      if (data.success) {
        console.log(`Admin added🚀🎉`, data.data);
        callback(data.data);
      } else {
        console.log(`Adding admin failed❌`);
        await removeImage(admin.avatar || '');
        toast.error(data?.message || "Something went wrong");
      }
    } catch (e: any) {
      console.log(e);
      await removeImage(admin.avatar || '');
      toast.error(e?.response?.data?.message);
    }
  }