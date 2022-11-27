import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import {axiosReqCredentials} from "../../Api/Axios";


//Action(url), Method(http method), enc-type(type of data(multi-part data): text, attachments, video)

function Register() {

    //useNavigate to redirect page
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    async function handleRegistrationRequest(event) {
        event.preventDefault();
        //Extract value from UI(registration form)
        // console.log(event.target.elements.password.value);
        const registrationDTO = {

            firstName: event.target.elements.fName.value,
            lastName: event.target.elements.lName.value,
            email: event.target.elements.email.value,
            password: event.target.elements.password.value,
            confirmPassword: event.target.elements.confirmpassword.value,
            phone: event.target.elements.phone.value,
            roleId: 4

        };
        //validate it

        try {
            setErrorMessage("");
            //Save in DTB
            const registerApi = await axios.post("/auth/register",
                JSON.stringify(registrationDTO));
            console.log(registerApi.data);
            setSuccessMessage(registerApi.data.message);
            setTimeout(() => {
                //calling the useNavigate
                navigate("/Welcome");
            }, 3000);

        } catch (err) {
            console.log(err);
            setSuccessMessage("");
            setErrorMessage(err.response.data.message);
        }
    }

    return (
        <div className="row ">
            <div className="col-md-4"></div>
            <div className="col-md-4 pt-5">
                <form onSubmit={handleRegistrationRequest}>
                    <div>
                        <h3> Registration Form</h3>
                        <br/>
                        <span className="text-danger">{errorMessage}</span>
                        <span className="text-success">{successMessage}</span>
                    </div>
                    <div className="py-3 row">
                        <div className="col-md-2">
                            <label>First Name: </label>
                        </div>
                        <div className="col">
                            <input type="text" name="fName" required className="form-control"
                                   placeholder="No space is allowed"
                                   pattern="[a-zA-Z]+$" title="Name cannot have spaces,special characters"/>
                        </div>
                    </div>

                    <div className="py-3 row">
                        <div className="col-md-2">
                            <label>Last Name: </label>
                        </div>
                        <div className="col">
                            <input type="text" name="lName" required className="form-control"
                                   placeholder="No space is allowed"
                                   pattern="[a-zA-Z]+$" title="Name cannot have spaces,special characters"/>
                        </div>
                    </div>
                    <div className="py-3 row">
                        <div className="col-md-2">
                            <label className="">Email: </label>
                        </div>
                        <div className="col">
                            <input type="email" name="email" required className="form-control"
                                   placeholder="user@email.com"
                                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Email cannot have spaces"/>
                        </div>

                    </div>

                    <div className="py-3 row">
                        <div className="col-md-2">
                            <label>Phone Number: </label>
                        </div>
                        <div className="col">
                            <input type="phone" name="phone" pattern="[\+[1-9]{1}[0-9]{3,14}$" required
                                   className="form-control" placeholder="+234 Area Number"/>
                        </div>
                    </div>

                    <div className="py-3 row">
                        <div className="col-md-2">
                            <label>Password: </label>
                        </div>
                        <div className="col">
                            <input type="password" name="password"
                                   pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$"
                                   required className="form-control" placeholder="cannot be empty"/>
                        </div>
                    </div>

                    <div className="py-3 row">
                        <div className="col-md-2">
                            <label>Confirm Password: </label>
                        </div>
                        <div className="col px-4">
                            <input type="password" name="confirmpassword"
                                   pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$"
                                   required className="form-control"/>
                        </div>
                    </div>
                    <center>
                        <button className="btn btn-primary ">Submit</button>
                    </center>

                    <Link to="/Login">Login page</Link>

                </form>
            </div>

            <div className="col-md-4"></div>

        </div>
    );

}

export default Register;



