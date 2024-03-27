import React from 'react';
import sprite from '../../icons/sprites.svg';
import { LogoSvg, LogoTitle, NavLinkStyle } from './Logo.styled';

export const Logo = () => {
  return (
      <NavLinkStyle to="/dictionary">
        <LogoSvg>
          <use href={`${sprite}#icon-logo`}></use>
        </LogoSvg>
        <LogoTitle>VocabBuilder</LogoTitle>
      </NavLinkStyle>
 
  );
};
