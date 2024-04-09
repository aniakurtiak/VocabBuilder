import styled from 'styled-components';

export const TrainingListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 343px;
`;

export const TaskItem = styled.li`
  border-bottom: 1px solid #dbdbdb;
  border-radius: 8px 8px 0 0;
  padding: 22px 22px 18px 22px;
  width: 100%;
  height: 195px;
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 8px 8px;
  }
`;

export const InputStyle = styled.input`
    border: none;
    background: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    width: 100%;

    &:focus {
        outline: none;

    }

    &::placeholder {
        color: ${({ theme }) => theme.black};

    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 500;
font-size: 14px;
`;

export const BtnNext = styled.button`
    background: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
font-size: 16px;
line-height: 1.5;
color: rgba(18, 20, 23, 0.5);

    &:hover {
        color: ${({ theme }) => theme.black};
    }
`;

export const WrapforUk = styled.div`
   display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 500;
font-size: 14px;
justify-content: flex-end;
`;

export const BtnContainer = styled.div`
margin-top: 116px;
   display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 10px;
    margin-bottom: 151px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 80px;
  }
  `;

  export const BtnSave = styled.button`
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

@media screen and (min-width: 768px) {
    width: 203px;
}

    @media screen and (min-width: 1440px) {
padding: 14px;
width: 215px;
    }
`;

export const BtnCancel = styled.button`
  font-weight: 700;
  font-size: 16px;
  color: rgba(18, 20, 23, 0.5);
  text-align: center;
  background: none;

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

