import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "70vh",
        alignItems: "center",
        justifyContent: "space-evenly",
        py: { xs: "100px", md: "150px" },
        gap: "20px",
      }}
    >
      <Grid>
        <Grid sx={{
            display: 'flex',
            alignItems:"center",
            justifyContent:"space-between"

        }}>
          <Typography fontWeight={"700"}>Email: </Typography>
          <Typography>atikrahad1@gamil.com</Typography>
        </Grid>
        <Grid sx={{
            display: 'flex',
            alignItems:"center",
            justifyContent:"space-between"
        }}>
        <Typography fontWeight={"700"}>WhatsApp:</Typography>
        <Typography>+8801615406742</Typography>
        </Grid>
      </Grid>
      <Grid>
        <form
          style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          onSubmit={handleContact}
        >
          <TextField
            id="outlined-basic"
            required
            label="Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            required
            type="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={3}
          />

          {/* <FormControl variant="outlined">
            
          </FormControl> */}

          <Button
            color="primary"
            sx={{ color: "black", fontWeight: "700" }}
            variant="contained"
            type="submit"
          >
            Send
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default Contact;
