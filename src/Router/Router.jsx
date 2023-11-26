import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Homelayout from "../Layouts/Homelayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Available from "../Pages/Available/Available";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout></Homelayout>,
      children:[
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path:"available",
          element: <Available></Available>
        }
      ]
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
  ]);
export default router;