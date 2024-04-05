import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  @media screen and (min-width: 1440px) {
    width: 1240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StatisticsContainer = styled.div`

    @media screen and (min-width: 768px) { 
  display: flex;
  align-items: center;
  gap: 16px;
    }
`;

export const StatisticsText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const Wrapper = styled.div`
margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 16px;

    @media screen and (min-width: 768px) {
    margin-top: 0;  
    }
`;

export const AddWordButton = styled.button`
  border: none;
  background: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
    gap: 8px;
  &:hover {
    color: ${({ theme }) => theme.green};
  }
`;

export const NavLinkStyle = styled(Link)`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  gap: 8px;
  color: ${({ theme }) => theme.black};
  &:hover {
    color: ${({ theme }) => theme.green};
  }
`;

export const IconSvg = styled.svg`
  width: 20px;
  height: 20px;
`;
