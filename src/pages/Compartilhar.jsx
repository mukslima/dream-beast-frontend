import { useParams, useNavigate } from "react-router-dom";
import logob from "../assets/logob.svg";
import "./Compartilhar.css";

export default function Compartilhar() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const item = dados.find(f => String(f.id) === String(id));

  if (!item) {
    return (
      <div className="compartilhar-container">
        <header className="compartilhar-header">
          <img src={logob} alt="Dream Beast" className="compartilhar-logo" />
        </header>
        <main className="compartilhar-main">
          <div className="compartilhar-alert">Item não encontrado.</div>
        </main>
        <footer className="compartilhar-footer">© 2025 Powered by Dream Best</footer>
      </div>
    );
  }

  const displayName = item.tipo === "casamento"
    ? `${item.nomeNoivo} & ${item.nomeNoiva}`
    : item.nome;

  const mensagem = ` ${displayName} ${item.curso || ""}\n Local: ${item.localizacao}\n - Venha deixar sua mensagem!`;

  const handleWhatsapp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="compartilhar-container">
      <header className="compartilhar-header">
        <img src={logob} alt="Dream Beast" className="compartilhar-logo" />
      </header>

      <main className="compartilhar-main">
        <div className="compartilhar-info">
          <h1 className="compartilhar-nome">{displayName}</h1>
          {item.tipo === "formatura" && <p className="compartilhar-curso">{item.curso}</p>}
          {item.localizacao && <p className="compartilhar-localizacao">{item.localizacao}</p>}

          <button className="compartilhar-whatsapp" onClick={handleWhatsapp}>
            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png" alt="WhatsApp" />
            Compartilhar por WhatsApp
          </button>
        </div>

        <div className="compartilhar-voltar">
          <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </main>

      <footer className="compartilhar-footer">© 2025 Powered by Dream Best</footer>
    </div>
  );
}
