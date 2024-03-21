import React from 'react'
import sprite from '../../img/icons/sprites.svg'
import { LogoContainer, LogoSvg, LogoTitle } from './Logo.styled'

export const Logo = () => {
  return (
    <LogoContainer>
    <LogoSvg>
      <use href= {`${sprite}#icon-logo`}></use>
    </LogoSvg>
      <LogoTitle>VocabBuilder</LogoTitle>
    </LogoContainer>
  )
}
