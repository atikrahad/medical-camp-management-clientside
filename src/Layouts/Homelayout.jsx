import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from "../Shared/Footer";


const theme = createTheme({
  palette:{
    primary:{
      main:"#ACC8E5",
    },
    secondary:{
      main:"#000000"
    },
  },
  
})

const Homelayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default Homelayout;
