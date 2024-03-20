import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, LogoContainer, LogoMobSvg, LogoTitle } from './Layout.styled';

export default function Layout() {
  return (
    <Container>

      <LogoContainer>
        <LogoMobSvg />
        <LogoTitle>VocabBuilder</LogoTitle>
      </LogoContainer>

      <Suspense>
        <Outlet />
      </Suspense>
      
    </Container>
  );
}
