import React from "react";
import { StylesHeader } from "./Styles";
import logo from "../../assets/Logonetflix.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const signIn = () => {
    navigate('/sign-in');
  }
  return (
    <StylesHeader>
      <img src={logo} alt="Logo da Netflix" />
      <div className="user-controls">
        <select>
          <option value="portugues">Português</option>
          <option value="ingles">Inglês</option>
        </select>
        <button onClick={signIn}>Entrar</button>
      </div>
    </StylesHeader>
  );
}

export default Header;
