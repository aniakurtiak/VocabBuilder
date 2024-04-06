import styled from "styled-components";

export const RecommendContainer = styled.div`
  background: ${({ theme }) => theme.white1};
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
