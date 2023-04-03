import Axios from "./axios";
import { User } from "../types";
import { removeImage } from './../firebase/index';
import { toast } from "react-toastify";

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
        // console.log(`Admins🚀🎉`, data.data);
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

export const UPDATE_AVATAR = async (token:string, update: {avatar:string}, callback: (data:any)=> void) => {
  try{
    const {data} = await Axios({
      url: '/user',
      method: "PATCH",
      headers: {
          Authorization: `Bearer ${token}`,
      },
      data: update
    })
    if (data.success) {
      console.log(`Avatar updated🚀🎉`, data.data);
      callback(data.data);
    }else{
      await removeImage(update.avatar);
      console.log(`Avatar update failed❌`);
      toast.error(data?.message || "Something went wrong");
    }
  }catch(e:any){
    await removeImage(update.avatar || '');
    console.log(e);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
}

export const UPDATE_SELF = async (token:string, admin: User, callback: (data:User)=> void) => {
  try{
    const {data} = await Axios({
      url: '/user',
      method: "PUT",
      headers: {
          Authorization: `Bearer ${token}`,
      },
      data: admin
    })
    if (data.success) {
      console.log(`Admin updated🚀🎉`, data.data);
      callback(data.data);
    }else{
      console.log(`Admin update failed❌`);
      toast.error(data?.message || "Something went wrong");
    }
  }catch(e:any){
    console.log(e);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
}

export const CHANGE_PASSWORD = async (token:string, password: {password:string, new_password:string}, callback: (data:any)=> void) => {
  try{
    const {data} = await Axios({
      url: '/user/password',
      method: "PATCH",
      headers: {
          Authorization: `Bearer ${token}`,
      },
      data: password
    })
    callback(data);
  }catch(e:any){
    console.log(e);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
}

// UPDATE USER
export const UPDATE_USER = async (token:string, id:string, user: User, callback: (data:any)=> void) => {
  try{
    const {data} = await Axios({
      url: `admin/${id}`,
      method: "PUT",
      headers: {
          Authorization: `Bearer ${token}`,
      },
      data: user
    })
    if (data.success) {
      console.log(`User updated🚀🎉`, data.data);
      callback(data.data);
    }else{
      console.log(`User update failed❌`);
      toast.error(data?.message || "Something went wrong");
    }
  }catch(e:any){
    console.log(e);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
}

// RESET PASSWORD
export const RESET_PASSWORD = async (token:string, id:string, callback: (data:any)=> void) => {
  try {
    const {data} = await Axios({
      url: `admin/resetpassword/${id}`,
      method: "PATCH",
      headers: {
          Authorization: `Bearer ${token}`,
      },
      data: {}
    })
      console.log(data);
      callback(data);
  } catch (e:any) {
    console.log(e);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
}

// CHANGE AVATAR
export const CHANGE_AVATAR = async (token:string, id:string, update: {avatar:string}, callback: (data:any)=> void) => {
  try{
    const {data} = await Axios({
      url: `admin/${id}`,
      method: "PATCH",
      headers: {
          Authorization: `Bearer ${token}`,
      },
      data: update
    })
    if (data.success) {
      console.log(`Avatar updated🚀🎉`, data.data);
      callback(data.data);
    }else{
      await removeImage(update.avatar);
      console.log(`Avatar update failed❌`);
      toast.error(data?.message || "Something went wrong");
    }
  }catch(e:any){
    await removeImage(update.avatar || '');
    console.log(e);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
}