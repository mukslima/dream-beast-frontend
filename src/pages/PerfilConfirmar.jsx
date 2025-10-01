import { useParams, useNavigate } from "react-router-dom";
import logob from "../assets/logob.svg";
import avatar from "../assets/avatar.svg";
import "./PerfilConfirmar.css";

// Exemplo de lista de formandos (substitua por fetch se é necessario)
const formandos = [
  { id: "1", nome: "Fernanda Gomes", curso: "Direito - UFRJ" },
  { id: "2", nome: "Carlos Rangel", curso: "Engenharia - UFF" },
  { id: "3", nome: "Marcos AND Lima", curso: "Sistemas Para Internet - IFPB" },
  { id: "4", nome: "Deivid SP", curso: "Engenharia Computação - USP" },
  { id: "5", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ" },
  { id: "6", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ" },
  { id: "7", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ" },
  { id: "8", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ" },
  { id: "9", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ" },
  { id: "10", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ" },
  // ...adicione mais se quiser
];

export default function PerfilConfirmar() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca pelo id
  const formando = formandos.find((f) => f.id === id);

  if (!formando) {
    return (
      <div className="perfil-container">
        <header className="lista-header">
          <img src={logob} alt="Dream Beast" className="lista-logo" />
        </header>
        <main className="perfil-main">
          <p>Formando não encontrado.</p>
          <button
            className="perfil-btn perfil-voltar"
            onClick={() => navigate(-1)}
          >
            Voltar
          </button>
        </main>
        <footer className="lista-footer">© 2025 Powered by Dream Best</footer>
      </div>
    );
  }

  return (
    <div className="perfil-container">
      <header className="lista-header">
        <img src={logob} alt="Dream Beast" className="lista-logo" />
      </header>
      <main className="perfil-main">
        <img src={avatar} alt="Avatar" className="perfil-avatar" />
        <div className="perfil-nome">{formando.nome}</div>
        <div className="perfil-curso">{formando.curso}</div>
        <button className="perfil-btn perfil-confirmar">Confirmar</button>
        <button className="perfil-btn perfil-cancelar">Cancelar</button>
        <button
          className="perfil-btn perfil-voltar"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </main>
      <footer className="lista-footer">
        © 2025 Powered by Dream Best
      </footer>
    </div>
  );
}