import Axios from "./axios";
import axios from "axios";
import octokit from "./octokit";
import { toast } from "react-toastify";

export const LOGOUT: any = async (dispatch: any) => {
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
      window.location.replace("/");
    } else {
      toast.error(data.message);
    }
  } catch (e: any) {
    console.log(e);
    toast.error(e?.response?.data?.message);
  }
};

export const LOGIN = async (
  credentials: { email: string; secret: string },
  setLoading: (e: boolean) => void,
  callback: (data: any) => void
) => {
  try {
    const { data } = await Axios({
      url: "auth",
      method: "POST",
      data: credentials,
    });
    callback(data);
  } catch (e: any) {
    setLoading(false);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};

// fetch data from the server
export const FETCH_DATA = async (route: any, callback: (data: any) => void) => {
  try {
    const { data } = await Axios({
      url: route,
      method: "GET",
    });
    if (data.success) {
      // console.log(`${route}🚀🎉`, data.data);
      callback(data.data);
    } else {
      console.log(`Fetching ${route} failed❌`);
      // toast.error(data?.message || "Something went wrong");
    }
  } catch (e: any) {
    console.log(e);
    // toast.error(e?.response?.data?.message);
  }
};

// fetch data from octokit
export const FETCH_OCTOKIT = async (
  callback: (data: any) => void
) => {
  try {
    const res1 = await axios.get("https://api.github.com/repos/qbentil/bentility/stargazers?per_page=100", {
      headers: { 'Accept': 'application/vnd.github.v3.star+json' }
    });
    const res2 = await axios.get("https://api.github.com/repos/qbentil/bentility/forks?per_page=100", {
      headers: { 'Accept': 'application/vnd.github.v3.star+json' }
    });
    callback({ data: { stars: res1.data.length, forks: res2.data.length } });
  } catch (e: any) {
    console.log(e);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};

// send email to the server
export const SEND_EMAIL = async (
  formData: any,
  callback: (data: any) => void
) => {
  try {
    const { data } = await Axios({
      url: "contact",
      method: "POST",
      data: formData,
    });
    if (data.success) {
      callback(data);
    } else {
      toast.error(data?.message || "Something went wrong");
    }
  } catch (e: any) {
    console.log(e);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};

//  send token
export const SEND_TOKEN = async (email: string, callback: any) => {
  const request = {
    email,
    domain: process.env.NEXT_PUBLIC_DOMAIN,
  }

  try {
    const { data } = await Axios({
      url: "auth/forgot-password",
      method: "POST",
      data: request,
    });
    callback(data);
  } catch (e: any) {
    console.log(e);
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};
// send email to the server
export const VERIFY_TOKEN = async (
  token: string,
  setStatus: (e: string) => void,
  callback: (data: any) => void
) => {
  try {
    const { data } = await Axios({
      url: "auth/verify-token",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    callback(data);
  } catch (e: any) {
    console.log(e);
    setStatus("failed");
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};
