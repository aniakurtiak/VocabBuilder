import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const AddWordModalContainer = styled.div`
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

// * =========== FORM ===========
export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;

export const InputWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    align-items: center;
  }
`;

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  gap: 4.5px;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.white};

  @media screen and (min-width: 768px) {
    order: 2;
    margin-bottom: 0;
    gap: 8px;
  }
`;

export const FlagIcon = styled.svg`
  width: 28px;
  height: 28px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const FieldStyle = styled(Field)`
  border: 1px solid #d1d5db;
  background: ${({ theme }) => theme.green};
  border-radius: 15px;
  padding: 12px 24px;
  width: 311px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 11.5;
  color: ${({ theme }) => theme.white};
  margin-bottom: 16px;

  :hover {
    outline: none;
    border-color: ${({ theme }) => theme.white};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.white};
  }

  @media screen and (min-width: 768px) {
    order: 1;
    border: 1px solid rgba(252, 252, 252, 0.3);
    padding: 16px 18px;
    width: 354px;
    height: 56px;
    margin-bottom: 0px;
  }
`;

export const ErrMsgStyle = styled(ErrorMessage)`
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  color: ${({ theme }) => theme.white};
  margin-top: -10px;
  margin-bottom: 16px;
`;

export const ErrMsgCategories = styled(ErrorMessage)`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => theme.white};
  margin-top: 10px;
  margin-bottom: 16px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    gap: 10px;
    margin-top: 32px;
  }
`;

export const FormBtn = styled.button`
  border: 1px solid rgba(252, 252, 252, 0.4);
  border-radius: 30px;
  padding: 12px 45px;
  width: 159px;
  height: 48px;
  background: ${({ theme }) => theme.green};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.white};

  &:hover {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }

  @media screen and (min-width: 768px) {
    width: 245px;
    height: 56px;
  }
`;
// * =========== FORM ===========
