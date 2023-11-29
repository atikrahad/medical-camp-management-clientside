import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../Api/axiospublic";


const useCampcount = () => {
    const {data: campcount = []} = useQuery({
        queryKey: ['campcount'],
        queryFn: async ()=> {
            const res = await axiosPublic.get('/campcount')
            return res.data
        }
    })
    
    return [campcount]
};

export default useCampcount;