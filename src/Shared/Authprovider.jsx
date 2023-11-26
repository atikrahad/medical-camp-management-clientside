import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";

export const Authinfo = createContext();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createAccountwithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      return unSubscribe;
    });
  }, []);

  const info = { 
    createAccountwithEmail,
    user, 
};

  return <Authinfo.Provider value={info}>{children}</Authinfo.Provider>;
};

export default Authprovider;
