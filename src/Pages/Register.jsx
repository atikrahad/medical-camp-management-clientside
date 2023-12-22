import { Visibility, VisibilityOff } from "@mui/icons-material";
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
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Authinfo } from "../Shared/Authprovider";
import axiosPublic from "../Api/axiospublic";
import Swal from "sweetalert2";
import useUser from "../Hooks/useUser";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase";

export default function Register() {
  const [age, setAge] = useState("");
  const { createAccountwithEmail } = useContext(Authinfo);
  const [, refetch] = useUser();

  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const image_api = `${import.meta.env.VITE_IMGAPI}`;

  const onSubmit = (b) => {
    const image = b.image[0];
    const imgdata = new FormData();
    imgdata.append("image", image);

    fetch(`${image_api}`, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(b);

        const userData = {
          name: b.name,
          email: b.email,
          password: b.password,
          feild: b.feild,
          profilePic: data.data.display_url,
          number: 'N/A',
          localAddress: 'N/A',
          country: 'N/A',
          state: 'N/A',
          city: 'N/A'
        };
        
        if(data.success){
          createAccountwithEmail(b.email, b.password)
          .then((user) => {
            console.log(user);
            updateProfile(auth.currentUser,{
              displayName:b.feild,
              photoURL: data.data.display_url,
              
            })
            .then(()=>{

              axiosPublic.post('/user', userData)
              .then(data => {

                if(data.data){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully reigistered",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
                refetch()
                navigate('/')
              })
            })
            .catch(error => {
              console.log(error.message);
            })
          })
          .then((error) => {
            console.log(error.message);
          });
        }
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.15)), url(https://media.giphy.com/media/QTfa8EZ9dQAHzF4e06/giphy.gif)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src="" alt="" />
      <form
        style={{ display: "flex", gap: "10px", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          {...register("name")}
          label="Name"
          required
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          {...register("email")}
          type="email"
          label="Email"
          required
          variant="outlined"
        />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            {...register("password")}
            required
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <input type="file" {...register("image")} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Feild</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Feild"
            required
            {...register("feild")}
            onChange={handleChange}
          >
            <MenuItem value={"participants"}>Participants</MenuItem>
            <MenuItem value={"healthcare"}>Healthcare</MenuItem>
            <MenuItem value={"organizers"}>Organizers</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" type="submit">
          Register
        </Button>
        <Grid sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
          <Typography>Already have account.</Typography>
          <Link to="/login">Login</Link>
        </Grid>
      </form>
    </Grid>
  );
}
