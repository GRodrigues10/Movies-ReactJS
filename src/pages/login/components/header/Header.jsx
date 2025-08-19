import React from 'react'
import { StylesHeader } from './Styles'
import netflix_logo from '../../../../assets/Logonetflix.png'

function Header() {
  return (
    <StylesHeader>
      <img src={netflix_logo} alt="Netflix-Logo" />
    </StylesHeader>
  )
}

export default Header