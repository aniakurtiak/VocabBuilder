import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  gap: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const ReactPaginateStyle = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;

  .active {
    border-radius: 8px;
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.white1};
  }

  .page-link {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 8px;
    padding: 10px;
    width: 32px;
    height: 32px;
    font-weight: 600;
    font-size: 13px;

    &:hover {
      color: ${({ theme }) => theme.green};
    }
  }
`;

export const PaginateBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 8px;
  padding: 10px;
  width: 32px;
  height: 32px;
  font-weight: 600;
  font-size: 13px;
  background: ${({ theme }) => theme.white1};

  &:hover {
    color: ${({ theme }) => theme.green};
  }
  &:active {
    border-radius: 8px;
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.white1};
  }
// `;
// export const  = styled.`
  
// `;