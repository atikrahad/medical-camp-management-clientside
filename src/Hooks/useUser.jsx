import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../Api/axiospublic";
import useAuth from "./useAuth";



const useUser = () => {
    const {user} = useAuth()
    
  const { data: users = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
        const res = await axiosPublic.get(`/user?email=${user.email}`)
        return res.data
    },
  });
  return {users}
};

export default useUser;
