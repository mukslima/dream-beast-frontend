import { useParams, useNavigate } from "react-router-dom";
import logob from "../assets/logob.svg";
import "./Detalhes.css";
import { useState } from "react";

const dados = [
  { id: 1, nome: "Fernanda Gomes", tipo: "formatura", curso: "Direito - UFRJ", diaHora: "25/12/2025 às 19:00", localizacao: "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ", mapsUrl: "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ" },
  { id: 2, nome: "Carlos Rangel", tipo: "formatura", curso: "Engenharia - UFF", diaHora: "30/11/2025 às 18:00", localizacao: "Espaço Verde, Av. das Flores, 200 - Centro, Niterói - RJ", mapsUrl: "https://www.google.com/maps?q=Espaço+Verde,+Av.+das+Flores,+200+-+Centro,+Niterói+-+RJ" },
  { id: 3, nome: "Marcos AND Lima", tipo: "formatura", curso: "Sistemas Para Internet - IFPB", diaHora: "31/10/2025 às 20:00", localizacao: "Av. Pres. Afonso Pena, 1413 - Bessa, João Pessoa - PB", mapsUrl: "https://www.google.com/maps?q=Av.+Pres.+Afonso+Pena,+1413+-+Bessa,+João+Pessoa+-+PB" },
  { id: 4, nome: "Deivid SP", tipo: "formatura", curso: "Engenharia Computação - USP", diaHora: "15/11/2025 às 18:00", localizacao: "Clube dos Engenheiros, Av. Tecnológica, 300 - São Paulo - SP", mapsUrl: "https://www.google.com/maps?q=Clube+dos+Engenheiros,+Av.+Tecnológica,+300+-+São+Paulo+-+SP" },
  { id: 5, nome: "João Silva", tipo: "formatura", curso: "Direito - UFRJ", diaHora: "05/08/2025 às 19:30", localizacao: "Hotel Luxo, R. das Acácias, 400 - Copacabana, RJ", mapsUrl: "https://www.google.com/maps?q=Hotel+Luxo,+R.+das+Acácias,+400+-+Copacabana,+RJ" },
  { id: 6, nomeNoivo: "Marcos", nomeNoiva: "Thais", tipo: "casamento", diaHora: "10/10/2025 às 16:00", localizacao: "R. José Felix da Silva, 657 - Muçumagro, João Pessoa - PB", mapsUrl: "https://www.google.com/maps?q=R.+José+Felix+da+Silva,+657+-+Muçumagro,+João+Pessoa+-+PB" },
  { id: 7, nomeNoivo: "Carlos", nomeNoiva: "Viviam", tipo: "casamento", diaHora: "20/09/2025 às 20:00", localizacao: "R. Aprazível, 39 - Santa Teresa, Rio de Janeiro - RJ", mapsUrl: "https://www.google.com/maps?q=R.+Aprazível,+39+-+Santa+Teresa,+Rio+de+Janeiro+-+RJ" },
  { id: 8, nomeNoivo: "Pedro", nomeNoiva: "Mariana", tipo: "casamento", diaHora: "15/12/2025 às 18:00", localizacao: "Estr. Prof. Edmundo Rosset, 2251 - Sítio Barrocada, São Paulo - SP", mapsUrl: "https://www.google.com/maps?q=Estr.+Prof.+Edmundo+Rosset,+2251+-+Sítio+Barrocada,+São+Paulo+-+SP" },
  { id: 9, nome: "Tiago Alcantra", tipo: "aniversario", dataNascimento: "2020-11-05", diaHora: "05/11/2025 às 16:00", localizacao: "R. Geraldo Costa, 382 - Manaíra, João Pessoa - PB", mapsUrl: "https://www.google.com/maps?q=R.+Geraldo+Costa,+382+-+Manaíra,+João+Pessoa+-+PB" },
  { id: 10, nome: "Lucas Pereira", tipo: "aniversario", dataNascimento: "1990-10-03", diaHora: "03/10/2025 às 20:00", localizacao: "Av. Cabo Branco, 3056 - Cabo Branco, João Pessoa - PB", mapsUrl: "https://www.google.com/maps?q=Av.+Cabo+Branco,+3056+-+Cabo+Branco,+João+Pessoa+-+PB" },
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
