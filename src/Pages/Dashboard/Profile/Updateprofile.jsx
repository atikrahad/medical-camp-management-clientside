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


import "react-datepicker/dist/react-datepicker.css";

const Updateprofile = () => {
  const { register, handleSubmit } = useForm();
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
            gap: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            {...register("name")}
            type="text"
            label="Your Name"
            sx={{}}
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            {...register("email")}
            type="text"
            label="Your Email"
            sx={{}}
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            {...register("number")}
            type="text"
            label="Phone Number"
            sx={{}}
            fullWidth
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
            {...register("country")}
            type="number"
            label="Country"
            fullWidth
            sx={{}}
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Division</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...register("state")}
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
            {...register("city")}
            type="text"
            fullWidth
            label="City"
            sx={{}}
            variant="outlined"
          />
        </Grid>
        {/* <Grid
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
            {...register("services")}
            type="text"
            label="Type of services"
            fullWidth
            sx={{}}
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
        </Grid> */}

        <Grid sx={{display:'flex'}}>
          <TextField
            id="outlined-multiline-static"
            label="Local Address"
            multiline
            rows={2}
            {...register("localAddress")}
          />
          <input
            type="file"
            {...register("pic")}
            className="text-white w-full md:ml-4 my-5"
          />
        </Grid>

        <Button variant="contained" type="submit">
          Update Profile
        </Button>
      </form>
    </div>
  );
};

export default Updateprofile;
