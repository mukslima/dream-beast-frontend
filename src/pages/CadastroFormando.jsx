import { useState } from "react";
import "./CadastroFormando.css";
import logob from "../assets/logob.svg";
import maisfoto from "../assets/maisfoto.svg";

export default function CadastroFormando() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [tipo, setTipo] = useState("formatura"); // padrão
  const [form, setForm] = useState({
    email: "",
    nome: "",
    nomeNoivo: "",
    nomeNoiva: "",
    telefone: "",
    curso: "",
    localizacao: "",
    dataNascimento: "",
  });

  const handleTipoChange = (novoTipo) => {
    setTipo(novoTipo);
    setMenuAberto(false);
    setForm({
      email: "",
      nome: "",
      nomeNoivo: "",
      nomeNoiva: "",
      telefone: "",
      curso: "",
      localizacao: "",
      dataNascimento: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Cadastro ${tipo}:`, form);
    alert(`${tipo.toUpperCase()} cadastrado com sucesso!`);
    setForm({
      email: "",
      nome: "",
      nomeNoivo: "",
      nomeNoiva: "",
      telefone: "",
      curso: "",
      localizacao: "",
      dataNascimento: "",
    });
  };

  return (
    <div className="cadastro-container">
      {/* HEADER */}
      <header className="admin-header">
        <img src={logob} alt="Dream Beast" className="logo-header-admin" />

        {/* Botão do menu hambúrguer */}
        <div
          className={`hamburger ${menuAberto ? "open" : ""}`}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu lateral */}
        {menuAberto && (
          <nav className="menu-lateral">
            <button
              onClick={() => handleTipoChange("formatura")}
              className={tipo === "formatura" ? "ativo" : ""}
            >
              Formatura
            </button>
            <button
              onClick={() => handleTipoChange("casamento")}
              className={tipo === "casamento" ? "ativo" : ""}
            >
              Casamento
            </button>
            <button
              onClick={() => handleTipoChange("aniversario")}
              className={tipo === "aniversario" ? "ativo" : ""}
            >
              Aniversário
            </button>
          </nav>
        )}
      </header>

      {/* CARD */}
      <div className="cadastro-card">
        <h1 className="cadastro-title">
          CADASTRO DE {tipo.toUpperCase()}
        </h1>

        <div className="cadastro-foto">
          <span>Seleciona foto</span>
          <img
            src={maisfoto}
            alt="Selecionar foto"
            className="cadastro-foto-img"
          />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="cadastro-form">
          {/* Campos diferentes dependendo do tipo */}
          {tipo === "formatura" && (
            <>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email dele(a)"
                  required
                />
              </div>
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Nome dele(a)"
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  placeholder="Telefone dele(a)"
                  required
                />
              </div>
              <div className="form-group">
                <label>Curso</label>
                <input
                  type="text"
                  value={form.curso}
                  onChange={(e) => setForm({ ...form, curso: e.target.value })}
                  placeholder="Qual o curso"
                  required
                />
              </div>
              <div className="form-group">
                <label>Localização</label>
                <input
                  type="text"
                  value={form.localizacao}
                  onChange={(e) => setForm({ ...form, localizacao: e.target.value })}
                  placeholder="Qual Localização?"
                  required
                />
              </div>
            </>
          )}

          {tipo === "casamento" && (
            <>
              <div className="form-group">
                <label>Nome do Noivo</label>
                <input
                  type="text"
                  value={form.nomeNoivo}
                  onChange={(e) => setForm({ ...form, nomeNoivo: e.target.value })}
                  placeholder="Nome do noivo"
                  required
                />
              </div>
              <div className="form-group">
                <label>Nome da Noiva</label>
                <input
                  type="text"
                  value={form.nomeNoiva}
                  onChange={(e) => setForm({ ...form, nomeNoiva: e.target.value })}
                  placeholder="Nome da noiva"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email de contato"
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  placeholder="Telefone"
                  required
                />
              </div>
              <div className="form-group">
                <label>Localização</label>
                <input
                  type="text"
                  value={form.localizacao}
                  onChange={(e) => setForm({ ...form, localizacao: e.target.value })}
                  placeholder="Local do casamento"
                  required
                />
              </div>
            </>
          )}

          {tipo === "aniversario" && (
            <>
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Nome do aniversariante"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email de contato"
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  placeholder="Telefone"
                  required
                />
              </div>
              <div className="form-group">
                <label>Data de Nascimento</label>
                <input
                  type="date"
                  value={form.dataNascimento}
                  onChange={(e) => setForm({ ...form, dataNascimento: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Localização</label>
                <input
                  type="text"
                  value={form.localizacao}
                  onChange={(e) => setForm({ ...form, localizacao: e.target.value })}
                  placeholder="Local da festa"
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="cadastro-btn">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
