import styled from 'styled-components';

export const TrainingPageContainer = styled.div`
  background: ${({ theme }) => theme.white1};
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {

    padding-top: 62;
    padding-left: 94px;
    padding-right: 93px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
