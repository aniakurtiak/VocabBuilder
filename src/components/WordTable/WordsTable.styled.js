import styled from "styled-components";

export const WordsTableContainer = styled.div`
  margin-top: 32px;
  width: 343px;
  margin-left: auto;
    margin-right: auto;
`;

export const TableStyle = styled.table`
   border: 1px solid #dbdbdb;
  border-radius: 8px;
width: 100%;
`;

export const TableHead = styled.thead`
background: rgba(133, 170, 159, 0.1);
font-weight: 500;
font-size: 16px;


`;

export const HeadRow = styled.th`
font-weight: 500;
font-size: 16px;
padding: 16px 14px;
`;

export const TableBody = styled.tbody`
font-weight: 500;
font-size: 14px;
background: ${({ theme }) => theme.white};
/* padding: 16px 14px; */
`;

export const TableRow = styled.td`
padding: 16px 14px;

`;