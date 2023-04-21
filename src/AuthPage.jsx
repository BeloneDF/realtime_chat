import axios from "axios";
import { useState } from "react";
import { variables } from "./variables";

const AuthPage = (props) => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post(variables.API_LINK, { username: username })
      .then((res) => props.onAuth({ ...res.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Bem-vindo 👋</div>

        <div className="form-subtitle">Coloque o nome de usuário e comece a usar!</div>

        <div className="auth">
          <div className="auth-label">Nome de Usuário</div>
          <input
            className="auth-input"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="auth-button" type="submit" style={{fontSize: 18}}>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
