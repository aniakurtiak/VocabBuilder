import styled from 'styled-components';

export const DictionaryContainer = styled.div`
  background: ${({ theme }) => theme.white1};
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
