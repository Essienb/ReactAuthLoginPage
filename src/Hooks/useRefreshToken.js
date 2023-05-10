import axios from "../Api/Axios";
import useAuthentication from "./useAuthentication";


function useRefreshToken(){
     const {setAuth} = useAuthentication();

     async function refresh(){
        // const response = await axios.post("/refreshToken");
        const response = await axios.get("/refreshToken", {
           withCredentials:true
        });
        setAuth((previous) =>{
           return {...previous, accessToken:response.data.accessToken,
           userId:response.data.userId}
        })
        return response;

   }
   return refresh;
}
export default useRefreshToken;