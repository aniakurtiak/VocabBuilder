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