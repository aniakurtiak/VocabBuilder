import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuConatainer = styled.div`
  position: absolute;
  width: 185px;
  height: 812px;
  overflow: auto;
  top: 0;
  right: 0;
  padding: 16px;
  background: ${({ theme }) => theme.green};

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 1024px;
    padding: 20px 32px;
  }
`;

export const BtnClose = styled.svg`
  width: 32px;
  height: 32px;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    top: 20px;
    right: 20px;
  }
`;

export const UserContainer = styled.div`
  border-radius: 30px;
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.white};
  position: relative;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const UserNavList = styled.ul`
  margin-top: 166px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 28px;

    @media screen and (min-width: 768px) {
        margin-top: 170px;
    }
`;

export const NavLinkMenu = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.white};

  &:hover {
    padding: 12px 20px;
    border-radius: 15px;
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.black};
  }

  &.active {
    padding: 12px 20px;
    border-radius: 15px;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }
`;
