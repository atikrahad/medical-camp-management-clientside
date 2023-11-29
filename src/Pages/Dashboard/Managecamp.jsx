import { Delete, Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Managecamp = () => {
  const [loadfeautured, setLoadfeautured] = useState([]);

  useEffect(() => {
    axios
      .get("https://blogsite-server.vercel.app/feautured")

      .then((data) => setLoadfeautured(data.data));
  }, []);

  let num = 1;
  loadfeautured.map((data) => (data.serial = num++));

  console.log(loadfeautured);

  
  const handleDelete = id => {

  }

  const columns = [
    {
      name: "Camp Title",
      selector: (row) => row.title,
      sortable: true,
    },

    {
      name: "Camp Image",
      selector: (row) => (
        <img className="w-16 rounded-full" src={row.pic}></img>
      ),
    },
    {
      name: "Organizer Name",
      selector: (row) => row.name,
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
        data={loadfeautured}
      ></DataTable>
    </div>
  );
};

export default Managecamp;
