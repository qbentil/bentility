
import { toast } from "react-toastify";
import Axios from "./axios";

export const GET_SESSION_USER = async (callback:(e:any) => void) => {
  try {
    const { data } = await Axios({
      url: "auth/refresh",
      method: "GET",
    });
    if (data.success) {
      console.log("User persists in session 🚀🎉");
      callback(data.data);
    }else{
      toast.error(data.message || "Session expired. Login!", {
      toastId: "session-toast"
      });
    }

  } catch (e: any) {
    console.log(e);
    toast.error(e?.response?.data?.message || e?.message, {
      toastId: "session-toast"
    });
  }
};
