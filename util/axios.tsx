import axios from "axios"

const Axios =  axios.create({
    baseURL: process.env.API_BASE_URL || "http://localhost:8800/",
    withCredentials: true,
})

export default Axios;