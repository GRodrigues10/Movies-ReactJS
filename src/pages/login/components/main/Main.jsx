import React, { useState } from "react";
import { StylesLogin } from "./Styles";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  const signIn = () => {
    if(!email.trim() || !password.trim()){
      alert('Preencha todos os campos!');
      return;
    }
    navigate("/main-app");
  };
  return (
    <>
      <StylesLogin>
        <Header />
        <div className="container">
          <div className="content-section">
            <h2>Entrar</h2>
            <input
              type="text"
              placeholder="E-mail ou número de celular"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Entrar</button>
            <p className="separate">OU</p>
            <div className="forgot-password">
              <p>Use um código de login</p>
              <a href="#">Esqueceu sua senha?</a>
            </div>
            <div className="remember">
              <input type="checkbox" />
              <label>Lembra de Mim?</label>
            </div>
            <div className="sign-up-now">
              <p>Novo na Netflix</p>
              <p onClick={back}>
                <strong>Assine Já</strong>
              </p>
            </div>
          </div>
        </div>
      </StylesLogin>
    </>
  );
}

export default Main;
