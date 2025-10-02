import { useParams, useNavigate } from "react-router-dom";
import logob from "../assets/logob.svg";
import "./MensagemEnviada.css";

export default function MensagemEnviada() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Exemplo de lista de formandos
  const formandos = [
    { id: "1", nome: "Fernanda Gomes", curso: "Direito - UFRJ" },
    { id: "2", nome: "Carlos Rangel", curso: "Engenharia - UFF" },
    { id: "3", nome: "Marcos AND Lima", curso: "Sistemas Para Internet - IFPB" },
    { id: "4", nome: "Deivid SP", curso: "Engenharia Computação - USP" },
    { id: "5", nome: "Nome e Sobrenome", curso: "Direito - UFRJ" },
  ];

  const formando = formandos.find((f) => f.id === id);

  if (!formando) {
    return (
      <div className="mensagem-enviada-container">
        <header className="mensagem-enviada-header">
          <img src={logob} alt="Dream Beast" className="mensagem-enviada-logo" />
        </header>
        <main className="mensagem-enviada-main">
          <div className="mensagem-enviada-alert">Formando não encontrado.</div>
        </main>
      </div>
    );
  }

  return (
    <div className="mensagem-enviada-container">
      <header className="mensagem-enviada-header">
        <img src={logob} alt="Dream Beast" className="mensagem-enviada-logo" />
      </header>

      <main className="mensagem-enviada-main">
        <div className="mensagem-enviada-info">
          <div className="mensagem-enviada-check">✅</div>
          <h1 className="mensagem-enviada-titulo">Mensagem enviada!</h1>
          <h2 className="mensagem-enviada-nome">{formando.nome}</h2>
          <p className="mensagem-enviada-curso">{formando.curso}</p>
          <div className="detalhes-mensagem">
          <label for="mensagem">Sua Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="10" cols="50" placeholder="Digite sua mensagem aqui"></textarea>
        </div>
        </div>

        <button
          className="mensagem-enviada-btn-voltar"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>

      <footer className="mensagem-enviada-footer">
        © 2025 Powered by Dream Best
      </footer>

      </main>
    </div>
  );
}
