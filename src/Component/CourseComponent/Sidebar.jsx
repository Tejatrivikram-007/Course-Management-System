import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    return (
        <ul className='SideBarContainer'>
            <li>
                <Link to='/courses'><button>All Courses</button></Link>
            </li>
            <li>
                <Link to='/createCourse'><button>Create Course</button></Link>
            </li>
        </ul>
    )
}

export default Sidebar