import React from "react";
import { StylesSection6 } from "./Styles";
import movel from "../../assets/movel.png";

function Section6() {
  return (
    <StylesSection6>
      <div className="content-section">
        <img src={movel} alt="Mobile" />

        <div className="text">
          <h2>Baixe séries para assistir offline</h2>
          <p>
            Assista em um avião, trem ou submarino...
          </p>
        </div>
      </div>
    </StylesSection6>
  );
}

export default Section6;
