import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navBarContainer">
            <ul>
                <li><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" height={40} width={40} alt="" /></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/trainer">Trainers</Link></li>
                <li><Link to="/login"><button className='Btn'>Login</button></Link></li>
                <li><Link to="/register"><button className='Btn'>Register</button></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar