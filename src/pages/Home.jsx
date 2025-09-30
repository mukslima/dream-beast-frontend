import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logob from '../assets/logob.svg'
import logop from '../assets/logop.svg'

function Home() {
  return (
    <div className="home-container">
      <img src={logop} alt="Dream Beast" className="home-logo-home" />
      <div className="home-content">
        <div className="home-text">Mensagens que viram <br></br>lembranças para sempre.</div>
        <div className="home-subtext">Comece seu login e participe do momento</div>
        <Link to="/login-cliente" className="home-btn">Login</Link>
      </div>
    </div>
  )
}

export default Home
