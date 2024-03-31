import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuConatainer = styled.div`
  position: absolute;
  width: 185px;
  max-height: 100vh;
  overflow: auto;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.green};

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 1024px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const BtnClose = styled.svg`
  width: 32px;
  height: 32px;
  background-color: transparent;
  padding: 0;
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
  padding-left: 16px;
  margin-bottom: 139px;

  @media screen and (min-width: 768px) {
    margin-top: 170px;
    padding-left: 32px;
    margin-bottom: 214px;
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
