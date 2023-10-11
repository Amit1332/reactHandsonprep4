import React from 'react'
import Home from './Home'
import {ValidateForm} from '../FormValidation/ValidateForm'
import Contact from './Contact'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const RouteCom = () => {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/student' element={<ValidateForm/>}/>
            <Route path='/contact' element={<Contact/>}/>


       </Routes>
       <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default RouteCom