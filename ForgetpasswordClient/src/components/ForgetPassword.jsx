import React from "react"
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPassword=()=>{

    const [email, setEmail] = useState()
  
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/forget-password', { email })
            .then(result => {
              
               if(result.data==="Success"){
                navigate('/login')
               }
             
                
            })
            .catch(err => console.log(err))
    }
    return(<div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white р-3 rounded w-25 p-2">
                <h2>Forget-Password</h2>
                <form onSubmit={handleSubmit}>
                    {/* <div className="mb-3">
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
                    </div> */}
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
                    {/* <div className="mb-3">
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
                    </div> */}
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ForgetPassword