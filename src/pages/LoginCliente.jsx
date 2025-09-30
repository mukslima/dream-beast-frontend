import React from 'react'
import './LoginCliente.css'
import logo from '../assets/logo.svg'

function LoginCliente() {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Dream Beast" className="login-logo" />

        <h1 className="login-title">Login do Cliente</h1>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>

        <p className="login-link">
          Não tem conta? <a href="/cadastro-formando">Cadastre-se</a>
        </p>
      </div>
    </div>
  )
}

export default LoginCliente
