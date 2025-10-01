import { useParams } from "react-router-dom";
import logob from "../assets/logob.svg";
import maisfoto from "../assets/maisfoto.svg";
import "./Detalhes.css";

export default function Detalhes() {
  const { id } = useParams();

  // Exemplo de lista de formandos (substitua por fetch se é necessario)
  const formandos = [
    { id: "1", nome: "Fernanda Gomes", curso: "Direito - UFRJ", diaHora: "25/12/2025 às 19:00", localizacao: "Joy Garden Festas, R. de Lazer, 149 - Pilares, Rio de Janeiro - RJ" },
    { id: "2", nome: "Carlos Rangel", curso: "Engenharia - UFF", diaHora: "30/11/2025 às 18:00", localizacao: "Espaço Verde, Av. das Flores, 200 - Centro, Niterói - RJ" },
    { id: "3", nome: "Marcos AND Lima", curso: "Sistemas Para Internet - IFPB", diaHora: "15/10/2025 às 20:00", localizacao: "Salão Nobre, R. Principal, 50 - João Pessoa - PB" },
    { id: "4", nome: "Deivid SP", curso: "Engenharia Computação - USP", diaHora: "10/09/2025 às 17:00", localizacao: "Clube dos Engenheiros, Av. Tecnológica, 300 - São Paulo - SP" },
    { id: "5", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ", diaHora: "05/08/2025 às 19:30", localizacao: "Hotel Luxo, R. das Acácias, 400 - Copacabana, Rio de Janeiro - RJ" },
    { id: "6", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ", diaHora: "22/07/2025 às 18:30", localizacao: "Espaço Jardim, Av. das Palmeiras, 150 - Ipanema, Rio de Janeiro - RJ" },
    { id: "7", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ", diaHora: "18/06/2025 às 20:00", localizacao: "Salão Imperial, R. do Sol, 75 - Leblon, Rio de Janeiro - RJ" },
    { id: "8", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ", diaHora: "12/05/2025 às 19:00", localizacao: "Buffet Real, Av. das Nações, 250 - Barra da Tijuca, Rio de Janeiro - RJ" },
    { id: "9", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ", diaHora: "28/04/2025 às 18:00", localizacao: "Casa de Festas, R. das Orquídeas, 120 - Tijuca, Rio de Janeiro - RJ" },
    { id: "10", nome: "Nome e Sobrenome", curso: "Medicina - UFRJ", diaHora: "15/03/2025 às 20:30", localizacao: "Espaço Elegante, Av. Central, 500 - Centro, Rio de Janeiro - RJ" },
    // ...adicione mais se quiser
  ];

  // Busque o formando pelo id
  const formando = formandos.find(f => f.id === id);

  // Se não encontrar, mostre mensagem de erro ou redirecione
  if (!formando) {
    return (
      <div className="detalhes-container">
        <header className="detalhes-header">
          <img src={logob} alt="Dream Beast" className="detalhes-logo" />
        </header>
        <main className="detalhes-main">
          <div className="detalhes-alert" style={{ color: "#FF0000" }}>
            Formando não encontrado.
          </div>
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
        <div className="detalhes-nome">{formando.nome}</div>
        <div className="detalhes-curso">{formando.curso}</div>
        <div className="detalhes-localizacao">{formando.localizacao}</div>
           <a
            href="https://www.google.com/maps?q=Joy+Garden+Festas,+R.+de+Lazer,+149+-+Pilares,+Rio+de+Janeiro+-+RJ"
            target="_blank"
            rel="noopener noreferrer"
            className="detalhes-maps-btn"
            >
            <img src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png" alt="Google Maps" />
            Ver Localização
        </a>

        <div className="detalhes-dia-hora">{formando.diaHora}</div>
        <div className="Mensagem"></div>
        <div className="detalhes-foto">
          <span>Seleciona foto</span>
          <img src={maisfoto} alt="Selecionar foto" className="cadastro-pessoa-foto-img" />
        </div>
        <form className="cadastro-pessoa-form">
          <button type="submit" className="enviar-btn">
            Enviar Mensagem
          </button>
          <button type="submit" className="ver-mensagens-btn">
            Ver Mensagens
          </button>
          <button type="submit" className="compartilhar-btn">
            Compartilhar
          </button>
        </form>
      </main>
      <footer className="detalhes-footer">
        © 2025 Powered by Dream Best
      </footer>
    </div>
  );
}