import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";

export const Authinfo = createContext();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createAccountwithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmail = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = ()=> {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      
        setLoading(false)
        setUser(user);
      
    });
    return unSubscribe;
  }, []);

  const info = { 
    createAccountwithEmail,
    user, 
    logOut,
    loginEmail
};

  return <Authinfo.Provider value={info}>{children}</Authinfo.Provider>;
};

export default Authprovider;
