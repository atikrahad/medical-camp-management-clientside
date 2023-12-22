import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUser from "../Hooks/useUser";

const Privateparticipent = ({ children }) => {
  const { loading, user } = useAuth();
  
  const location = useLocation()
  console.log(location);
  if (loading) {
    return ;
  } else if (user?.displayName === "participants") {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
Privateparticipent.propTypes = {
  children: PropTypes.node,
};
export default Privateparticipent;
