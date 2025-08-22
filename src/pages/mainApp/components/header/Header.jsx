import { useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixLogo from "../../../../assets/Logonetflix.png";
import { StylesHeader } from "./Styles";

function Header() {
  const navigate = useNavigate();
  const back = () => navigate('/');

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <StylesHeader>
      <div className="content-section">
        <div className="p1">
          <img src={netflixLogo} alt="Logo Netflix" />
          {/* Menu desktop */}
          <div className="desktop-menu">
            <p>Início</p>
            <p onClick={() => scrollToSection("series")}>Séries</p>
            <p onClick={() => scrollToSection("filmes")}>Filmes</p>
            <p onClick={() => scrollToSection("populares")}>Novos & Populares</p>
            <p onClick={() => scrollToSection("sagas")}>Top Sagas</p>
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
        <p onClick={() => scrollToSection("series")}>Séries</p>
        <p onClick={() => scrollToSection("filmes")}>Filmes</p>
        <p onClick={() => scrollToSection("populares")}>Novos & Populares</p>
        <p onClick={() => scrollToSection("sagas")}>Top Sagas</p>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </StylesHeader>
  );
}

export default Header;
