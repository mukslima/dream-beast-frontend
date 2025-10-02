import { useParams } from "react-router-dom";
import logob from "../assets/logob.svg";
import maisfoto from "../assets/maisfoto.svg";
import "./Detalhes.css";

export default function Detalhes() {
  const { id } = useParams();

  const formandos = [
    {
      id: "1",
      nome: "Fernanda Gomes",
      curso: "Direito - UFRJ",
      diaHora: "25/12/2025 às 19:00",
      localizacao:
        "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ",
      mapsUrl:
        "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ",
    },
    {
      id: "2",
      nome: "Carlos Rangel",
      curso: "Engenharia - UFF",
      diaHora: "25/12/2025 às 19:00",
      localizacao:
        "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ",
      mapsUrl:
        "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ",
    },
    {
      id: "3",
      nome: "Marcos AND Lima",
      curso: "Sistemas Para Internet - IFPB",
      diaHora: "31/10/2025 às 20:00",
      localizacao:
        "R. Paulo Roberto de Souza Acioly, 1710 - Bessa, João Pessoa - PB, 58035-110",
      mapsUrl:
        "https://www.google.com/maps/place/Alpendre+Recep%C3%A7%C3%B5es/@-7.0598271,-34.8819931,14z/data=!4m10!1m2!2m1!1sEspa%C3%A7o+de+Eventos,+R.+da+Alegria,+200+-+Centro,+Jo%C3%A3o+Pessoa+-+PB!3m6!1s0x7acdde670a8aa8b:0x31a04dfca5b28963!8m2!3d-7.0598278!4d-34.8455009!15sCkJFc3Bhw6dvIGRlIEV2ZW50b3MsIFIuIGRhIEFsZWdyaWEsIDIwMCAtIENlbnRybywgSm_Do28gUGVzc29hIC0gUEJaPCI6ZXNwYcOnbyBkZSBldmVudG9zIHIgZGEgYWxlZ3JpYSAyMDAgY2VudHJvIGpvw6NvIHBlc3NvYSBwYpIBC2V2ZW50X3ZlbnVlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJQYnpaUVUxaEJFQUWqAXwQASoWIhJlc3Bhw6dvIGRlIGV2ZW50b3MoDDIgEAEiHId7hgleJDCaX4eUzO2TRYp8H_EveNxODn4F5XcyPhACIjplc3Bhw6dvIGRlIGV2ZW50b3MgciBkYSBhbGVncmlhIDIwMCBjZW50cm8gam_Do28gcGVzc29hIHBi4AEA-gEECAAQPQ!16s%2Fg%2F11g6hw3dn1?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: "4",
      nome: "Deivid SP",
      curso: "Engenharia Computação - USP",
      diaHora: "15/11/2025 às 18:00",
      localizacao:
        "Espaço Alfa, Av. das Nações, 300 - Vila Olímpia, São Paulo - SP",
      mapsUrl:
        "https://www.google.com/maps?q=Espaço+Alfa,+Av.+das+Nações,+300+-+Vila+Olímpia,+São+Paulo+-+SP",
    },
    {
      id: "5",
      nome: "Nome e Sobrenome",
      curso: "Direito - UFRJ",
      diaHora: "25/12/2025 às 19:00",
      localizacao:
        "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ",
      mapsUrl:
        "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ",
    },
    {
      id: "6",
      nome: "Nome e Sobrenome",
      curso: "Direito - UFRJ",
      diaHora: "25/12/2025 às 19:00",
      localizacao:
        "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ",
      mapsUrl:
        "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ",
    },
    {
      id: "7",
      nome: "Nome e Sobrenome",
      curso: "Direito - UFRJ",
      diaHora: "25/12/2025 às 19:00",
      localizacao:
        "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ",
      mapsUrl:
        "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ",
    },
    {
      id: "8",
      nome: "Nome e Sobrenome",
      curso: "Direito - UFRJ",
      diaHora: "25/12/2025 às 19:00",
      localizacao:
        "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ",
      mapsUrl:
        "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ",
    },
    {
      id: "9",
      nome: "Nome e Sobrenome",
      curso: "Direito - UFRJ",
      diaHora: "25/12/2025 às 19:00",
      localizacao:
        "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ",
      mapsUrl:
        "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ",
    },
    {
      id: "10",
      nome: "Nome e Sobrenome",
      curso: "Direito - UFRJ",
      diaHora: "25/12/2025 às 19:00",
      localizacao:
        "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ",
      mapsUrl:
        "https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ",
    },
    // ...demais formandos
  ];

  const formando = formandos.find((f) => f.id === id);

  if (!formando) {
    return (
      <div className="detalhes-container">
        <header className="detalhes-header">
          <img src={logob} alt="Dream Beast" className="detalhes-logo" />
        </header>
        <main className="detalhes-main">
          <div className="detalhes-alert">Formando não encontrado.</div>
        </main>
        <footer className="detalhes-footer">
          © 2025 Powered by Dream Best
        </footer>
      </div>
    );
  }

  return (
    <div className="detalhes-container">
      <header className="detalhes-header">
        <img src={logob} alt="Dream Beast" className="detalhes-logo" />
      </header>

      <main className="detalhes-main">
        <div className="detalhes-info">
          <h1 className="detalhes-nome">{formando.nome}</h1>
          <p className="detalhes-curso">{formando.curso}</p>

          <div className="detalhes-data-local">
            <p className="detalhes-localizacao">{formando.localizacao}</p>
            <p className="detalhes-dia-hora">{formando.diaHora}</p>

            <a
              href={formando.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detalhes-maps-btn"
            >
              <img
                src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
                alt="Google Maps"
              />
              Ver Localização
            </a>
          </div>
        </div>
        <div className="detalhes-mensagem">
          <label for="mensagem">Sua Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="5" cols="30" placeholder="Digite sua mensagem aqui"></textarea>
        </div>
        <div className="detalhes-btn-group">
          <button type="button">Enviar Mensagem</button>
          <button type="button">Ver Mensagens</button>
          <button type="button">Compartilhar</button>
        </div>
      </main>

      <footer className="detalhes-footer">
        © 2025 Powered by Dream Best
      </footer>
    </div>
  );
}
