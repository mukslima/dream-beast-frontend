// src/pages/Detalhes.jsx
import { useParams, useNavigate } from "react-router-dom";
import logob from "../assets/logob.svg";
import maisfoto from "../assets/maisfoto.svg";
import "./Detalhes.css";
import { useState } from "react";

/* mesmo array de dados (ideal: importar de um único lugar) */
const dados = [
  { id: 1, nome: "Fernanda Gomes", tipo: "formatura", curso: "Direito - UFRJ", diaHora: "25/12/2025 às 19:00", localizacao: "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ", mapsUrl: "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ" },
  { id: 2, nome: "Carlos Rangel", tipo: "formatura", curso: "Engenharia - UFF", diaHora: "30/11/2025 às 18:00", localizacao: "Espaço Verde, Av. das Flores, 200 - Centro, Niterói - RJ" },
  { id: 3, nome: "Marcos AND Lima", tipo: "formatura", curso: "Sistemas Para Internet - IFPB", diaHora: "31/10/2025 às 20:00", localizacao: "Salão Nobre, R. Principal, 50 - João Pessoa - PB" },
  { id: 4, nome: "Deivid SP", tipo: "formatura", curso: "Engenharia Computação - USP", diaHora: "15/11/2025 às 18:00", localizacao: "Clube dos Engenheiros, Av. Tecnológica, 300 - São Paulo - SP" },
  { id: 5, nome: "João Silva", tipo: "formatura", curso: "Direito - UFRJ", diaHora: "05/08/2025 às 19:30", localizacao: "Hotel Luxo, R. das Acácias, 400 - Copacabana, RJ" },
  { id: 6, nomeNoivo: "Marcos", nomeNoiva: "Thais", tipo: "casamento", localizacao: "Buffet Real", mapsUrl: "" },
  { id: 7, nomeNoivo: "Carlos", nomeNoiva: "Viviam", tipo: "casamento", localizacao: "Espaço Alfa" },
  { id: 8, nomeNoivo: "Pedro", nomeNoiva: "Mariana", tipo: "casamento", localizacao: "Casa de Festa" },
  { id: 9, nome: "Tiago Alcantra", tipo: "aniversario", dataNascimento: "2020-11-05", localizacao: "Buffet Kids" },
  { id: 10, nome: "Lucas Pereira", tipo: "aniversario", dataNascimento: "1990-10-03", localizacao: "Clube XYZ" },
];

export default function Detalhes() {
  const { tipo, id } = useParams();
  const navigate = useNavigate();
  const item = dados.find((f) => String(f.id) === String(id));
  const [mensagem, setMensagem] = useState("");

  if (!item) {
    return (
      <div className="detalhes-container">
        <header className="detalhes-header">
          <img src={logob} alt="Dream Beast" className="detalhes-logo" />
        </header>
        <main className="detalhes-main">
          <div className="detalhes-alert">Item não encontrado.</div>
        </main>
      </div>
    );
  }

  const displayName = item.tipo === "casamento"
    ? `${item.nomeNoivo} & ${item.nomeNoiva}`
    : item.nome;

  const handleEnviar = () => {
    // no front: só navega para a página de confirmação
    navigate(`/${tipo}/${id}/mensagem-enviada`, { state: { mensagem, nome: displayName }});
  };

  return (
    <div className="detalhes-container">
      <header className="detalhes-header">
        <img src={logob} alt="Dream Beast" className="detalhes-logo" />
      </header>

      <main className="detalhes-main">
        <div className="detalhes-info">
          <h1 className="detalhes-nome">{displayName}</h1>
          {item.tipo === "formatura" && <p className="detalhes-curso">{item.curso}</p>}
          {item.localizacao && <p className="detalhes-localizacao">{item.localizacao}</p>}
          {item.diaHora && <p className="detalhes-dia-hora">{item.diaHora}</p>}

          {item.mapsUrl && (
            <a href={item.mapsUrl} target="_blank" rel="noopener noreferrer" className="detalhes-maps-btn">
              <img src="https://cdn-icons-png.flaticon.com/512/2886/2886372.png" alt="maps" />
              Ver Localização
            </a>
          )}
        </div>

        <div className="detalhes-mensagem">
          <label htmlFor="mensagem">Sua Mensagem:</label>
          <textarea
            id="mensagem"
            rows="5"
            placeholder="Digite sua mensagem aqui"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </div>

        <div className="detalhes-btn-group">
          <button onClick={handleEnviar}>Enviar Mensagem</button>
          <button onClick={() => navigate(`/${tipo}/${id}/ver-mensagens`)}>Ver Mensagens</button>
          <button onClick={() => navigate(`/${tipo}/${id}/compartilhar`)}>Compartilhar</button>
        </div>
      </main>

      <footer className="detalhes-footer">© 2025 Powered by Dream Best</footer>
    </div>
  );
}
