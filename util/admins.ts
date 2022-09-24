import { toast } from "react-toastify";
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