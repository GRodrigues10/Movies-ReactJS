import React from "react";
import { StylesSection4 } from "./Styles";
import mobile from '../../assets/dispositivos.png'

function Section4() {
  return (
    <StylesSection4>
      <div className="content-section">
        <img src={mobile} alt="Mobile" />

        <div className="text">
          <h2>Assista onde quiser</h2>
          <p>
            Assista a quantos filmes e séries quiser no celular, tablet, laptop
            e TV.
          </p>
        </div>
      </div>
    </StylesSection4>
  );
}

export default Section4;
