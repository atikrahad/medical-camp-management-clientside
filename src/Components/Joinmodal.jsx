import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import useUser from '../Hooks/useUser';
import axiosPublic from '../Api/axiospublic';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Joinmodal({data}) {
  const [open, setOpen] = React.useState(false);
  const [users] = useUser()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    console.log(d);

    const registeredData = {
      participentName: d.name,
      participentNumber: d.number,
      participentAge: d.age,
      participentGender: d.gender,
      participentAddress: d.address,
      campId: data._id,
      participentEmail: users.email,
      premium: false,
    }

   axiosPublic.post("/participent", registeredData)
   .then(res => {
    if(res.data){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfuly joined",
        showConfirmButton: false,
        timer: 1500
      });
      setOpen(false)
    }
   })

  };

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Join camp</Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form
        style={{ display: "flex", gap: "20px", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap:'20px'
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
            {...register("number")}
            type="number"
            label="Phone NUmber"
            sx={{}}
            fullWidth
            variant="outlined"
          />
          
          
        </Grid>
        
        <Grid
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: '20px'
          }}
        >
          <TextField
            id="outlined-basic"
            {...register("age")}
            type="number"
            label="Age"
            fullWidth
            sx={{}}
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Genger</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...register("gender")}
            //   value={age}
              label="Gender"
            //   onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"famele"}>Famele</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
              
              
            </Select>
          </FormControl>

          
        </Grid>

        <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={2}
          {...register("address")}
        />

        <Button variant="contained" type="submit">
          Join
        </Button>
        
      </form>
        </Box>
      </Modal>
    </div>
  );
}