import {Outlet} from "react-router-dom";
import useAuthentication from "../../Hooks/useAuthentication";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

//validate if user has access token
function Authenticate(){
    //useNavigate to redirect page
    const navigate = useNavigate();
    //get access token
    const {auth} = useAuthentication();
    //validate access token
    useEffect(()=>{
        if(!auth.accessToken){
            navigate("/Login");
        }
    });
    //if expired get the refresh token

    return(
     <>
         {/*<p>I am in the Authenticate component outlet below</p>*/}
     <Outlet />
     </>
    );

}

export default Authenticate;