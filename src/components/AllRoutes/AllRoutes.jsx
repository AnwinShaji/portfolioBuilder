import React from 'react'
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderHorizhondal from '../header/HeaderHorizondal';
import AboutPage from '../home/AboutPage';
import HomePage from '../home/HomePage'

const AllRoutes = () => {
  
  return (
<Router>
    <div>
      <Routes path='/header' element={<HeaderHorizhondal/>}>
        {/* <Route path='/header' element={<HeaderHorizhondal/>}/> */}
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </div>
  </Router>
  )
}
export default AllRoutes