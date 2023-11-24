import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";

const Homelayout = () => {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
    </>
  );
};

export default Homelayout;
