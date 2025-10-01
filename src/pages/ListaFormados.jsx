import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ListaFormados.css";
import logob from "../assets/logob.svg";
import avatar from "../assets/avatar.svg";

export default function ListaFormandos() {
  const [busca, setBusca] = useState("");

  const formandos = [
    { id: 1, nome: "Fernanda Gomes" },
    { id: 2, nome: "Nome e Sobrenome" },
    { id: 3, nome: "Nome e Sobrenome" },
    { id: 4, nome: "Nome e Sobrenome" },
    { id: 5, nome: "Nome e Sobrenome" },
    { id: 6, nome: "Nome e Sobrenome" },
    { id: 7, nome: "Nome e Sobrenome" },
    { id: 8, nome: "Nome e Sobrenome" },
    { id: 9, nome: "Nome e Sobrenome" },
    { id: 10, nome: "Nome e Sobrenome" },
  ];

  const filtrados = formandos.filter(f =>
    f.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="lista-container">
      <header className="lista-header">
        <img src={logob} alt="Dream Beast" className="lista-logo" />
      </header>
      <main className="lista-main">
        <div className="lista-pesquisa">
          <label htmlFor="busca" className="lista-label">Busque o formado</label>
          <div className="lista-input-group">
            <span className="lista-lupa">&#128269;</span>
            <input
              id="busca"
              type="text"
              placeholder="Buscar o formado"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>
        <ul className="lista-formandos-lista">
          {filtrados.map((f, idx) => (
            <li key={f.id || idx}>
              <Link to={`/formando/${f.id}`} className="lista-formando-card">
                <img src={avatar} alt="Avatar" className="lista-avatar" />
                <span className="lista-nome">{f.nome}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className="lista-footer">
        © 2025 Powered by Dream Best
      </footer>
    </div>
  );
}
