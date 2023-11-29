import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUser from "../Hooks/useUser";

const Privateorganizer = ({ children }) => {
  const { loading } = useAuth();
  const [users] = useUser()
  const location = useLocation()
  console.log(location);
  if (loading) {
    return <h1>helow</h1>;
  } else if (users.feild === "organizers") {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
Privateorganizer.propTypes = {
  children: PropTypes.node,
};
export default Privateorganizer;
