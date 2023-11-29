import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosSecure from "../Api/axiosSecure";



const useUser = () => {
    const {user} = useAuth()
    
  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
        const res = await axiosSecure.get(`/user?email=${user.email}`)
        return res.data
    },
  });
  return [users, refetch]
};

export default useUser;
