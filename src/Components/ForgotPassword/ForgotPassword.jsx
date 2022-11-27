import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {axiosReqCredentials} from "../../Api/Axios";


function ForgotPassword(){
    //useNavigate to redirect page
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    async function handleForgotPasswordRequest(event){
        event.preventDefault();

        const forgotPasswordDTO = {
            email: event.target.elements.email.value,
        };

        try{
            setErrorMessage("");
            const forgotPasswordPage = await axiosReqCredentials.post("/forgotpassword",
                JSON.stringify(forgotPasswordDTO));
            console.log(forgotPasswordPage.data);
            setSuccessMessage(forgotPasswordPage.data.message);
            setTimeout(()=>{
                //calling the useNavigate
                navigate("/Login");
            }, 3000);

        } catch(err){
            console.log(err);
            setSuccessMessage("");
            setErrorMessage(err.response.data.error);
        }
    }
    //fields: email, password, submit btn
    //form, container, centralized, header, footer
    return(
        <div className="row pt-5 mt-5 bg-dark text-white">
            <div className="col-md-4"> </div>
            <div className="col-md-4 pt-5">
                <form onSubmit={handleForgotPasswordRequest} className="pt-5" >
                    <div>
                        <h2>Forgot Password Form</h2>
                        <span className="text-danger">{errorMessage}</span>
                        <span className="text-success">{successMessage}</span>
                    </div>
                    <div className="py-3">
                        <label>Email: </label>
                        <input type="email" name="email" required className="form-control" placeholder="user@email.com" />
                    </div>

                    <button className="btn btn-primary">Submit</button>
                    <br /> <br />
                    {/*<a href="/Register">Register html style</a>*/}
                    &nbsp; &nbsp;
                    {/*<Link to="/Register">Register react Style</Link>*/}
                    {/*<br />*/}
                    {/*<Link to="/ResetPassword">Change Password</Link>*/}
                    {/*<br />*/}
                    {/*<Link to="/Login">Login</Link>*/}

                </form>
            </div>
            <div className="col-md-4"> </div>

        </div>
    );

}

export default ForgotPassword;