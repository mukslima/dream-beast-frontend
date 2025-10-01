import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import logob from "../assets/logob.svg";
import maisfoto from "../assets/maisfoto.svg";
import "./CadastroPessoa.css";

export default function CadastroPessoa() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  // Exemplo de lista de formandos (substitua por fetch se for necessário)
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
  ];

  const formando = formandos.find(f => f.id === id);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.telefone) {
      alert("Por favor, preencha nome e telefone.");
      return;
    }

    // Armazena os dados no localStorage (se quiser usar depois)
    localStorage.setItem("dadosPessoa", JSON.stringify(formData));

    // Redireciona para a tela de detalhes com o mesmo ID
    navigate(`/formando/${id}/detalhes`);
  };

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
        <form className="cadastro-pessoa-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite o nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input
              type="text"
              name="telefone"
              placeholder="Coloque o telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email (Opcional)</label>
            <input
              type="email"
              name="email"
              placeholder="Entre com email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="cadastro-pessoa-btn">
            Confirmar Cadastro
          </button>
        </form>
      </main>
      <footer className="cadastro-pessoa-footer">
        © 2025 Powered by Dream Best
      </footer>
    </div>
  );
}
