import React from "react"
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword=()=>{
    const [password, setPassword] = useState()
   

    const {id, token} = useParams()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/reset-password/${id}/${token}`, { password })
        .then(result => { 
            if(result.data.Status==="success"){
             navigate('/login')
            } 
         })
         .catch(err => console.log(err))
 }
    return(<div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
     <div className="bg-white rounded p-4 col-lg-4 col-md-5 col-sm-5 col-xs-5">
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
         
            <div className="d-flex justify-content-center align-items-center ">
           <button type="submit" className="btn btn-primary w-75 rounded-3">
                Update
            </button>
           </div>
        </form>
    </div>
</div>
)
}
export default ResetPassword;