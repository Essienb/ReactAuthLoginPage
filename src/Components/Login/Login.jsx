import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {axiosReqCredentials} from "../../Api/Axios";
import useAuthentication from "../../Hooks/useAuthentication";


function Login(){
    //useNavigate to redirect page
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    //to set the Auth token
    const {setAuth} = useAuthentication();

    async function handleLoginRequest(event){
        event.preventDefault();

        const loginDTO = {
            email: event.target.elements.email.value,
            password: event.target.elements.password.value,
        };

        try{
            setErrorMessage("");
            const loginToPage = await axiosReqCredentials.post("/auth/login",
                JSON.stringify(loginDTO));
            console.log(loginToPage.data);
            setSuccessMessage(loginToPage.data.message);
            setAuth({accessToken: loginToPage.data.token});
            console.log(loginToPage.data.token);
            setTimeout(()=>{
                //calling the useNavigate
                navigate("/Welcome");
            }, 3000);

        } catch(err){
            console.log(err);
            setSuccessMessage("");
            setErrorMessage(err.response.data.message);
        }
    }
    //fields: email, password, submit btn
    //form, container, centralized, header, footer
    return(
        <div className="row pt-5 mt-5 bg-dark text-white">
            <div className="col-md-4"> </div>
            <div className="col-md-4 pt-5">
                <form onSubmit={handleLoginRequest} className="pt-5" >
                    <div>
                        <h2>Login Form</h2>
                        <span className="text-danger">{errorMessage}</span>
                        <span className="text-success">{successMessage}</span>
                    </div>
                    <div className="py-3">
                        <label>Email: </label>
                        <input type="email" name="email" required className="form-control" placeholder="user@email.com" />
                    </div>

                    <div className="pb-5">
                        <label>Password: </label>
                        <input type="password" name="password" required className="form-control" placeholder="cannot be empty" />
                    </div>

                    <button className="btn btn-primary">Submit</button>
                    <br /> <br />
                    <a href="/Register">Register html style</a>
                    &nbsp; &nbsp;
                    <Link to="/Register">Register react Style</Link>
                    <br />
                    <Link to="/ResetPassword">Change Password</Link>
                    {/*<Link to="/ForgotPassword">Forgot Password</Link>*/}

                </form>
            </div>
            <div className="col-md-4"> </div>

        </div>
    );


}

export default Login;