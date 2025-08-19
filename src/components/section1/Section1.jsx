import React from "react";
import Header from "../header/Header";
import { StylesSection1 } from "./Styles";

function Section1() {
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
            <input type="text" placeholder="Email" />
            <button>
              Vamos Lá <span>></span>
            </button>
          </div>
        </section>
      </StylesSection1>
    </>
  );
}

export default Section1;
