import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logob from "../assets/logob.svg";
import avatar from "../assets/avatar.svg";
import "./VerMensagens.css";

export default function VerMensagens() {
  const [busca, setBusca] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [pessoaSelecionada, setPessoaSelecionada] = useState(null);

  const pessoas = [
    { id: 1, nome: "Fernanda Lima" },
    { id: 2, nome: "Thais" },
    { id: 3, nome: "Antonio" },
    { id: 4, nome: "Júnior" },
    { id: 5, nome: "Greg" },
    { id: 6, nome: "Dário" },
    { id: 7, nome: "Flavio" },
    { id: 8, nome: "Maria Socorro" },
    { id: 9, nome: "Gustavo" },
    { id: 10, nome: "Toinho" },
  ];

  const filtrados = pessoas.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const abrirModal = (pessoa) => {
    setPessoaSelecionada(pessoa);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setPessoaSelecionada(null);
    setModalAberto(false);
  };

  const navigate = useNavigate();

  return (
    <div className="ver-mensagens-container">
      <header className="ver-mensagens-header">
        <img src={logob} alt="Dream Beast" className="ver-mensagens-logo" />
      </header>

      <main className="ver-mensagens-main">
        <div className="ver-mensagens-pesquisa">
          <label htmlFor="busca" className="ver-mensagens-label">Busque o formado</label>
          <div className="ver-mensagens-input-group">
            <span className="ver-mensagens-lupa">&#128269;</span>
            <input
              id="busca"
              type="text"
              placeholder="Buscar o formado"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        <ul className="ver-mensagens-lista">
          {filtrados.map((p, idx) => (
            <li key={p.id || idx}>
              <button
                className="ver-mensagens-card"
                onClick={() => abrirModal(p)}
              >
                <img src={avatar} alt="Avatar" className="ver-mensagens-avatar" />
                <span className="ver-mensagens-nome">{p.nome}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="ver-mensagens-voltar">
          <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </main>

      <footer className="ver-mensagens-footer">
        © 2025 Powered by Dream Beast
      </footer>

      {/* MODAL */}
      {modalAberto && (
        <div className="ver-mensagens-modal-overlay" onClick={fecharModal}>
          <div className="ver-mensagens-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ver-mensagens-modal-fechar" onClick={fecharModal}>
              ✖
            </button>
            <div className="modal-header">
                <img src={avatar} alt="Avatar" className="ver-mensagens-modal-avatar" />
                <h2 className="ver-mensagens-modal-titulo">
                    {pessoaSelecionada?.nome}
                </h2>
            </div>
            <p className="ver-mensagens-modal-conteudo">
                Desejo uma felicidades de sua formatura, aproveite bastante a sua dia na formatura, diverte bastante!<br/><br/>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
