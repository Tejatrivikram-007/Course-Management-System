import React from 'react'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Component/NavBarComponent/Navbar'
import Footer from './Component/NavBarComponent/Footer'
import CourseList from './Component/CourseComponent/CourseList'
import CourseForm from './Component/CourseComponent/CourseForm'
import Trainer from './Component/TrainerComponent/Trainer'
import ContactUs from './Component/ContactUsComponent/ContactUs'
import Login from './Component/AuthComponent/Login'
import Register from './Component/AuthComponent/Register'
import CreateCourse from './Component/CourseComponent/CreateCourse'
import EditCourse from './Component/CourseComponent/EditCourse'

const App = () => {
  let router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <CourseList />
          <Footer />
        </>
      )
    },
    {
      path: '/courses',
      element: (
        <>
          <Navbar />
          <CourseForm />
          <Footer />
        </>
      )
    },
    {
      path: '/createCourse',
      element: (
        <>
          <Navbar />
          <CreateCourse />
          <Footer />
        </>
      )
    },
    {
      path: '/editCourse/:id',
      element: (
        <>
          <Navbar />
          <EditCourse />
          <Footer />
        </>
      )
    },

    {
      path: '/trainer',
      element: (
        <>
          <Navbar />
          <Trainer />
          <Footer />
        </>
      )
    }
    ,
    {
      path: '/contact',
      element: (
        <>
          <Navbar />
          <ContactUs />
          <Footer />
        </>
      )
    },
    {
      path: '/login',
      element: (
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
      )
    }
    ,
    {
      path: '/register',
      element: (
        <>
          <Navbar />
          <Register />
          <Footer />
        </>
      )
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App