import React from "react"
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword=()=>{
    const [password, setPassword] = useState()
    const {id, token} = useParams()
  console.log("reset password")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/reset-password/${id}/${token}`, { password })
            .then(result => {
              
                navigate('/login')
              
             
                
            })
            .catch(err => console.log(err))
    }
    return(<div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white р-3 rounded w-25 p-2">
        <h2>Reset-Password</h2>
        <form onSubmit={handleSubmit}>
          
           
            <div className="mb-3">
                <label htm1For="email">
                    <strong> New Password</strong>
                </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
         
            <button type="submit" className="btn btn-success w-100 rounded-0">
                Update
            </button>
        </form>
    </div>
</div>
)
}
export default ResetPassword;