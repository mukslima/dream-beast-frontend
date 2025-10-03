import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import LoginCliente from './pages/LoginCliente'
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
        <Route path="/" element={<Home />} />
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/cadastro-formando" element={<CadastroFormando />} />
        <Route path="/lista-formandos" element={<ListaFormandos />} />
        <Route path="/formando/:id" element={<PerfilConfirmar />} /> {/* Rota dinâmica */}
        <Route path="/formando/:id/cadastro-pessoa" element={<CadastroPessoa />} />
        <Route path="/formando/:id/detalhes" element={<Detalhes />} />
        <Route path='/formando/:id/mensagem-enviada' element={< MensagemEnviada />} />
        <Route path='/formando/:id/ver-mensagens' element={< VerMensagens />} />
        <Route path='/formando/:id/compartilhar' element={< Compartilhar />} />
        <Route path="*" element={<h1>Página não encontrada 😅</h1>} />
      </Routes>
    </HashRouter>
  )
}

export default App