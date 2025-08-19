import React from 'react'
import { StylesSection2 } from './Styles'
import { Link } from 'react-router-dom'
import popcorn from '../../assets/pipoca.png'

function Section2() {
  return (
    <StylesSection2>
        <section className="content-section">
            <img src={popcorn} alt="Imagem da pipoca" />
            <div className="content">
                <h2>A Netflix que você adora por apenas R$ 20,90.</h2>
                <p>Assine o plano Padrão com anúncios.</p>
                
                <Link to='/' > Saiba Mais > </Link>
                    
               
            </div>
        </section>
    </StylesSection2>
    
  )
}

export default Section2