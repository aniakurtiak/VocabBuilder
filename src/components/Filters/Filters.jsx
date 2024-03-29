import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/filters/operations';
import { setKeyword } from '../../redux/filters/filtersSlice';
import {
  FiltersContainer,
  InputWrapper,
  SearchIcon,
  SearchInput,
} from './Filters.styled';
import { Categories } from 'components/Categories/Categories';

export const Filters = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleKeywordChange = event => {
    setSearchKeyword(event.target.value.trim());
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      dispatch(setKeyword(searchKeyword));
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchKeyword, dispatch]);

  return (
    <FiltersContainer>
      <InputWrapper>
        <SearchInput
          type="text"
          value={searchKeyword}
          onChange={handleKeywordChange}
          placeholder="Find the word"
        />
        <button>
          <SearchIcon />
        </button>
      </InputWrapper>
      <Categories/>
    </FiltersContainer>
  );
};
