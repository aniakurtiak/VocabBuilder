import React from 'react';
import { useSelector } from 'react-redux';
import { PaginateBtn, PaginationContainer, ReactPaginateStyle } from './WordsPagination.styled';
import { selectWords } from '../../redux/selectors';

export const WordsPagination = ({ pageCount, handlePageClick }) => {
  const words = useSelector(selectWords);
  const currentPage = words.currentPage;

  return (
    <PaginationContainer>
      <PaginateBtn onClick={() => handlePageClick(0)} disabled={currentPage === 0}>
        {'<<'}
      </PaginateBtn>
      <ReactPaginateStyle
        pageCount={pageCount}
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel="<"
        breakLabel="..."
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"

      />
      <PaginateBtn
        onClick={() => handlePageClick(pageCount - 1)}
        disabled={currentPage === pageCount - 1}
      >
        {'>>'}
      </PaginateBtn>
    </PaginationContainer>
  );
};
