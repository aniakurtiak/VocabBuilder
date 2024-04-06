import styled from 'styled-components';

export const WordsTableContainer = styled.div`
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    border-radius: 15px;
    padding: 18px;
    background: #fff;
    margin-top: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`;

export const TableStyle = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.thead`
  background: rgba(133, 170, 159, 0.1);
`;

export const HeadRow = styled.th`
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  &:last-child {
    border-right: none;
    border-radius: 0 8px 0 0;
  }
  &:first-child {
    border-radius: 8px 0 0 0;
  }
  font-weight: 500;
  font-size: 16px;
  width: ${({ width }) => width}px;
  padding: 16px 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TableBody = styled.tbody`
  box-sizing: border-box;
`;

export const TableRow = styled.td`
  font-size: 14px;
  border-top: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  border-left: none;
  padding: 8px;
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
    padding: 16px 10px 16px 14px;
    white-space: pre-wrap;
    background: ${({ theme }) => theme.white};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
  }

`;
