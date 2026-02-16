import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import '../styles/register.css'
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { register } from '../auth/authSlice'
import { useNavigate } from 'react-router-dom'


const RegisterForm = () => {

  const LogoImage = {
     width: '80px', 
     borderRadius: '50%',
      marginBottom: '10px'
  }

  const [inputs, setInputs] = useState({
        name:'',
        email:'',
        password:''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs(inputs=>({...inputs,[name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(register(inputs))
         navigate('/login')
    }

  return (
    <>
        
      <div className="auth-container">
    <div className="brand-header">
        <img src={Logo} style={LogoImage}/>
        <p>Create your account to get started</p>
    </div>

    <form method='post' id="signupForm">
        <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" id='name' name='name' className="form-control" placeholder="Enter your full name" value={inputs.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" id='email' name='email' placeholder="Enter your email" value={inputs.email} onChange={handleChange} required /> 
        </div>

        <div className="mb-3">
            <label className="form-label">Password</label>
            <div style={{position: 'relative'}}>
                <input type="password" className="form-control" id="password" name='password' placeholder="Create a password" value={inputs.password}  onChange={handleChange} required />
            </div>
        </div>

        <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="agreeTerms" required />
            <label className="form-check-label" htmlFor="agreeTerms">
                I agree to the <a href="#" className="auth-link">Terms and Conditions</a>
            </label>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit} value='Register'>Create Account</button>

        <div className="divider">
            <span>OR</span>
        </div>

        <div className="row g-3">
            <div className="col-6">
                <button type="button" className="btn-social">
                    <FaGoogle />
                    Google
                </button>
            </div>
            <div className="col-6">
                <button type="button" className="btn-social">
                    <FaFacebook />
                    Facebook
                </button>
            </div>
        </div>

        <div className="signin-text">
            Already have an account? <a href="/login" className="auth-link">Sign In</a>
        </div>
    </form>
</div>
    </>
  )
}

export default RegisterForm
