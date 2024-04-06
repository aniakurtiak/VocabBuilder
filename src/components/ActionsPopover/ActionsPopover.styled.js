import styled from 'styled-components';

export const PopoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ActionsPopoverContainer = styled.div`
  position: relative;
  border-radius: 15px;
  padding: 12px 24px;
  width: 117px;
  height: 70px;
  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;

    @media screen and (min-width: 768px) {
        width: 124px;
        height: 80px;
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
    color: ${({ theme }) => theme.black};
    scale: 1.1;
  }

   

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
    }
`;

export const IconDots = styled.svg`
  width: 12px;
  height: 12px;
  fill: rgba(18, 20, 23, 0.5);
  &:hover {
    fill: ${({ theme }) => theme.black};
  }
  &:active {
    fill: ${({ theme }) => theme.black};
    }


    @media screen and (min-width: 768px) {
        width: 14px;
        height: 14px;
    }

    @media screen and (min-width: 1440px) {
        width: 16px;
        height: 16px;
    }
`;
