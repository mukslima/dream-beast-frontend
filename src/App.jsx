import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginCliente from './pages/LoginCliente'
import LoginAdmin from './pages/LoginAdmin'
import CadastroFormando from './pages/CadastroFormando'
import ListaFormandos from './pages/ListaFormados'
import PerfilConfirmar from './pages/PerfilConfirmar' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/cadastro-formando" element={<CadastroFormando />} />
        <Route path="/lista-formandos" element={<ListaFormandos />} />
        <Route path="/formando/:id" element={<PerfilConfirmar />} /> {/* Rota dinâmica */}
        <Route path="*" element={<h1>Página não encontrada 😅</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App