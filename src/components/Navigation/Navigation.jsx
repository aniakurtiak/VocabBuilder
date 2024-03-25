import { Logo } from 'components/Logo/Logo';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/auth/operation';
import { UserBar } from 'components/UserBar/UserBar';
import {
  BurgerMenuBtn,
  BurgerMenuIcon,
  NavContainer,
  UserBarWrapper,
} from './Navigation.styled';
// import sprite from '../../img/icons/sprites.svg';
import { UserNav } from 'components/UserNav/UserNav';

export const Navigation = () => {
  // const dispatch = useDispatch();
  // const handleLogOut = () => dispatch(logOut());

  return (
    <NavContainer>
      <Logo />
     <UserNav/>
     <UserBarWrapper>
        <UserBar />
        <BurgerMenuBtn>
          <BurgerMenuIcon />
        </BurgerMenuBtn>
     </UserBarWrapper>
      {/* <button type="button" onClick={handleLogOut}>Logout</button> */}
    </NavContainer>
  );
};
