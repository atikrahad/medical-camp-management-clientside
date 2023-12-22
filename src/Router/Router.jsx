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
import Registered from "../Pages/Dashboard/Registered";
import Error from "../Pages/Error";
import Participent from "../Pages/Dashboard/Participent";
import Privateparticipent from "../Private/Privateparticipent";
import Updatecamp from "../Pages/Dashboard/Updatecamp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    errorElement: <Error></Error>,
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
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/dashboard/manageregistered",
        element: <Privateparticipent><Registered></Registered></Privateparticipent>,
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
        path: "/dashboard/organizer",
        element: <Privateorganizer><Organizer></Organizer></Privateorganizer>
      },
      {
        path: "/dashboard/participent",
        element: <Privateparticipent><Participent></Participent></Privateparticipent>
      },
      {
        path: "/updatecamp",
        element: <Privateorganizer><Updatecamp></Updatecamp></Privateorganizer>
      },
      
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
