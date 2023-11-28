import { useContext } from "react";
import { Authinfo } from "../Shared/Authprovider";


const useAuth = () => {
    const auth = useContext(Authinfo)
    return auth
};

export default useAuth;