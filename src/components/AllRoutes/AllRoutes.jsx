import React from 'react'
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderHorizhondal from '../header/HeaderHorizondal';
import AboutPage from '../home/AboutPage';
import CandidateRegistration from '../home/CandidateRegistration';
import CandidateLogin from '../home/CandidateLogin';
import HomePage from '../home/HomePage'
import CandidateHome from '../candidate/CandidateHome';

const AllRoutes = () => {
  
  return (
<Router>
    <div>
    <HeaderHorizhondal/>
      <Routes>
        
        {/* <Route path='/header' element={<HeaderHorizhondal/>}/> */}
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/login' element={<CandidateLogin />}/>
      <Route path='/registration' element={<CandidateRegistration />}/>
      <Route path='/candidate/home' element={<CandidateHome/>}/>
      </Routes>
    </div>
  </Router>
  )
}
export default AllRoutes