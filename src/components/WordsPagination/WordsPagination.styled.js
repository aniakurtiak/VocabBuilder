import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

    @media screen and (min-width: 768px) {
        margin-top: 28px;
    }
`;

export const ReactPaginateStyle = styled(ReactPaginate)`
  display: flex;
  cursor: pointer

`;