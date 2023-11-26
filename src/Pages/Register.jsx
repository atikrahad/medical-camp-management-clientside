import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: {xs:"column", md:"row"},
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.15)), url(https://media.giphy.com/media/QTfa8EZ9dQAHzF4e06/giphy.gif)`,
        backgroundSize:'cover',
        backgroundRepeat: "no-repeat"
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
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          {...register("email")}
          type="email"
          label="Email"
          variant="outlined"
        />
        

        <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            {...register("password")}
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

        <Button variant="contained" type="submit">Register</Button>
        <Grid sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
          <Typography>Already have account.</Typography>
          <Link to="/login">Login</Link>
        </Grid>
      </form>
    </Grid>
  );
}
