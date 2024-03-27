import { Logo } from 'components/Logo/Logo';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/auth/operation';
import { UserBar } from 'components/UserBar/UserBar';
import {
  BurgerMenuBtn,
  BurgerMenuIcon,
  NavContainer,
  UserBarWrapper,
} from './Navigation.styled';
import { UserNav } from 'components/UserNav/UserNav';
import { BurgreMenu } from 'components/BurgerMenu/BurgreMenu';
import { Modal } from 'components/Modal/Modal';

export const Navigation = () => {
  // const dispatch = useDispatch();
  // const handleLogOut = () => dispatch(logOut());
  const [isOpen, setIsOpen] = useState(false);


  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  // const close = () => {
  //   setIsOpen(false);
  // };

  return (
    <NavContainer>
      <Logo />
     <UserNav/>
     <UserBarWrapper>
        <UserBar />
        <BurgerMenuBtn type="button" onClick={toggleModal}>
          <BurgerMenuIcon />
        </BurgerMenuBtn>
     </UserBarWrapper>

     {isOpen && (
        <Modal toggleModal={toggleModal}>
          {<BurgreMenu toggleModal={toggleModal} />}
        </Modal>
      )}

      {/* <button type="button" onClick={handleLogOut}>Logout</button> */}
    </NavContainer>
  );
};
