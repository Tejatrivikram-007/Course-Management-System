import React, { useState } from 'react'
import './login.css'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    let handleEmail = (e) => {
        setEmail(e.target.value)
    }
    let handlePassword = (e) => {
        setPassword(e.target.value)
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
            .then((res) => {
                console.log(res.data)
                if (res.data.length > 0) {
                    toast.success('Login Successfull')
                    setEmail('')
                    setPassword('')
                    navigate('/courses')
                }
                else {
                    toast.error('User not registered')
                }
            }).catch(() => {
                toast.error('Invalid Email or Password')
            })
    }
    return (
        <div className="login-container">
            <ToastContainer />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" placeholder='Enter Your Email' value={email} onChange={handleEmail} required />
                <label>Password:</label>
                <input type="password" placeholder='Create  Password' value={password} onChange={handlePassword} required />
                <button className='loginBtn' type='submit'>Login</button>
                <button className='loginBtn' type='reset'>Reset</button>
            </form>
        </div>
    )
}



export default Login