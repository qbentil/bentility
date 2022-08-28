// import Cookies from 'react-cookie';

import Axios from "./axios";

export const GET_SESSION_USER = async () => {
  let user = null
  try {
    const { data } = await Axios({
      url: "auth/refresh",
      method: "GET",
    });
    if (data.success) {
      user = data.user;
    }    
  } catch (e: any) {
    console.log(e);
  }

  return user;
};
