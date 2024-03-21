import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 375px;
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
