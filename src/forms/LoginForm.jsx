import React, { useState } from 'react'
import '../styles/login.css'
import Logo from '../assets/images/logo.png'
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth/authSlice'


const LoginForm = () => {

  const LogoImage = {
     width: '80px', 
     borderRadius: '50%',
      marginBottom: '10px'
  }

   const [inputs, setInputs] = useState({
    email:'',
    password:''
  })
  const {status,user} = useSelector(state=>state.users)
    console.log(user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInputs(inputs=>({...inputs,[name]:value}))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(login(inputs))
    if(status==='succeeded'){
      navigate('/')
    }
    
  } 

  return (
  <>
  <div className="container">

  
  <div class="auth-container">
    
    <div class="brand-header">
        <img src={Logo} style={LogoImage}/>
        <p>Welcome back! Sign in to your account</p>
    </div>

    
    <form id="signinForm">
        <div class="mb-3">
            <label class="form-label">Email Address</label>
            <input type="email" id='email' name='email' class="form-control" placeholder="Enter your email" value={inputs.email} onChange={handleChange} required />
        </div>

        <div class="mb-3">
            <label class="form-label">Password</label>
            <div style={{position: 'relative'}}>
                <input type="password" class="form-control" id="password" name='password' placeholder="Enter your password" value={inputs.password}  onChange={handleChange} required />
            </div>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="rememberMe" />
                <label class="form-check-label" htmlFor="rememberMe">
                    Remember me
                </label>
            </div>
            <a href="#" class="auth-link">Forgot Password?</a>
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit} value='Login'>Sign In</button>

        <div class="divider">
            <span>OR</span>
        </div>

        <div class="row g-3">
            <div class="col-6">
                <button type="button" class="btn-social">
                    <FaGoogle />
                    Google
                </button>
            </div>
            <div class="col-6">
                <button type="button" class="btn-social">
                    <FaFacebook />
                    Facebook
                </button>
            </div>
        </div>

        <div class="signup-text">
            Don't have an account? <a href="/register" class="auth-link">Sign Up</a>
        </div>
    </form>
</div>

</div>
 </>   
  )
}

export default LoginForm
