// src/pages/PerfilConfirmar.jsx
import { useParams, useNavigate } from "react-router-dom";
import logob from "../assets/logob.svg";
import avatar from "../assets/avatar.svg";
import "./PerfilConfirmar.css";

/* mesma fonte de dados que ListaFormados (ideal: extrair para um arquivo compartilhado) */
const dados = [
  { id: 1, nome: "Fernanda Gomes", tipo: "formatura", curso: "Direito - UFRJ" },
  { id: 2, nome: "Carlos Rangel", tipo: "formatura", curso: "Engenharia - UFF" },
  { id: 3, nome: "Marcos AND Lima", tipo: "formatura", curso: "Sistemas Para Internet - IFPB" },
  { id: 4, nome: "Deivid", tipo: "formatura", curso: "Engenharia Computação - USP" },
  { id: 5, nome: "João Silva", tipo: "formatura", curso: "Medicina - UFRJ" },
  { id: 6, nomeNoivo: "Marcos", nomeNoiva: "Thais", tipo: "casamento", localizacao: "Buffet Azul" },
  { id: 7, nomeNoivo: "Carlos", nomeNoiva: "Viviam", tipo: "casamento", localizacao: "Espaço Verde" },
  { id: 8, nomeNoivo: "Pedro", nomeNoiva: "Mariana", tipo: "casamento", localizacao: "Casa de Festa" },
  { id: 9, nome: "Tiago Alcantra", tipo: "aniversario", dataNascimento: "2020-11-05" },
  { id: 10, nome: "Lucas Pereira", tipo: "aniversario", dataNascimento: "1990-10-03" },
];

export default function PerfilConfirmar() {
  const { tipo, id } = useParams();
  const navigate = useNavigate();

  const item = dados.find((f) => String(f.id) === String(id));

  if (!item) {
    return (
      <div className="perfil-container">
        <header className="lista-header">
          <img src={logob} alt="Dream Beast" className="lista-logo" />
        </header>
        <main className="perfil-main">
          <p>Item não encontrado.</p>
          <button className="perfil-btn perfil-voltar" onClick={() => navigate(-1)}>Voltar</button>
        </main>
      </div>
    );
  }

  const displayName = item.tipo === "casamento"
    ? `${item.nomeNoivo} & ${item.nomeNoiva}`
    : item.nome || item.nomeNoivo || item.nomeNoiva || "—";

  return (
    <div className="perfil-container">
      <header className="lista-header">
        <img src={logob} alt="Dream Beast" className="lista-logo" />
      </header>

      <main className="perfil-main">
        <div className="perfil-info">
          <img src={avatar} alt="Avatar" className="perfil-avatar" />
          <div>
            <div className="perfil-nome">{displayName}</div>
            {item.tipo === "formatura" && <div className="perfil-curso">{item.curso}</div>}
            {item.tipo === "casamento" && item.localizacao && <div className="perfil-local">{item.localizacao}</div>}
            {item.tipo === "aniversario" && item.dataNascimento && (
              <div className="perfil-data">Nascimento: {item.dataNascimento}</div>
            )}
          </div>
        </div>

        <button
          className="perfil-btn perfil-confirmar"
          onClick={() => navigate(`/${tipo}/${id}/cadastro-pessoa`)}
        >
          Confirmar
        </button>

        <button className="perfil-btn perfil-voltar" onClick={() => navigate(-1)}>
          Cancelar
        </button>
      </main>

      <footer className="lista-footer">© 2025 Powered by Dream Best</footer>
    </div>
  );
}
