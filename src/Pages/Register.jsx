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

export default function Register() {
  const [age, setAge] = useState("");
  const { createAccountwithEmail } = useContext(Authinfo);
  const [,refetch] = useUser()

  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const onSubmit = (data) => {
    
      createAccountwithEmail(data.email, data.password)
        .then((user) => {
          console.log(user);
          axiosPublic.post('/user', data)
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

          })
          navigate('/')
        })
        .then((error) => {
          console.log(error);
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
