import React from 'react';
import {
  BtnClose,
  MenuConatainer,
  MenuWrapper,
  NavLinkMenu,
  UserContainer,
  UserNavList,
} from './BurgerMenu.styled';
import sprite from '../../icons/sprites.svg';
import {
  UserBarContainer,
  UserName,
  UserSvg,
} from 'components/UserBar/UserBar.styled';
import { useAuth } from 'hooks';
import illustrationMobMenu from '../../img/illustrationMobMenu.png';
import illustrationMobMenu2x from '../../img/illustrationMobMenu@2x.png';
import illustrationMobMenuWebp from '../../img/illustrationMobMenu.webp';
import illustrationMobMenu2xWebp from '../../img/illustrationMobMenu@2x.webp';
import illustrationTabMenu from '../../img/illustrationTabMenu.png';
import illustrationTabMenu2x from '../../img/illustrationTabMenu@2x.png';
import illustrationTabMenuWebp from '../../img/illustrationTabMenu.webp';
import illustrationTabMenu2xWebp from '../../img/illustrationTabMenu@2x.webp';

export const BurgreMenu = ({ toggleModal }) => {
  const { user } = useAuth();

  return (
    <MenuConatainer>
      <MenuWrapper>
        <UserBarContainer>
          {user && <UserName>{user.name}</UserName>}
          <UserContainer>
            <UserSvg>
              <use href={`${sprite}#icon-user-green`}></use>
            </UserSvg>
          </UserContainer>
        </UserBarContainer>
        <BtnClose onClick={toggleModal} type="button">
          <svg>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </BtnClose>
      </MenuWrapper>
      <UserNavList>
        <li>
          <NavLinkMenu to="/dictionary">Dictionary</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/recommend">Reccomend</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/training">Training</NavLinkMenu>
        </li>
      </UserNavList>

      <picture>
        <source
          srcSet={`${illustrationTabMenuWebp} 1x, ${illustrationTabMenu2xWebp} 2x`}
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet={`${illustrationTabMenu} 1x, ${illustrationTabMenu2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${illustrationMobMenuWebp} 1x, ${illustrationMobMenu2xWebp} 2x`}
          media="(max-width: 767px)"
          type="image/webp"
        />
        <source
          srcSet={`${illustrationMobMenu} 1x, ${illustrationMobMenu2x} 2x`}
          media="(max-width: 767px)"
        />
        <img src={illustrationMobMenu} alt="people reading dictionary" />
      </picture>
    </MenuConatainer>
  );
};
