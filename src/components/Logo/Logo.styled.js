import styled from "styled-components";

export const LogoSvg = styled.svg`
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