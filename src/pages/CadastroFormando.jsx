import { useState } from "react";
import "./CadastroFormando.css";
import logob from "../assets/logob.svg";
import maisfoto from "../assets/maisfoto.svg";

export default function CadastroFormando() {
  const [form, setForm] = useState({
    email: "",
    nome: "",
    telefone: "",
    curso: "",
    localizacao: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formando cadastrado:", form);
    alert("Formando cadastrado com sucesso!");
    setForm({
      email: "",
      nome: "",
      telefone: "",
      curso: "",
      localizacao: "",
    });
  };

  return (
    <div className="cadastro-container">
      <header className="admin-header">
        <img src={logob} alt="Dream Beast" className="logo-header-admin" />
      </header>
      <div className="cadastro-card">
        <h1 className="cadastro-title">CADASTRO DE FORMANDO</h1>
        <div className="cadastro-foto">
          <span>Seleciona foto</span>
          <img
            src= {maisfoto}
            alt="Selecionar foto"
            className="cadastro-foto-img"
          />
        </div>
        <form onSubmit={handleSubmit} className="cadastro-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email dele(a)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Nome dele(a)"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input
              type="text"
              placeholder="Telefone dele(a)"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Curso</label>
            <input
              type="text"
              placeholder="Qual o curso"
              value={form.curso}
              onChange={(e) => setForm({ ...form, curso: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Localização</label>
            <input
              type="text"
              placeholder="Qual Localização?"
              value={form.localizacao}
              onChange={(e) => setForm({ ...form, localizacao: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="cadastro-btn">
            Cadastre
          </button>
        </form>
      </div>
    </div>
  );
}
