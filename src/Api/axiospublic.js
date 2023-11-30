import axios from "axios"
const axiosPublic = axios.create({
    baseURL:import.meta.env.VITE_API,
    withCredentials: true
})
export default axiosPublic;