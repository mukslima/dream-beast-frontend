import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logob from "../assets/logob.svg";
import olhoAberto from "../assets/olhoaberto.svg";
import olhoFechado from "../assets/olhofechado.svg";
import "./LoginAdmin.css";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", senha: "" });
  const [showSenha, setShowSenha] = useState(false);
  const [lembreMe, setLembreMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nome && form.senha) {
      navigate("/cadastro-formando");
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img src={logob} alt="Logo" className="login-logo" />
      </header>
      <div className="login-card">
        <h1 className="login-title">
          OLÁ
          <br />
          ORGANIZADOR
        </h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite a sua nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <div className="senha-group">
              <input
                id="senha"
                type={showSenha ? "text" : "password"}
                placeholder="**********"
                value={form.senha}
                onChange={(e) => setForm({ ...form, senha: e.target.value })}
                required
              />
              <img
                src={showSenha ? olhoFechado : olhoAberto}
                alt="Mostrar senha"
                className="senha-olho"
                onClick={() => setShowSenha((v) => !v)}
              />
            </div>
          </div>
          <div className="login-options">
            <label className="lembre-me">
              <input
                type="checkbox"
                checked={lembreMe}
                onChange={() => setLembreMe((v) => !v)}
              />
              Lembre-me
            </label>
            <button
              type="button"
              className="esqueci-senha"
              onClick={() => alert("Função de recuperação de senha!")}
            >
              Esqueci minha senha
            </button>
          </div>
          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}