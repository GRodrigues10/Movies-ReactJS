import { useNavigate } from "react-router-dom";
import netflixLogo from "../../../../assets/Logonetflix.png";
import { StylesHeader } from "./Styles";

function Header() {
  const navigate = useNavigate();
  const back = () => {
    navigate('/')
  }
  return (
    <StylesHeader>
      <div className="content-section">
        <div className="p1">
          <img src={netflixLogo} alt="Logo Netflix" />
          <p>Início</p>
          <p>Séries</p>
          <p>Filmes</p>
          <p>Novos & Populares</p>
          <p>Minha Lista</p>
        </div>

        <div className="p2">
          <button onClick={back}>Sair</button>
            <div className="btn-mobile">
                 <p>☰</p>
            </div>
        </div>
      </div>
    </StylesHeader>
  );
}

export default Header;
