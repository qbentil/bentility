// import Cookies from 'react-cookie';

import Axios from "./axios";

export const GET_SESSION_USER = async () => {
  try {
    const { data } = await Axios({
      url: "auth/refresh",
      method: "GET",
    });
    if (data.success) {
      return data.user;
    } else {
      return null;
    }
  } catch (e: any) {
    return null;
  }
};
