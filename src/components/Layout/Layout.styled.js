import styled from 'styled-components';
import { ReactComponent as LogoMob } from '../../img/icons/logo-mobile.svg'

export const Container = styled.div`
  min-width: 320px;
  max-width: 375px;
  /* background-color: ${({ theme }) => theme.green}; */
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    max-width: 1024px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    max-width: 1920px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const LogoMobSvg = styled(LogoMob)`
  width: 36px;
  height: 36px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 16px;

  @media screen and (min-width: 768px){
    margin-top: 24px;
  }
`;

export const LogoTitle = styled.h1`
font-weight: 600;
font-size: 18px;
line-height: 1.33;

@media screen and (min-width: 768px) {
font-size: 22px;
line-height: 1.45;
}
`;