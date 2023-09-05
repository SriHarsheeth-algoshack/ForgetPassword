const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const app = express()

app.use(express.json()) 
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email, password: password })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.post('/forget-password', (req, res) => {
    const{email}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{if(!user){
        return res.send({status:"User not found"})
    }
    const token=jwt.sign({id:user._id},`jwt_secret_key`,{expiresIn:"1d"})
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sriharsheethj@gmail.com',
          pass: 'cagj vdiq dyes wgdo'
        }
      });
      
      var mailOptions = {
        from: 'sriharsheethj@gmail.com',
        to:email,  
        subject: 'Reset your password',
        text: `http://localhost:3000/reset-password/${user._id}/${token}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          return res.send({status: 'Success'});
        }
      });

})
})
  
app.post('/reset-password/:id/:token',(req, res) => {
    const{id,token}=req.params;
    const{password}=req.body; 
    jwt.verify(token,"jwt_secret_key",(err,decoded)=>{
        if(err) {
            return res.send({status: 'Error with token'})
        }else{
            
            EmployeeModel.findByIdAndUpdate({_id:id},{password})
                .then(u=>{ res.send({Status:"success"})})
                .catch(err=>{res.send({status:err})})
        }
    })
})
    
app.listen(3001, () => {
    console.log('server is running')
})