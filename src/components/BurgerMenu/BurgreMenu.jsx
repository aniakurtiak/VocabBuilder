import React from 'react';
import { BtnClose, MenuConatainer, NavLinkMenu, UserContainer, UserNavList } from './BurgerMenu.styled';
import sprite from '../../icons/sprites.svg'
import { UserBarContainer, UserName, UserSvg } from 'components/UserBar/UserBar.styled';
import { useAuth } from 'hooks';

export const BurgreMenu = ({ toggleModal}) => {
    const { user } = useAuth();

  return (
    <MenuConatainer>

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


      <UserNavList>
            <li>
                <NavLinkMenu to = "/dictionary">Dictionary</NavLinkMenu>
            </li>
            <li>
                <NavLinkMenu to = "/recommend">Reccomend</NavLinkMenu>
            </li>
            <li>
                <NavLinkMenu to = "/training">Training</NavLinkMenu>
            </li>
        </UserNavList>  

    </MenuConatainer>
  );
};
