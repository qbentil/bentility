import axios from "axios"

const Axios =  axios.create({
    baseURL: "http://localhost:8800",
    withCredentials: true,
})

export default Axios;