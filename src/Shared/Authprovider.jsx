import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import axiosPublic from "../Api/axiospublic";

export const Authinfo = createContext();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccountwithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (curentUser) => {
      const email = curentUser?.email || user?.email;
      setLoading(false);
      setUser(curentUser);

      if (curentUser) {
        axiosPublic
          .post("/jwt", { email }, { withCredentials: true })
          .then((res) => console.log(res.data));
      }
      else{
        axiosPublic
          .post("/logout", { email }, { withCredentials: true })
          .then((res) => console.log(res.data));
      }
    });
    return unSubscribe;
  }, [user]);

  const info = {
    createAccountwithEmail,
    user,
    logOut,
    loginEmail,
    loading,
  };

  return <Authinfo.Provider value={info}>{children}</Authinfo.Provider>;
};
Authprovider.propTypes = {
  children: PropTypes.node,
};

export default Authprovider;
