import React from "react"
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPassword=()=>{

    const [email, setEmail] = useState()
    const [mail, setMail] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setMail(true)
        axios.post('http://localhost:3001/forget-password', { email })
            .then(result => {
              
               if(result.data==="Success"){
                navigate('/login')
               }   
            })
            .catch(err => console.log(err))
    }
    return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
           <div className="bg-white rounded p-4 col-lg-4 col-md-5 col-sm-5 col-xs-5">
                <h2>Forget-Password</h2>
                <form onSubmit={handleSubmit}>
                {
            mail && <h6 style={{color:"green"}}> Password Reset Link sent Successfully in Your mail</h6>
          }
                    <div className="mb-3">
                        <label htm1For="email">
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
             
                    <div className="d-flex justify-content-center align-items-center ">
                  <button type="submit" className="btn btn-primary p-2 w-75 rounded-3">
                        Send
                    </button>
                  </div>
                </form>
            </div>
        </div>
    )
}
export default ForgetPassword