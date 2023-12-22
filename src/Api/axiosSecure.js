import axios from "axios"
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";


const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_API,
    withCredentials: true
    
})


// axiosSecure.interceptors.response.use(res => {
//     return res;
// }, async error=>{
//     console.log(error.response.status);
//     if(error.response.status === 401 || error.response.status ===403){
//         return signOut(auth)
//     }
// })
export default axiosSecure;