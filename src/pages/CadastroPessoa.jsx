import { useParams } from "react-router-dom";
import logob from "../assets/logob.svg";
import maisfoto from "../assets/maisfoto.svg";
import "./CadastroPessoa.css";

export default function CadastroPessoa() {
  const { id } = useParams();

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

  // Busque o formando pelo id
  const formando = formandos.find(f => f.id === id);

  // Se não encontrar, mostre mensagem de erro ou redirecione
  if (!formando) {
    return (
      <div className="cadastro-pessoa-container">
        <header className="cadastro-pessoa-header">
          <img src={logob} alt="Dream Beast" className="cadastro-pessoa-logo" />
        </header>
        <main className="cadastro-pessoa-main">
          <div className="cadastro-pessoa-alert" style={{ color: "#FF0000" }}>
            Formando não encontrado.
          </div>
        </main>
        <footer className="cadastro-pessoa-footer">
          © 2025 Powered by Dream Best
        </footer>
      </div>
    );
  }

  return (
    <div className="cadastro-pessoa-container">
      <header className="cadastro-pessoa-header">
        <img src={logob} alt="Dream Beast" className="cadastro-pessoa-logo" />
      </header>
      <main className="cadastro-pessoa-main">
        <div className="cadastro-pessoa-nome">{formando.nome}</div>
        <div className="cadastro-pessoa-curso">{formando.curso}</div>
        <div className="cadastro-pessoa-alert">
          Antes de continuar a com a sua mensagem,<br />
          precisamos de algumas informações suas.
        </div>
        <div className="cadastro-pessoa-foto">
          <span>Seleciona foto</span>
          <img src={maisfoto} alt="Selecionar foto" className="cadastro-pessoa-foto-img" />
        </div>
        <form className="cadastro-pessoa-form">
          <div className="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Digite a nome" required />
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input type="text" placeholder="Coloque o telefone" required />
          </div>
          <div className="form-group">
            <label>Email (Opcional)</label>
            <input type="email" placeholder="Entre com email" />
          </div>
          <button type="submit" className="cadastro-pessoa-btn">
            Entrar
          </button>
        </form>
      </main>
      <footer className="cadastro-pessoa-footer">
        © 2025 Powered by Dream Best
      </footer>
    </div>
  );
}