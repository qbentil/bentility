import axios from "axios"

const CustomAxios =  axios.create({
    baseURL: process.env.API_BASE_URL || "http://localhost:8800/api",
    withCredentials: true,
})

export default CustomAxios;