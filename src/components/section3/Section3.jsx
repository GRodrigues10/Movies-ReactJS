import React from "react";
import { StylesSection3 } from "./Styles";
import tv from "../../assets/tv-netflix.png";

function Section3() {
  return (
    <StylesSection3>
      <div className="content-section">
        <div className="text">
            <h2>Aproveite na tv</h2>
            <p>
              Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              aparelhos de Blu-ray e outros dispositivos.
            </p>
        </div>
        <img src={tv} alt="Versão TV" />
      </div>
    </StylesSection3>
  );
}

export default Section3;
