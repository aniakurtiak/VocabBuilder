import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderStyle } from './Layout.styled';
import { Logo } from 'components/Logo/Logo';
import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation/Navigation';

export default function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <HeaderStyle> {isLoggedIn ? <Navigation /> : <Logo />}</HeaderStyle>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}
