import { Delete, Edit, Update } from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axiosSecure from "../../Api/axiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const Managecamp = () => {
  // const [loadfeautured, setLoadfeautured] = useState([]);
  const {user} = useAuth()

  // useEffect(() => {
  //   axiosSecure
  //     .get(`/usercamp?email=${user?.email}`)

  //     .then((data) => setLoadfeautured(data.data));
  // }, [user]);


  const {refetch, data: camps =[]} = useQuery({
    queryKey: ['usercamp'],
    queryFn: async ()=>{
      const res = await axiosSecure.get(`/usercamp?email=${user.email}`)
      return res.data
    }
  })

  let num = 1;
  camps.map((data) => (data.serial = num++));

  // console.log(loadfeautured);

  const handleUpdate = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/deletecamp/${id}`)
        .then(res => {
          console.log(res.data);
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
        console.log(id);
      }
    });
  }
  
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/deletecamp/${id}`)
        .then(res => {
          console.log(res.data);
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
        console.log(id);
      }
    });
  }

  const columns = [
    {
      name: "Camp Title",
      selector: (row) => row.campName,
      sortable: true,
    },

    {
      name: "Camp Image",
      selector: (row) => (
        <img className="w-16 h-16 rounded-full" src={row.image}></img>
      ),
    },
    {
      name: "Organizer Name",
      selector: (row) => row.organaizerName,
    },
    
    {
      name: "Delete",
      selector: (row) => <Button variant="contained"><NavLink to="/updatecamp"><Edit></Edit></NavLink></Button>,
      
    },
    {
      name: "Delete",
      selector: (row) => <Button variant="contained" onClick={()=>handleDelete(row._id)}><Delete></Delete></Button>,
      
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <DataTable
        className="w-[80%]"
        title="Top learge 10 blogs"
        columns={columns}
        highlightOnHover
        pagination
        theme="dark"
        responsive
        fixedHeader
        fixedHeaderScrollHeight="400px"
        data={camps}
      ></DataTable>
    </div>
  );
};

export default Managecamp;
