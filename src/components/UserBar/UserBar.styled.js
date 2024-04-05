import styled from 'styled-components';

export const UserBarContainer = styled.div`
display: flex;
align-items: center;
gap: 8px;

@media screen and (min-width: 768px) {
    gap: 16px; 
}

`

export const UserContainer = styled.div`
  border-radius: 30px;
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.green};
  position: relative;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const UserName = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 1.5;

@media screen and (min-width: 768px) {
    font-size: 20px;
}
`;

export const UserSvg = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;


export const ActionsPopoverContainer = styled.div`
  top: 35px;
  margin-top: 30px;
  border-radius: 15px;
  padding: 12px;
  width: 90px;
  height: 50px;
  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

    @media screen and (min-width: 768px) {
        width: 104px;
        height: 60px;
    }
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const ActionsBtn = styled.button`
  background: none;
  font-weight: 500;
  font-size: 14px;
  display: flex;
    align-items: center;
    justify-content: center;
  gap: 8px;

  &:hover {
    color: ${({ theme }) => theme.green};
  }

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
    }
  `;