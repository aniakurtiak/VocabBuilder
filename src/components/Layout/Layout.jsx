import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Logo } from 'components/Logo/Logo';
import { useAuth } from 'hooks';
import { UserNav } from 'components/UserNav/UserNav';

export default function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <header> {isLoggedIn ? <UserNav /> : <Logo />}</header>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}
