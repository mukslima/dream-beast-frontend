import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ListaFormados.css";
import logob from "../assets/logob.svg";
import avatar from "../assets/avatar.svg";

export default function ListaFormandos() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate(); 

  const dados = [
    { id: 1, nome: "Fernanda Gomes", tipo: "formatura" },
    { id: 2, nome: "Carlos Rangel", tipo: "formatura" },
    { id: 3, nome: "Marcos AND Lima", tipo: "formatura" },
    { id: 4, nome: "Deivid", tipo: "formatura" },
    { id: 5, nome: "João Silva", tipo: "formatura" },
    { id: 6, nomeNoivo: "Marcos", nomeNoiva: "Thais", tipo: "casamento" },
    { id: 7, nomeNoivo: "Carlos", nomeNoiva: "Viviam", tipo: "casamento" },
    { id: 8, nomeNoivo: "Pedro", nomeNoiva: "Mariana", tipo: "casamento" },
    { id: 9, nome: "Tiago Alcantra", tipo: "aniversario" },
    { id: 10, nome: "Lucas Pereira", tipo: "aniversario" },
    // ... mais dados podem ser adicionados aqui
  ];

  const filtrados = dados.filter((f) => {
    const textoBusca = busca.toLowerCase();
    if (f.tipo === "casamento") {
      return (
        f.nomeNoivo.toLowerCase().includes(textoBusca) ||
        f.nomeNoiva.toLowerCase().includes(textoBusca)
      );
    }
    return f.nome.toLowerCase().includes(textoBusca);
  });

  const renderNome = (f) => {
    if (f.tipo === "casamento") {
      return `${f.nomeNoivo} & ${f.nomeNoiva}`;
    }
    return f.nome;
  };

  return (
    <div className="lista-container">
      <header className="lista-header">
        <img src={logob} alt="Dream Beast" className="lista-logo" />
      </header>

      <main className="lista-main">
        <div className="lista-pesquisa">
          <label htmlFor="busca" className="lista-label">
            Busque
          </label>
          <div className="lista-input-group">
            <span className="lista-lupa">&#128269;</span>
            <input
              id="busca"
              type="text"
              placeholder="Buscar nome"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        <ul className="lista-formandos-lista">
          {filtrados.map((f) => (
            <li key={f.id}>
              <Link to={`/${f.tipo}/${f.id}`} className={`lista-formando-card ${f.tipo}`}>
                <img src={avatar} alt="Avatar" className="lista-avatar" />
                <span className="lista-nome">{renderNome(f)}</span>
                <span className={`lista-tipo ${f.tipo}`}>{f.tipo}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <button
        className="lista-btn-voltar"
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>

      <footer className="lista-footer">© 2025 Powered by Dream Best</footer>
    </div>
  );
}
