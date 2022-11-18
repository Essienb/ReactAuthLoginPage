import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

function Login(){
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    async function handleLoginRequest(event){
        event.preventDefault();

        const loginDTO = {
            email: event.target.elements.email.value,
            password: event.target.elements.password.value,
        };

        try{
            setErrorMessage("");
            const loginToPage = await axios.post("http://localhost:5009/auth/login",
                JSON.stringify(loginDTO),{
                headers:{"Content-Type": "application/json"},
                withCredentials: true});
            console.log(loginToPage.data);
            setSuccessMessage(loginToPage.data.message);

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
                    <Link to="/ForgotPassword">Forgot Password</Link>

                </form>
            </div>
            <div className="col-md-4"> </div>

        </div>
    );


}

export default Login;