import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layouts/Homelayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Available from "../Pages/Available/Available";
import Dashboard from "../Layouts/Dashboard";

import Addcamp from "../Pages/Dashboard/Addcamp";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Updateprofile from "../Pages/Dashboard/Profile/Updateprofile";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path:'details',
        element: <Details></Details>
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "available",
        element: <Available></Available>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/updateprofile",
        element:<Updateprofile></Updateprofile>
      },
      {
        path: "/dashboard/addcamp",
        element: <Addcamp></Addcamp>
      }
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
export default router;
