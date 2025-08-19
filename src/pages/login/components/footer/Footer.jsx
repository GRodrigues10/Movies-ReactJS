import React from 'react'
import { StylesFooter } from './Styles'

function Footer() {
  return (
  <StylesFooter>
    <footer className="content-section">
      <p className='doubt'>Dúvidas? Ligue para 0800 591 2876 (ligação gratuita)</p>
      <div className="questions">
        <div className="q1">
          <p>Perguntas frequentes</p>
          <p>Termos de Uso</p>
          <p>Preferências de cookies</p>
        </div>

         <div className="q2">
          <p>Central de ajuda</p>
          <p>Privacidade</p>
          <p>Informações corporativas</p>
        </div>
        <select>
          <option value="portugues">Português</option>
          <option value="ingles">Inglês</option>
        </select>
      </div>
    </footer>
  </StylesFooter>
  )
}

export default Footer