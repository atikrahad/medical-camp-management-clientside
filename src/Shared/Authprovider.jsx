import { createContext } from "react";

export const Authinfo = createContext()
const Authprovider = ({children}) => {

    
    const info = {}

    return (
        <Authinfo.Provider value={info}>
            {
                children
            }
        </Authinfo.Provider>
    );
};

export default Authprovider;