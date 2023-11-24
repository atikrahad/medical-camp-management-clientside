import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid
      sx={{
        display: "flex",
        minHeight: "90vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{ display: "flex", gap: "10px", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        
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

        <Button type="submit">Login</Button>
      </form>
    </Grid>
  );
};

export default Login;