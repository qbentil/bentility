import { toast } from "react-toastify";
import Axios from "./axios";

export const LOGOUT:any = async (dispatch:any) => {
    try {
      const { data } = await Axios({
        url: "auth/",
        method: "GET",
      });
      if (data.success) {
        toast.success(data.message);
        dispatch({
          type: "SET_USER",
          user: null,
        });
      } else {
        toast.error(data.message);
      }
    } catch (e: any) {
      console.log(e);
      toast.error(e?.response?.data?.message);
    }
  };

  export const LOGIN = async (credentials:any, callback: (data:any) => void) => {
    try {
      const { data } = await Axios({
        url: "auth",
        method: "POST",
        data: credentials,
      })
      
      if (data.success) {
        callback(data.data);
      }else{
        toast.error(data?.message || "Something went wrong");
      }

    } catch (e: any) {
      console.log(e)
        toast.error(e?.response?.data?.message)
    }
  }

// fetch data from the server
export const FETCH_DATA = async (route:any, callback: (data:any)=> void) => {
  try {
    const { data } = await Axios({
      url: route,
      method: "GET",
    });
    if (data.success) {
      console.log(`${route}🚀🎉`, data.data);
      callback(data.data);
    } else {
      console.log(`Fetching ${route} failed❌`);
      toast.error(data?.message || "Something went wrong");
    }
  } catch (e: any) {
    console.log(e);
    toast.error(e?.response?.data?.message);
  }
}