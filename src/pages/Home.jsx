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
        <div className="home-btns">
          <Link to="/lista-formandos" className="home-btn login-btn">Realizadores</Link>
          <Link to="/login-admin" className="home-btn admin-btn">Admin</Link>
        </div>
    </div>
  </div>  
  )
}

export default Home
