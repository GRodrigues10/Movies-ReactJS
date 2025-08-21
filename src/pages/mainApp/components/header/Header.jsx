import { useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixLogo from "../../../../assets/Logonetflix.png";
import { StylesHeader } from "./Styles";

function Header() {
  const navigate = useNavigate();
  const back = () => navigate('/');

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <StylesHeader>
      <div className="content-section">
        <div className="p1">
          <img src={netflixLogo} alt="Logo Netflix" />
          {/* Menu desktop */}
          <div className="desktop-menu">
            <p>Início</p>
            <p>Séries</p>
            <p>Filmes</p>
            <p>Novos & Populares</p>
            <p>Minha Lista</p>
          </div>
        </div>

        <div className="p2">
          <button onClick={back}>Sair</button>
          <div className="btn-mobile" onClick={toggleMenu}>
            <p>☰</p>
          </div>
        </div>
      </div>

      {/* Menu lateral direito mobile */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>×</div>
        <p>Início</p>
        <p>Séries</p>
        <p>Filmes</p>
        <p>Novos & Populares</p>
        <p>Minha Lista</p>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </StylesHeader>
  );
}

export default Header;
