// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ForgetPassword from './components/ForgetPassword'
import ResetPassword from './components/ResetPassword'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
