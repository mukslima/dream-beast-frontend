import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import logob from "../assets/logob.svg";
import maisfoto from "../assets/maisfoto.svg";
import "./CadastroPessoa.css";

const dados = [
  { id: 1, nome: "Fernanda Gomes", tipo: "formatura", curso: "Direito - UFRJ" },
  { id: 2, nome: "Carlos Rangel", tipo: "formatura", curso: "Engenharia - UFF" },
  { id: 3, nome: "Marcos AND Lima", tipo: "formatura", curso: "Sistemas Para Internet - IFPB" },
  { id: 4, nome: "Deivid SP", tipo: "formatura", curso: "Engenharia Computação - USP" },
  { id: 5, nome: "João Silva", tipo: "formatura", curso: "Medicina - UFRJ" },
  { id: 6, nomeNoivo: "Marcos", nomeNoiva: "Thais", tipo: "casamento" },
  { id: 7, nomeNoivo: "Carlos", nomeNoiva: "Viviam", tipo: "casamento"},
  { id: 8, nomeNoivo: "Pedro", nomeNoiva: "Mariana", tipo: "casamento" },
  { id: 9, nome: "Tiago Alcantra", tipo: "aniversario", dataNascimento: "2020-11-05" },
  { id: 10, nome: "Lucas Pereira", tipo: "aniversario", dataNascimento: "1990-10-03" },
];

export default function CadastroPessoa() {
  const { tipo, id } = useParams();
  const navigate = useNavigate();

  const item = dados.find(f => String(f.id) === String(id));
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  if (!item) {
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

  const displayName = item.tipo === "casamento"
    ? `${item.nomeNoivo} & ${item.nomeNoiva}`
    : item.nome;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.telefone) {
      alert("Por favor, preencha nome e telefone.");
      return;
    }

    // Aqui pode salvar no localStorage ou enviar pra API futuramente
    localStorage.setItem("dadosPessoa", JSON.stringify(formData));

    // Navega pra tela de Detalhes
    navigate(`/${tipo}/${id}/detalhes`);
  };

  return (
    <div className="cadastro-pessoa-container">
      <header className="cadastro-pessoa-header">
        <img src={logob} alt="Dream Beast" className="cadastro-pessoa-logo" />
      </header>

      <main className="cadastro-pessoa-main">
        <div className="cadastro-pessoa-nome">{displayName}</div>
        {item.tipo === "formatura" && <div className="cadastro-pessoa-curso">{item.curso}</div>}
        {item.tipo === "casamento" && <div className="cadastro-pessoa-curso">{item.localizacao}</div>}
        {item.tipo === "aniversario" && item.dataNascimento && (<div className="cadastro-pessoa-curso">Nascimento: {item.dataNascimento}</div>)}

        <div className="cadastro-pessoa-alert">
          Antes de continuar com a sua mensagem,<br />
          precisamos de algumas informações suas.
        </div>

        <div className="cadastro-pessoa-foto">
          <span>Selecionar foto</span>
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
