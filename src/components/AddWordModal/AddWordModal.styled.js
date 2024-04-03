import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const AddWordModalContainer = styled.div`
  position: absolute;
  width: 342px;
  max-height: 100vh;
  /* overflow: auto; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scalex(1);
  border-radius: 15px;
  /* height: 621px; */
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

export const ModalTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.white};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
`;

export const ModaltText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.white};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    color: rgba(252, 252, 252, 0.8);
    margin-bottom: 32px;
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

// ? =========== CATAGORIES ===========

export const CategoriesWrapper = styled.div`
  margin-bottom: 32px;
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const StyledSelect = styled.select`
  border: 1px solid #d1d5db;
  border-radius: 15px;
  padding: 12px 24px;
  width: 311px;
  height: 48px;
  background: #85aa9f;
  font-size: 16px;
  color: #fcfcfc;
  /* appearance: none; */
  cursor: pointer;

  &:hover {
    outline: none;
    border-color: ${({ theme }) => theme.white};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.white};
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 3px);
    right: 16px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0;
    border-color: #fcfcfc transparent transparent;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 768px) {
    width: 204px;
    border: 1px solid rgba(252, 252, 252, 0.3);
  }
`;

export const FieldSelect = styled(Field)`
  & + ${StyledSelect} {
    & option {
      font-weight: 500;
      font-size: 16px;
      line-height: 1.5;
      color: rgba(18, 20, 23, 0.5);
      border-radius: 15px;
      padding: 12px 107px 12px 24px;
      width: 311px;
      height: 240px;
      box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
      background: #fff;
      cursor: pointer;
    }

    & option:hover {
      color: ${({ theme }) => theme.green};
      background: #fff;

    }
    
    & option:checked {
      color: ${({ theme }) => theme.green};
    }
  }
`;

export const Option = styled.option`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  border-radius: 15px;
  padding: 12px 107px 12px 24px;
  width: 311px;
  height: 240px;
  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
  background: #fff;
  cursor: pointer;
`;

export const RadioBtnWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  font-weight: 400;
  font-size: 12px;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.white};
`;

export const RadioInput = styled.input`
  position: relative;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(252, 252, 252, 0.2);
  border-radius: 50%;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: transparent;
    border-radius: 50%;
  }

  &:checked {
    border-color: ${({ theme }) => theme.white};
    &::before {
      background-color: ${({ theme }) => theme.white};
    }
  }
  @keyframes borderChange {
    from {
      border: 2px solid rgba(252, 252, 252, 0.2);
    }
    to {
      border-color: ${({ theme }) => theme.white};
    }
  }
`;
