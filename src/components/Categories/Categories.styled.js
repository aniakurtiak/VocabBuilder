import styled from 'styled-components';

export const CategoriesWrapper = styled.div`
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
    border: '1px solid rgba(18, 20, 23, 0.1)',
    borderRadius: '15px',
    padding: '12px 24px',
    width: '343px',
    height: '48px',
    background: '#f8f8f8',

    '&:hover': {
      outline: 'none',
      borderColor: '#85aa9f',
      boxShadow: 'none',
    },

    '&:focus-within': {
      outline: 'none',
      borderColor: '#85aa9f',
      boxShadow: 'none',
    },

    '@media screen and (min-width: 768px)': {
      width: '164px',
    },
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#121417',
    cursor: 'pointer',
    padding: '0',
    '& svg': {
      width: '20px',
      height: '20px',
      strokeWidth: '0.02px',
      '&:hover': {
        fill: '#85aa9f',
      },
    },
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: '#121417',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '1.5',
    padding: '0',
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#85aa9f' : 'transparent', // зелений колір для опції при наведенні
    fontWeight: '500',
    lineHeight: '1.5',
    color: '#121417',
  }),

  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: '500',
    lineHeight: '1.5',
    color: '#121417',
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
`;

export const RadioInput = styled.input`
  position: relative;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(18, 20, 23, 0.2);
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
    border-color: ${({ theme }) => theme.green};
    &::before {
      background-color: ${({ theme }) => theme.green};
    }
  }
  @keyframes borderChange {
    from {
      border: 2px solid rgba(18, 20, 23, 0.2);
    }
    to {
      border-color: ${({ theme }) => theme.green};
    }
  }
`;
