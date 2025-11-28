import React from "react";
import { StylesFooter } from "./Styles";
import instagram from "../../../../assets/instagram2.png";
import facebook from "../../../../assets/facebook2.png";
import x from "../../../../assets/x2.png";
import youtube from "../../../../assets/youtube2.png";

export default function Footer() {
  
 
  return (
    <StylesFooter>
      <div className="content-section">
        <div className="social-media">
          <div>
            <a href="https://www.instagram.com/netflixbrasil/" target="_blank"><img src={instagram} alt="Instagram Logo"/></a>
          </div>
          <div>
            <a href="https://www.facebook.com/netflixbrasil/?locale=pt_BR" target="_blank"><img src={facebook} alt="Facebook Logo" /></a>
          </div>
          <div>
            <a href="https://x.com/netflixbrasil" target="_blank"><img src={x} alt="X Logo" /></a>
          </div>
          <div>
            <a href="https://www.youtube.com/@NetflixBrasil" target="_blank"><img src={youtube} alt="Youtube Logo" /></a>
          </div>
        </div>

        <div className="informations">
          <div className="p1">
            <p>Central de Ajuda</p>
            <p>Descrição de Áudio</p>
            <p>Cartões Presente</p>
            <p> Relações com Investidores</p>
          </div>

          <div className="p2">
            <p>Imprensa Oficial</p>
            <p>Oportunidades de Carreira</p>
            <p>Termos de Serviço</p>
            <p>Política de Privacidade</p>
          </div>

          <div className="p3">
            <p>Avisos Legais</p>
            <p>Preferências de Cookies</p>
            <p>Informações Corporativas</p>
            <p>Entre em Contato</p>
          </div>
        </div>
        <div className="foot-container">
            <p className="foot">&copy; 2025 - Projeto criado apenas para fins educacionais.</p>
        </div>
      </div>
    </StylesFooter>
  );
}
