import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)

            })
            .then(() => { navigate('/login') })
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
          <div className="bg-white rounded p-4 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                    <button type="submit" className="btn btn-primary  w-50 rounded-4">
                        Register
                    </button>
                    </div>
                </form>
                <p>Already Have an Account</p>
           
              <div className="d-flex justify-content-center align-items-center ">
              <Link to="/login" className="btn btn-default border w-50 bg-light rounded-2 border-none text-decoration-none">
                    Login
                </Link>
              </div>
             
            </div>
        </div>
    );
}

export default Signup;


