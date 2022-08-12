import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CandidateLogin.scss"
const CandidateLogin = () => {
  const history=useNavigate();
  const openRegistration=()=>{
    history("/registration")
  }
  const openCandidate=()=>{
    history('/candidate/home')
  }
  return (
    <div className='candidate-login-container'>
      <div className='candiate-login-title'>
        LOGIN
      </div>
      <div className='candidate-login-details'>
        <div className='candidate-user-title-container'>
          <dv className="candidate-login-label">
            Username
          </dv>
          <input type="text" className='candidate-text'/>
        </div>
        <div className='candidate-user-title-container'>
          <dv className="candidate-login-label">
            Password
          </dv>
          <input type="password" className='candidate-text'/>
        </div>
      </div>
      <hr className='divider-line'/>
      <div className='login-button'>
      <button className='btn btn-primary' onClick={openCandidate}>Login</button>
      </div>
      <div className='candidate-registration' onClick={openRegistration}>
        Create one!
      </div>
    </div>
  )
}

export default CandidateLogin