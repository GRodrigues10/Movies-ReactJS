import React from "react";
import { StylesSection5 } from "./Styles";
import mobile from "../../assets/kids.png";

function Section5() {
  return (
    <StylesSection5>
      <div className="content-section">
        <div className="text">
          <h2>Crie perfis para crianças</h2>
          <p>
            Deixe as crianças se aventurarem com seus personagens favoritos em
            um espaço feito só para elas, sem pagar a mais por isso.
          </p>
        </div>
        <img src={mobile} alt="Mobile" />
      </div>
    </StylesSection5>
  );
}

export default Section5;
