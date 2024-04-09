import styled from 'styled-components';

export const WellDoneContainer = styled.div`
  position: absolute;
  width: 342px;
  max-height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scalex(1);
  border-radius: 15px;
  background: ${({ theme }) => theme.green};
  padding: 48px 16px;

  @media screen and (min-width: 768px) {
    width: 527px;
    padding: 48px 64px;
  }
`;

export const BtnClose = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: 20px;
    right: 20px;
  }
`;

export const Title = styled.h2`
font-weight: 600;
font-size: 24px;
line-height: 1.17;
letter-spacing: -0.02em;
text-align: center;
color: ${({ theme }) => theme.white};
margin-bottom: 28px;

@media screen and (min-width: 768px) {
  font-size: 40px;
line-height: 1.2;

}
`;

export const PictureStyle = styled.picture`
display: flex;
justify-content: end;
`;

export const ColumnsWrapper = styled.div`
display: flex;
gap: 32px;
margin-bottom: 24px;

@media screen and (min-width: 768px) {
  gap: 64px;
}
`;

export const ColumnsTitle = styled.h3`
font-weight: 400;
font-size: 14px;
line-height: 1.5;
color: rgba(252, 252, 252, 0.5);
margin-bottom: 8px;

@media screen and (min-width: 768px) {
  font-size: 16px;
} 
`;

export const WordsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.white};

@media screen and (min-width: 768px) {
  font-size: 20px;
}
`;