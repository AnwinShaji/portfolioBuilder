import React from 'react'
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../home/HomePage'

const AllRoutes = () => {
  
  return (
    <Router>
      <div>
        <Route path='/' component={<HomePage/>}/>
      </div>
    </Router>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default AllRoutes