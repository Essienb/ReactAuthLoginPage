//To authenticate/manage the context created for the entire App

import {useContext} from "react";
import AuthContext from "../Context/AuthProvider";


function useAuthentication(){
    return useContext(AuthContext);
}

export default useAuthentication;