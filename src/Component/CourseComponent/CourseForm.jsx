import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './allcourses.css';
import Sidebar from './Sidebar';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CourseForm = () => {
    let [courses, setCourses] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/courses')
            .then((res) => {
                setCourses(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    let handleDelete = (id) => {
        axios.delete(`http://localhost:3000/courses/${id}`)
            .then(() => {
                toast.success("Course Deleted Successfully")
                navigate('/courses')

            })
            .catch((err) => {
                toast.err("Something went wrong")
            })
    }
    let navigate = useNavigate()

    let handleEdit = (id) => {
        navigate(`/editCourse/${id}`)
    }

    return (
        <div className='AllCoursesContainer'>
            <ToastContainer />
            <Sidebar />
            <div className="containers">
                <ul>
                    {courses.map((CourseData) => (
                        <li key={CourseData.id} className='card'>
                            <h2>{CourseData.courseName}</h2>
                            <h3>{CourseData.trainer}    </h3>
                            <p>{CourseData.duration}</p>
                            <p>{CourseData.startDate}</p>
                            <p>₹ {CourseData.price}/-</p>

                            <button className='delete-button' onClick={() => handleDelete(CourseData.id)}>Delete</button>
                            {/* <button className='view-more'>View More</button> */}
                            <button className='edit-button' onClick={() => handleEdit(CourseData.id)}>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CourseForm;
