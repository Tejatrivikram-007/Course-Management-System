import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

const EditCourse = () => {
    let { id } = useParams();
    console.log(id)

    let navigate = useNavigate()

    let [editCourse, setEditCourse] = useState({
        courseName: '',
        trainer: '',
        duration: '',
        startDate: '',
        price: "",
    })
    let { courseName, trainer, duration, startDate, price } = editCourse;

    useEffect(() => {
        axios.get(`http://localhost:3000/courses/${id}`)
            .then((res) => {
                setEditCourse(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    let handleEditChange = (e) => {
        let { name, value } = e.target;
        setEditCourse({ ...editCourse, [name]: value })
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/courses/${id}`, editCourse)
            .then((res) => {
                toast.success('Courses Updated Successfully')
                navigate('/courses')
            })
            .catch((err) => {
                toast.err('Error Updating Courses')
            })
    }
    return (
        <div div className="CreateCourseContainer" >
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <h2>Update Course</h2>
                <label>Course Name:</label>
                <select name='courseName' value={courseName} onChange={handleEditChange}>
                    <option>--- Select Course ----</option>
                    <option value="Java Full Stack">Java Full Stack</option>
                    <option value="Python Full Stack">Python Full Stack</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="MEAN Stack">MEAN Stack</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Testing">Testing</option>
                </select>
                <label>Duration:</label>
                <input type="text" name='duration' value={duration} onChange={handleEditChange} placeholder='Enter the duration of course' />
                <label>Trianer:</label>
                <input type="text" name='trainer' value={trainer} onChange={handleEditChange} placeholder='Enter the trainer name' />
                <label>Price:</label>
                <input type="text" name='price' value={price} onChange={handleEditChange} placeholder='Enter the price of course' />
                <label>Start Date</label>
                <input type="date" name='startDate' value={startDate} onChange={handleEditChange} />
                <button type='submit'>Update Course</button>
            </form>
        </div >
    )
}

export default EditCourse