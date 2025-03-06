import React, { useState } from 'react'
import './login.css'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    let handleName = (e) => {
        setName(e.target.value)
    }

    let handleEmail = (e) => {
        setEmail(e.target.value)
    }

    let handlePassword = (e) => {
        setPassword(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        let userData = {
            name, email, password
        }
        axios.post(`http://localhost:3000/users`, userData)
            .then((reset) => {
                console.log(reset.data)
                toast.success("User Register Successfull")
                setName('')
                setEmail('')
                setPassword('')
                navigate('/login')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="login-container">
            <ToastContainer />
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" placeholder='Enter Your Name' value={name} onChange={handleName} required />
                <label>Email:</label>
                <input type="email" placeholder='Enter Your Email' value={email} onChange={handleEmail} required />
                <label>Password:</label>
                <input type="password" placeholder='Create  Password' value={password} onChange={handlePassword} required />
                <button className='loginBtn' type='submit'>Register</button>
                <button className='loginBtn' type='reset'>Reset</button>
            </form>
        </div>
    )
}

export default Register