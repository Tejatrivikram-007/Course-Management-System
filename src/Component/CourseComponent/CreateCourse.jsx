import React, { useState } from 'react'
import './createCourse.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateCourse = () => {
    let [courses, setCourses] = useState([])
    let [courseName, setCourseName] = useState('')
    let [duration, setDuration] = useState('')
    let [trainer, setTariner] = useState('')
    let [price, setPrice] = useState('')
    let [startDate, setStartDate] = useState('')

    let navigate = useNavigate();

    let handleCourseName = (e) => { setCourseName(e.target.value) }
    let handleDuration = (e) => { setDuration(e.target.value) }
    let handleTrainer = (e) => { setTariner(e.target.value) }
    let handlePrice = (e) => { setPrice(e.target.value) }
    let handleStartDate = (e) => { setStartDate(e.target.value) }

    let handleSubmit = (e) => {
        e.preventDefault();
        let courseDetails = {
            courseName, duration, trainer, price, startDate
        }
        axios.post('http://localhost:3000/courses', courseDetails)
            .then((res) => {
                console.log(res.data)
                setCourses([...courses, res.data])
                toast.success('Course Created Successfully')
                navigate('/courses')
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div className="CreateCourseContainer">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <h2>Create Course</h2>
                <label>Course Name:</label>
                <select name='course' value={courseName} onChange={handleCourseName}>
                    <option>--- Select Course ----</option>
                    <option value="Java Full Stack">Java Full Stack</option>
                    <option value="Python Full Stack">Python Full Stack</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="MEAN Stack">MEAN Stack</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Testing">Testing</option>
                </select>
                <label>Duration:</label>
                <input type="text" value={duration} onChange={handleDuration} placeholder='Enter the duration of course' />
                <label>Trianer:</label>
                <input type="text" value={trainer} onChange={handleTrainer} placeholder='Enter the trainer name' />
                <label>Price:</label>
                <input type="text" value={price} onChange={handlePrice} placeholder='Enter the price of course' />
                <label>Start Date</label>
                <input type="date" value={startDate} onChange={handleStartDate} />
                <button type='submit'>Create Course</button>
            </form>
        </div>
    )
}

export default CreateCourse