import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StartContainer = styled.div`
  margin-top: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 78px;
    align-items: start;
  }

    @media screen and (min-width: 1440px) {
    margin-top: 131px;
    padding: 18px 25px;
    flex-direction: row;
    }
`;


export const PictureStyle = styled.picture`
  display: flex;

    @media screen and (min-width: 1440px) {
        order: 2;
    }
`;

export const ContentContainer = styled.div`
@media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 581px;
    order: 1;
}
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 20px;
  }

    @media screen and (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 32px;
    }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 132px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 64px;
  }
`;

export const NavigateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 151px;
  }
`;

export const LinkStyle = styled(Link)`
  background: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  border-radius: 30px;
  padding: 16px;
  width: 343px;
  height: 56px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  &:hover {
    background: #a5c0b8;
    color: ${({ theme }) => theme.white};
  }

    @media screen and (min-width: 1440px) {
padding: 14px;
width: 215px;
    }
`;

export const LinkStyle2 = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  color: rgba(18, 20, 23, 0.5);
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.black};
  }

  @media screen and (min-width: 768px) {
    border: 1px solid ${({ theme }) => theme.green};
    border-radius: 30px;
    padding: 14px;
    width: 203px;
    height: 56px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    color: ${({ theme }) => theme.green};

    &:hover {
      background: ${({ theme }) => theme.green};
      color: ${({ theme }) => theme.white};
    }
  }
`;
