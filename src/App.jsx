import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginAdmin from './pages/LoginAdmin'
import CadastroFormando from './pages/CadastroFormando'
import ListaFormandos from './pages/ListaFormados'
import PerfilConfirmar from './pages/PerfilConfirmar'
import CadastroPessoa from './pages/CadastroPessoa'
import Compartilhar from './pages/Compartilhar'
import Detalhes from './pages/Detalhes'
import VerMensagens from './pages/VerMensagens'
import MensagemEnviada from './pages/MensagemEnviada'

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Rotas principais */}
        <Route path="/" element={<Home />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/cadastro-formando" element={<CadastroFormando />} />
        <Route path="/lista-formandos" element={<ListaFormandos />} />

        {/* Rotas dinâmicas para diferentes tipos */}
        <Route path="/:tipo/:id" element={<PerfilConfirmar />} />
        <Route path="/:tipo/:id/cadastro-pessoa" element={<CadastroPessoa />} />
        <Route path="/:tipo/:id/detalhes" element={<Detalhes />} />
        <Route path="/:tipo/:id/mensagem-enviada" element={<MensagemEnviada />} />
        <Route path="/:tipo/:id/ver-mensagens" element={<VerMensagens />} />
        <Route path="/:tipo/:id/compartilhar" element={<Compartilhar />} />

        {/* 404 */}
        <Route path="*" element={<h1>Página não encontrada 😅</h1>} />
      </Routes>
    </HashRouter>
  )
}

export default App
