import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Vector } from '../../icons/vector.svg';

export const LoginrWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 106px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top:114px;
    padding-bottom: 104px;
    /* padding-right: 34px; */
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const ImgWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 2;

    @media screen and (min-width: 1440px) {
      gap: 16px;
    }
  }
`;

export const Image = styled.img`
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    margin-top: 0;
  }
`;
export const PictueStyle = styled.picture`
  @media screen and (min-width: 1440px) {
    order: 2;
  }
`;

export const BenefitsList = styled.ul`
display: flex;
font-size: 14px;
font-weight: 400;
color: rgba(18, 20, 23, 0.8);
justify-content: center;
margin-top: 16px;
margin-bottom: 43px;

@media screen and (min-width: 768px) {
    margin-top: 172px;
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    order: 3;
    margin-top: 0;
 
  }
`;

export const BenefitItem = styled.li`
  position: relative;
  margin-right: 20px;
  &:not(:last-child)::after {
    content: '•';
    position: absolute;
    right: -10px;
  }
`;


export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  background-color: rgba(133, 170, 159, 0.1);
  margin-top: 8px;
  padding-bottom: 57px;
  padding-left: 16px;
  padding-right: 16px;
  gap: 16px;

  @media screen and (min-width: 768px) {
    padding: 48px 64px;
    margin-top: 0px;
    width: 628px;
    margin-left: auto;
    margin-right: auto;
    gap: 0px;
    order: 1;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }

`;

export const AuthTitle = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-top: 0px;
  }
`;

export const AuthText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.8);

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 32px;
    font-size: 20px;
  }
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const FieldStyle = styled(Field)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  padding: 16px 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.black};
  }

  &:hover {
    outline: none;
    border-color: ${({ theme }) => theme.green};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.green};
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: #d80027;
  margin-top: -10px;
`;

export const StatusText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: #3cbf61;
  margin-top: -10px;
`;

export const BtnSubmit = styled.button`
  border-radius: 30px;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  height: 56px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.green};
  margin-top: 18px;

  &:hover {
    background: #a5c0b8;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
    margin-bottom: 16px;
  }
`;

export const LinkStyle = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: rgba(18, 20, 23, 0.5);
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.black};
  }
`;


export const VectorSvg = styled(Vector)`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: -34px;
  }
`;
