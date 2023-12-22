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
// import axiosSecure from "../../../Api/axiosSecure";
import useUser from "../../../Hooks/useUser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Updateprofile = () => {
  const { register, handleSubmit } = useForm();
  const [users] = useUser();

  const image_api = `${import.meta.env.VITE_IMGAPI}`;
const navigate = useNavigate()
  const onSubmit = (b) => {
    console.log(b);

    const image = b.pic[0];
    const imgdata = new FormData();
    imgdata.append("image", image);

    fetch(`${image_api}`, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log();

        const updateProfile = {
          ProfilePic: data.data.display_url,
          name: b.name,
          number: b.number,
          localAddress: b.localAddress,
          country: b.country,
          state: b.state,
          city: b.city,
        };
        console.log(updateProfile);
        if (data.success) {
          // axiosSecure.put(`/user/${users._id}`, updateProfile).then((res) => {
          //   console.log(res.data);
          // });

          fetch(`${import.meta.env.VITE_API}/user/${users._id}`, {
            method: "PUT",
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Profile update successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/dashboard')
          })
        }
      });
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
            defaultValue={users.name}
            fullWidth
            required
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            {...register("number")}
            type="number"
            label="Phone Number"
            sx={{}}
            required
            fullWidth
            variant="outlined"
          />

          <input
            type="file"
            {...register("pic")}
            required
            className="text-white w-full md:ml-4 my-5"
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
            type="text"
            label="Country"
            fullWidth
            sx={{}}
            required
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Division</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...register("state")}
              //   value={age}
              required
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
            required
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

        <Grid sx={{ display: "flex" }}>
          <TextField
            id="outlined-multiline-static"
            label="Local Address"
            multiline
            required
            rows={2}
            {...register("localAddress")}
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
