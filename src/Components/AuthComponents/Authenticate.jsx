import {Outlet} from "react-router-dom";
import useAuthentication from "../../Hooks/useAuthentication";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useRefreshToken from "../../Hooks/useRefreshToken";

//validate if user has access token
function Authenticate(){
    //useNavigate to redirect page
    const navigate = useNavigate();
    //call useRefreshToken hook
    const refresh = useRefreshToken();
    //get access token
    const {auth} = useAuthentication();
    //validate access token
    useEffect(()=>{
        //if we refresh the page, generate a refresh token
       async function verifyRefreshToken(){
           try{
               await refresh();
           }
           catch(e){
               console.log(e);
           }
       }
        //if expired get the accessToken from the refresh token
        if(!auth.accessToken){
            verifyRefreshToken();

            navigate("/Login");
        }
    });


    return(
     <>
         {/*<p>I am in the Authenticate component outlet below</p>*/}
     <Outlet />
     </>
    );

}

export default Authenticate;