import React from 'react'
import './LoginCliente.css'
import logob from '../assets/logob.svg'

function LoginCliente() {
  return (
    <div className="login-container">
      <header className="header">
        <img src={logob} alt="Dream Beast" className="logo-header" />
      </header>
      
      <div className="login-card">
        <h1 className="login-title">BEM VINDO <br /> SONHADOR</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome completo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              placeholder="(xx) xxxxx-xxxx"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              id="lembre-me"
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label htmlFor="lembre-me" style={{ marginBottom: 0, fontSize: '1rem', color: '#444', cursor: 'pointer' }}>
              Lembre-me
            </label>
          </div>
          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
      </div>
      
      <footer className="footer">
        <span>© 2025 Dream Beast. Todos os direitos reservados.</span>
      </footer>
    </div>
  )
}

export default LoginCliente
