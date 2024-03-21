import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Logo } from 'components/Logo/Logo';

export default function Layout() {
  return (
    <Container>
      <Logo />

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}
