import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Image = styled.img`
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px 25px 0 0;
  background-color: rgba(133, 170, 159, 0.1);
  margin-top: 8px;
  padding-bottom: 57px;
  padding-left: 16px;
  padding-right: 16px;
  gap: 16px;


  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const AuthTitle = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  margin-top: 32px;
`;

export const AuthText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.8);
`;

export const FormStyle = styled(Form)`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 14px;
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
  padding: 16px 139px;
  width: 343px;
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