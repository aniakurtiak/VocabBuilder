import styled from 'styled-components';
import { ReactComponent as BurgerMenu } from '../../icons/burger-menu.svg';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BurgerMenuBtn = styled.button`
  background: none;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const BurgerMenuIcon = styled(BurgerMenu)``;
