import React, { useState } from "react";
import Header from "../header/Header";
import { StylesSection1 } from "./Styles";
import { useNavigate } from "react-router-dom";

function Section1() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
const signIn = () => {
  if(!email.trim()){
    alert('Digite o seu email!');
    return;
  }
  navigate("/sign-in", { state: { email } }); // envia o email
};
  return (
    <>
      <StylesSection1>
        <Header />
        <section className="content-section">
          <h1>Filmes, Séries e muito mais, sem limites</h1>
          <p>Assista onde quiser. Cancele quando quiser</p>
          <p className="p2">
            Quer assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </p>
          <div className="controls">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={signIn}>
              Vamos Lá <span>></span>
            </button>
          </div>
        </section>
      </StylesSection1>
    </>
  );
}

export default Section1;
