import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Homelayout from "../Layouts/Homelayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout></Homelayout>,
      children:[
        {
            index: true,
            element: <Home></Home>
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