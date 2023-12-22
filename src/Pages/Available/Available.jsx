import { useEffect, useState } from "react";
import Availablecard from "../../Components/Availablecard";
import { Pagination, Stack, Typography } from "@mui/material";
import Headline from "../../Shared/Headline";
import useCampcount from "../../Hooks/useCampcount";
import axiosSecure from "../../Api/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Available = () => {
  const [loadall, setLoadall] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [searchi, setSearchi] = useState("");


  const handleChange = (event, value) => {
    setPage(value);
  };
  const [campcount] = useCampcount();
  const pages = Math.ceil(campcount.count / 6);


//   useEffect(() => {
//     fetch("camps.json")
//       .then((res) => res.json())
//       .then((data) => setLoadall(data));
//   }, []);


useEffect(()=>{
    axiosSecure.get(`camps?filter=${filter}&page=${page}`)
    .then(data => setLoadall(data.data))
},[filter, page ])


// const {data: camps = []} = useQuery({
//     queryKey: ['camps'],
//     queryFn: async ()=> {
//         const res = await axiosSecure.get(`/camps?filter=${filter}&page=${page}`)
//         console.log(res.data);
//     }
// })
// console.log([camps]);

  const handleFilter = (e) => {
    const selected = e.target.value;
    setFilter(selected);
    // setSearchi("");
  };
console.log(loadall);
  console.log(page);
  return (
    <div className="max-w-6xl pt-24 pb-16 mx-auto">
        <Headline title={"Available Camp"}></Headline>
      <div className="max-w-7xl mx-auto flex  items-center justify-end">
        <p className="font-bold">Filter by Division</p>
        <select
          onChange={handleFilter}
          value={filter}
          className="border-2 rounded-md"
          name=""
          id=""
        >
          <option value="all">All</option>
          <option value="dhaka">Dhaka</option>
          <option value="rajshahi">Rajsahi</option>
          <option value="khulna">Khulna</option>
          <option value="chottogram">Chottogram</option>
          <option value="rangpur">Rangpur</option>
          <option value="sylhet">Sylhet</option>
          <option value="kumilla">Cumilla</option>
          <option value="moymonshing">Moymonshing</option>
        </select>
      </div>
      <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loadall.map((data, index) => (
          <Availablecard key={index} data={data}></Availablecard>
        ))}
      </div>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={pages} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default Available;
