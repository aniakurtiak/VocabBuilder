import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderStyle } from './Layout.styled';
import { Logo } from 'components/Logo/Logo';
import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { Toaster } from 'react-hot-toast';
import { Modal } from 'components/Modal/Modal';
import { BurgreMenu } from 'components/BurgerMenu/BurgreMenu';

export default function Layout() {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  // function onClickBurgerMenu() {
  //   setRegisterModal(false);
  //   setLoginModal(true);
  //   toggleModal();
  // }
  // function onClickRegister() {
  //   setLoginModal(false);
  //   setRegisterModal(true);
  //   toggleModal();
  // }

  // const close = () => {
  //   setIsOpen(false);
  // };

  return (
    <Container>
      <HeaderStyle> {isLoggedIn ? <Navigation toggleModal={toggleModal} /> : <Logo />}</HeaderStyle>

      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />

      {isOpen && (
        <Modal toggleModal={toggleModal}>
          {<BurgreMenu toggleModal={toggleModal} />}
        </Modal>
      )}
    </Container>
  );
}
