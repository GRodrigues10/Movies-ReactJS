import React from "react";
import { StylesLogin } from "./Styles";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  }
  return (
    <>
    
      <StylesLogin>
        <Header />
        <div className="container">
          <div className="content-section">
            <h2>Entrar</h2>
            <input type="text" placeholder="E-mail ou número de celular" />
            <input type="text" placeholder="Senha" />
            <button>Entrar</button>
            <p className="separate">OU</p>
            <div className="forgot-password">
              <p>Use um código de login</p>
              <a href="#">Esqueceu sua senha?</a>
            </div>
            <div className="remember">
              <input type="checkbox"/>
              <label>Lembra de Mim?</label>
            </div>
            <div className="sign-up-now">
              <p>Novo na Netflix</p>
              <p onClick={back}><strong>Assine Já</strong></p>
            </div>
          </div>
        </div>
      </StylesLogin>
    </>
  );
}

export default Main;
