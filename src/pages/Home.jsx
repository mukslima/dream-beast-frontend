import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../assets/logo.svg'

function Home() {
  return (
    <div className="home-container">
        <img src={logo} alt="Dream Best" className="home-logo" />
        <div className="home-content">
        <div className="home-text">Bem-vindo ao Dream Beast!</div>
        <div className="home-subtext">Aqui você realiza seus sonhos com tecnologia de ponta.</div>
    <Link to="/login-cliente" className="home-btn">Login</Link>
  </div>
</div>
  )
}

export default Home
