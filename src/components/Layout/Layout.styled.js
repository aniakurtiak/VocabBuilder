import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    max-width: 1024px;
  
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    max-width: 1920px;
  }
`;

export const HeaderStyle = styled.header`
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px){
    margin-top: 24px;
    margin-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px){
    padding-left: 100px;
    padding-right: 100px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlagIcon = styled.svg`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 28px;
    height: 28px;
  }
`;
