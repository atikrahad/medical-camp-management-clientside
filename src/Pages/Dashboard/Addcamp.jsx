import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useForm } from "react-hook-form";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

import axiosPublic from "../../Api/axiospublic";
import axiosSecure from "../../Api/axiosSecure";
import useUser from "../../Hooks/useUser";
import Swal from "sweetalert2";

const Addcamp = () => {
  const { register, handleSubmit, reset } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [users] = useUser();

  const image_api =
    `${import.meta.env.VITE_IMGAPI}`;

  const onSubmit = async (b) => {
    console.log(b);
    // console.log(data.campImage[0]);
    const image = b.campImage[0];
    const imgdata = new FormData();
    imgdata.append("image", image);

    fetch(`${image_api}`,{
      method: "POST",
      body: imgdata
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(b)
      
      if (data.success) {
      const campItem = {
        campName: b.campName,
        vanue: b.vanue,
        fees: parseFloat(b.fees),
        division: b.division,
        date: startDate,
        vanueLocation: b.vanueLocation,
        audianceType: b.audianceType,
        healthcareWorker: b.healthcareWorker,
        comprehensiveDescription: b.comprehensiveDescription,
        image: data.data.display_url,
        organaizerName: users.name,
        organaizerEmail: users.email,
      };
      console.log(campItem);
      axiosSecure.post("/camp", campItem).then((res) => {
        console.log(res);
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
    })

    // const res = await axiosPublic.post(image_api, imgdata);
//  console.log(res);
    // if (res.data.success) {
    //   const campItem = {
    //     campName: data.campName,
    //     vanue: data.vanue,
    //     fees: parseFloat(data.fees),
    //     division: data.division,
    //     date: startDate,
    //     vanueLocation: data.vanueLocation,
    //     audianceType: data.audianceType,
    //     healthcareWorker: data.healthcareWorker,
    //     comprehensiveDescription: data.comprehensiveDescription,
    //     image: res.data.data.display_url,
    //     organaizerName: users.name,
    //     organaizerEmail: users.email,
    //   };
    //   console.log(campItem);
    //   axiosSecure.post("/camp", campItem).then((res) => {
    //     console.log(res);
    //     reset()
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Your work has been saved",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   });
    // }

    
  };
  return (
    <div className="bg-[#37474f] p-5 rounded-md">
      <form
        style={{ display: "flex", gap: "30px", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            {...register("campName")}
            type="text"
            inputProps={{maxLength: 25}}
            label="Camp name"
            sx={{}}
            fullWidth
            variant="outlined"
          />

          <input
            type="file"
            {...register("campImage")}
            className="text-white w-full md:ml-4 my-5"
          />

          <DatePicker
            className="bg-transparent border border-slate-600 text-slate-400 py-3"
            selected={startDate}
            {...register("date")}
            withPortal
            onChange={(date) => setStartDate(date)}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <TextField
            id="outlined-basic"
            {...register("fees")}
            type="number"
            label="Fees"
            fullWidth
            sx={{}}
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Division</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...register("division")}
              //   value={age}
              label="Division"
              //   onChange={handleChange}
            >
              <MenuItem value={"dhaka"}>Dhaka</MenuItem>
              <MenuItem value={"rajshahi"}>Rajshahi</MenuItem>
              <MenuItem value={"rangpur"}>Rangpur</MenuItem>
              <MenuItem value={"kumilla"}>Kumilla</MenuItem>
              <MenuItem value={"sylhet"}>Sylhet</MenuItem>
              <MenuItem value={"chottogram"}>Chottogram</MenuItem>
              <MenuItem value={"khulna"}>Khulna</MenuItem>
              <MenuItem value={"moymonshing"}>Moymonshing</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic"
            {...register("vanueLocation")}
            type="text"
            fullWidth
            label="Vanue location"
            sx={{}}
            inputProps={{maxLength: 20}}
            variant="outlined"
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <TextField
            id="outlined-basic"
            {...register("vanue")}
            type="text"
            label="Type of vanue"
            fullWidth
            sx={{}}
            inputProps={{maxLength: 25}}
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Target Audiance
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...register("audianceType")}
              //   value={age}
              label="Target Audiance"
              //   onChange={handleChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"children"}>Children</MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"famele"}>Famele</MenuItem>
              <MenuItem value={"old"}>Old</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic"
            {...register("healthcareWorker")}
            type="number"
            fullWidth
            label="Healthcare Worker"
            sx={{}}
            variant="outlined"
          />
        </Grid>

        <TextField
          id="outlined-multiline-static"
          label="Comprehensive Description"
          multiline
          rows={4}
          {...register("comprehensiveDescription")}
        />

        <Button variant="contained" type="submit">
          Add camp
        </Button>
      </form>
    </div>
  );
};

export default Addcamp;
