import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderStyle } from './Layout.styled';
import { Logo } from 'components/Logo/Logo';
import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { Toaster } from 'react-hot-toast';

export default function Layout() {
  const { isLoggedIn } = useAuth();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsOpen(prevState => !prevState);
  // };

  // const close = () => {
  //   setIsOpen(false);
  // };

  return (
    <Container>
      <HeaderStyle> {isLoggedIn ? <Navigation /> : <Logo />}</HeaderStyle>

      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
}
