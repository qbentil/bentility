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
      toast.error(e.response.data.message);
    }
  };