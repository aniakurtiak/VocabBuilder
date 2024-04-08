import React from 'react';
import { useSelector } from 'react-redux';
import { PaginationContainer, ReactPaginateStyle } from './WordsPagination.styled';
import { selectWords } from '../../redux/selectors';

export const WordsPagination = ({ pageCount, handlePageClick }) => {
  const words = useSelector(selectWords);
  const currentPage = words.currentPage;

  return (
    <PaginationContainer>
      <button onClick={() => handlePageClick(0)} disabled={currentPage === 0}>
        {'<<'}
      </button>
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
      />
      <button
        onClick={() => handlePageClick(pageCount - 1)}
        disabled={currentPage === pageCount - 1}
      >
        {'>>'}
      </button>
    </PaginationContainer>
  );
};
