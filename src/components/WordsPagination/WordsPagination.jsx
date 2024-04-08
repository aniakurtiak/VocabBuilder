import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllWords } from '../../redux/words/operations';
import { PaginationContainer, ReactPaginateStyle } from './WordsPagination.styled';
import { selectWords } from '../../redux/selectors';

export const WordsPagination = ({ pageCount }) => {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);
  const currentPage = words.currentPage;

  const perPage = 7;
  const handlePageClick = selected => {
    dispatch(fetchAllWords({ page: selected + 1, perPage }));
  };

  return (
    <PaginationContainer>
      <button onClick={() => handlePageClick(0)} disabled={currentPage === 0}>
        {'<<'}
      </button>
      <ReactPaginateStyle
        pageCount={pageCount}
        nextLabel=">"
        onPageChange={({ selected }) => handlePageClick(selected)}
        pageRangeDisplayed={3}
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
