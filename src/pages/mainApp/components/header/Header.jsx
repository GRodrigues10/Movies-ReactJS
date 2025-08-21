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
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
        </div>

        <div className="p2">
          <button onClick={back}>Sign Out</button>
            <div className="btn-mobile">
                 <p>☰</p>
            </div>
        </div>
      </div>
    </StylesHeader>
  );
}

export default Header;
