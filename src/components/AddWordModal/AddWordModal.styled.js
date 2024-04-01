import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const AddWordModalContainer = styled.div`
  position: absolute;
  width: 342px;
  max-height: 100vh;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scalex(1);
  border-radius: 15px;
  height: 621px;
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

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
`;

export const FlagIcon = styled.svg`
  width: 28px;
  height: 28px;
  margin-right: 4.5px;
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
`;

export const ErrMsgStyle = styled(ErrorMessage)`
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  color: ${({ theme }) => theme.white};
  margin-top: -10px;
  margin-bottom: 16px;

`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const FormBtn = styled.button `
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
`;

// ? =========== CATAGORIES ===========

export const CategoriesWrapper = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const selectStyles = {
  input: (provided, state) => ({
    ...provided,
    margin: '0',
    padding: '0',
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    margin: '0',
    padding: '0',
  }),

  control: (provided, state) => ({
    ...provided,
    border: '1px solid #d1d5db',
    borderRadius: '15px',
    padding: '12px 24px',
    width: '311px',
    height: '48px',
    background: '#85aa9f',

    '&:hover': {
      outline: 'none',
      borderColor: '#d1d5db',
      boxShadow: 'none',
    },

    '&:focus-within': {
      outline: 'none',
      borderColor: '#d1d5db',
      boxShadow: 'none',
    },

    '@media screen and (min-width: 768px)': {
      width: '164px',
    },
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#fcfcfc',
    cursor: 'pointer',
    padding: '0',
    '& svg': {
      width: '20px',
      height: '20px',
      strokeWidth: '0.02px',
    },
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: '#fcfcfc',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '1.5',
    padding: '0',
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#85aa9f' : 'transparent',
    fontWeight: '500',
    lineHeight: '1.5',
    color: '#121417',
  }),

  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: '500',
    lineHeight: '1.5',
    color: '#fcfcfc',
  }),
};

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
  border: 2px solid ${({ theme }) => theme.white};
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
      border: 2px solid ${({ theme }) => theme.white};
    }
    to {
      border-color: ${({ theme }) => theme.white};
    }
  }
`;
