//Storage of props for accessing tokens generated during login
//Here we set the global access to React Hooks and UserContext

import {createContext, useState} from "react";


const AuthContext = createContext({});

export const AuthProvider = function({children}){
    const [auth, setAuth] = useState({});
    return(
       <AuthContext.Provider value={{auth, setAuth}}>
           {children}
       </AuthContext.Provider>
    );
}
export default AuthContext;