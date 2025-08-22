import React, { useState } from "react";
import { StylesFooter } from "./Styles";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const signIn = () => {
  if(!email.trim()){
    alert('Digite o seu email!');
    return;
  }
  navigate("/sign-in", { state: { email } }); // envia o email
};
  return (
    <StylesFooter>
      <section className="content-section">
        <p className="text1">
          Quer assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
        <div className="content-controls">
          <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <button onClick={signIn}>
            Vamos Lá <span>></span>{" "}
          </button>
        </div>

        <div className="doubt-container">
            <p className="doubt">
              Dúvidas? Ligue para <span>0800 591 2876</span>
            </p>
        </div>
        <div className="p1">
          <p>Perguntas Frequentes</p>
          <p>Central de Ajuda</p>
          <p>Conta</p>
          <p>Media Center</p>
        </div>

        <div className="p2">
          <p>Relações com Investidores</p>
          <p>Carreiras</p>
          <p>Resgatar cartão pré-pago</p>
          <p>Comprar cartão pré-pago</p>
        </div>

        <div className="p3">
          <p>Formas de assistir</p>
          <p>Termos de Uso</p>
          <p>Privacidade</p>
          <p>Preferências de cookies</p>
        </div>

        <div className="p4">
          <p>Informações corporativas</p>
          <p>Entre em contato</p>
          <p>Teste de velocidade</p>
          <p>Avisos legais</p>
        </div>

        <div className="p5">
          <p>Só na Netflix</p>
        </div>

        <div className="final">
          <select>
            <option value="portugues">Português</option>
            <option value="ingles">Inglês</option>
          </select>
          <p>Netflix Brasil</p>
        </div>
      </section>
    </StylesFooter>
  );
}

export default Footer;
