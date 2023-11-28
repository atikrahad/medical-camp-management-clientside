import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Addcamp = () => {
  const { register, handleSubmit } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit = (data) => {
    console.log(data);
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
            gap:'20px'
          }}
        >
          <TextField
            id="outlined-basic"
            {...register("campName")}
            type="text"
            label="Camp name"
            sx={{}}
            fullWidth
            variant="outlined"
          />
          
          <input type="file" {...register("campimg")} className="text-white w-full md:ml-4 my-5" />
          

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
            gap: '30px'
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
              <MenuItem value={"sylet"}>Sylet</MenuItem>
              <MenuItem value={"chottogram"}>Chottogram</MenuItem>
              <MenuItem value={"khulna"}>Khulna</MenuItem>
              <MenuItem value={"borisal"}>Borisal</MenuItem>
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
            variant="outlined"
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: '30px'
          }}
        >
          <TextField
            id="outlined-basic"
            {...register("services")}
            type="text"
            label="Type of services"
            fullWidth
            sx={{}}
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Target Audiance</InputLabel>
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
