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
import Managecamp from "../Pages/Dashboard/Managecamp";
import Organizer from "../Pages/Dashboard/Organizer";
import PrivateRoute from "../Private/PrivateRoute";
import Privateorganizer from "../Private/Privateorganizer";
import axiosSecure from "../Api/axiosSecure";

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
        path:'campdetails/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> axiosSecure(`/campdetails/${params.id}`) 
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
        element: <PrivateRoute><Available></Available></PrivateRoute>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/dashboard/updateprofile",
        element: <PrivateRoute><Updateprofile></Updateprofile></PrivateRoute>
      },
      {
        path: "/dashboard/addcamp",
        element: <Privateorganizer><Addcamp></Addcamp></Privateorganizer>
      },
      {
        path: '/dashboard/managecamp',
        element: <Privateorganizer><Managecamp></Managecamp></Privateorganizer>
      },
      {
        index: true,
        element: <Privateorganizer><Organizer></Organizer></Privateorganizer>
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
