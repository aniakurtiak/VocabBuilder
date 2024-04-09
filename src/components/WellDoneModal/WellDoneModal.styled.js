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
    width: 627px;
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
`;

export const PictureStyle = styled.picture`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ColumnsWrapper = styled.div`
display: flex;
gap: 32px;
margin-bottom: 24px;
`;

export const ColumnsTitle = styled.h3`
font-weight: 400;
font-size: 14px;
line-height: 1.5;
color: rgba(252, 252, 252, 0.5);
margin-bottom: 8px;
`;