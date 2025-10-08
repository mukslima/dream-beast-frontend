import { useState } from "react";
import "./CadastroFormando.css";
import logob from "../assets/logob.svg";
import maisfoto from "../assets/maisfoto.svg";

export default function CadastroFormando() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [tipo, setTipo] = useState("formatura");
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

  const [modalAberto, setModalAberto] = useState(false);
  const [linkCompartilhar, setLinkCompartilhar] = useState("");

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

    // Simulando um ID gerado ou rota personalizada
    const idSimulado = Math.floor(Math.random() * 10000);
    const url = `${window.location.origin}/${tipo}/${idSimulado}`;

    setLinkCompartilhar(url);
    setModalAberto(true);

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

  const copiarLink = () => {
    navigator.clipboard.writeText(linkCompartilhar);
    alert("Link copiado!");
  };

  return (
    <div className="cadastro-container">
      {/* HEADER */}
      <header className="admin-header">
        <img src={logob} alt="Dream Beast" className="logo-header-admin" />
        <div
          className={`hamburger ${menuAberto ? "open" : ""}`}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

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
        <h1 className="cadastro-title">CADASTRO DE {tipo.toUpperCase()}</h1>

        <div className="cadastro-foto">
          <span>Seleciona foto</span>
          <img src={maisfoto} alt="Selecionar foto" className="cadastro-foto-img" />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="cadastro-form">
          {/* Campos específicos */}
          {tipo === "formatura" && (
            <>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Curso</label>
                <input
                  type="text"
                  value={form.curso}
                  onChange={(e) => setForm({ ...form, curso: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Localização</label>
                <input
                  type="text"
                  value={form.localizacao}
                  onChange={(e) => setForm({ ...form, localizacao: e.target.value })}
                  required
                />
              </div>
            </>
          )}

          {/* Casamento */}
          {tipo === "casamento" && (
            <>
              <div className="form-group">
                <label>Nome do Noivo</label>
                <input
                  type="text"
                  value={form.nomeNoivo}
                  onChange={(e) => setForm({ ...form, nomeNoivo: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Nome da Noiva</label>
                <input
                  type="text"
                  value={form.nomeNoiva}
                  onChange={(e) => setForm({ ...form, nomeNoiva: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Localização</label>
                <input
                  type="text"
                  value={form.localizacao}
                  onChange={(e) => setForm({ ...form, localizacao: e.target.value })}
                  required
                />
              </div>
            </>
          )}

          {/* Aniversário */}
          {tipo === "aniversario" && (
            <>
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
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

{/* MODAL */}
{modalAberto && (
  <div className="modal-overlay" onClick={() => setModalAberto(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      {/* Botão X */}
      <button
        className="modal-fechar-x"
        onClick={() => setModalAberto(false)}
      >
        ✖
      </button>

      <h2>🎉 Cadastro realizado!</h2>
      <p>Compartilhe esse link com o cliente:</p>

      <div className="modal-link-box">
        <input type="text" value={linkCompartilhar} readOnly />
        <button onClick={copiarLink}>Copiar</button>
      </div>

      {/* Botão WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(
          `Olá! 👋\nSegue seu link personalizado: ${linkCompartilhar}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="modal-whatsapp-btn"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
        Enviar pelo WhatsApp
      </a>
    </div>
  </div>
  )}
    </div>
  );
}
