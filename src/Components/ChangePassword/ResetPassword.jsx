import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";


function ResetPassword(){
    //used to get any parameter in the url
    const params = useParams();
    //useNavigate to redirect page
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    async function handlePasswordResetRequest(event) {
        event.preventDefault();
        //Extract value from UI(registration form)
        // console.log(event.target.elements.password.value);
        const resetPasswordDTO = {
            token: event.target.elements.token.value,
            newPassword: event.target.elements.password.value,
            confirmNewPassword: event.target.elements.confirmpassword.value,

        };
        try {
            setErrorMessage("");
            const updatePasswordInDtb = await axios.post("http://localhost:5009/resetpassword",
                JSON.stringify(resetPasswordDTO),
                {
                    headers: {"Content-Type": "application/json"},
                    withCredentials: true
                }
            );
            console.log(updatePasswordInDtb.data);
            setSuccessMessage(updatePasswordInDtb.data.message);
            //to set a timer to allow error message display
            setTimeout(()=>{
                //calling the useNavigate
                navigate("/Login");
            }, 3000);


        } catch (err) {
            console.log(err);
            setSuccessMessage("");
            setErrorMessage(err.response.data.message);
        }
    }

    return(
        <div className= "row bg-dark text-white">
            <div className="col-md-4"></div>
            <div className="col-md-4 pt-5">
                <form onSubmit={handlePasswordResetRequest}>
                    <div>
                        <h3> Change Password Form</h3>
                        <span className="text-danger">{errorMessage}</span>
                        <span className="text-success">{successMessage}</span>
                    </div>
                    {/*We use {params?} to call whatever is used as parameter in the url*/}
                    <input type="hidden" name="token" value={ params?.token} required className="form-control" />

                    <div className="py-3 row">
                        <div className="col-md-2">
                            <label>New Password</label>
                        </div>
                        <div className="col px-4">
                            <input type="password" name="password" required className="form-control" />
                        </div>
                    </div>

                    <div className="py-3 row">
                        <div className="col-md-2">
                            <label>Confirm Password</label>
                        </div>
                        <div className="col px-4">
                            <input type="password" name="confirmpassword" required className="form-control" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-danger fw-bold position-absolute bottom-25 start-50">Submit</button>
                    <br /> <br />
                    <Link to="/Login">Login page</Link>
                </form>
            </div>

            <div className="col-md-4"></div>

        </div>

    );
}

export default ResetPassword;