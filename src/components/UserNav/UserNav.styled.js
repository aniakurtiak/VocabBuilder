import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserNavList = styled.ul`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 28px;
  }
`;

export const UserNavItem = styled.li`
    /* padding: 12px 20px; */

  /* &:hover {
    border-radius: 15px;
    padding: 12px 20px;
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.white};
  } */
`;

export const NavLinkMenu = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  padding: 12px 20px;

  &:hover {
    border-radius: 15px;
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.white};
  } 

  &.active {
    border-radius: 15px;
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.white};
  }
`;
