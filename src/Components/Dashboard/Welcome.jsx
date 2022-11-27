import useAuthentication from "../../Hooks/useAuthentication";
import {Link} from "react-router-dom";

function Welcome(){
    const {auth} = useAuthentication();
    console.log("auth value from AuthProvider: " + JSON.stringify(auth));
    return(
        <div className="container p-5 border bg-light">
            <div className="row text-center">
                    <h1>Welcome Bro!</h1>
                    <p>This page is work in progress...</p>
            </div>
            <br/><br/>
            <Link to="/About"> About Us</Link>
        </div>
    );
}

export default Welcome