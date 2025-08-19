import React from "react";
import { StylesHeader } from "./Styles";
import logo from "../../assets/Logonetflix.png";

function Header() {
  return (
    <StylesHeader>
      <img src={logo} alt="Logo da Netflix" />
      <div className="user-controls">
        <select>
          <option value="portugues">Português</option>
          <option value="ingles">Inglês</option>
        </select>
        <button>Entrar</button>
      </div>
    </StylesHeader>
  );
}

export default Header;
