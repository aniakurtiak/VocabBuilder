import React from 'react';
import { AddWordModalContainer, BtnClose, CategoriesWrapper, ModalTitle, ModaltText, RadioBtnWrapper, RadioInput, RadioLabel, selectStyles } from './AddWordModal.styled';
import sprite from '../../icons/sprites.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories, selectSelectedCategory } from '../../redux/selectors'
import { setVerbType } from '../../redux/filters/filtersSlice';
import Select from 'react-select';

export const AddWordModal = ({ toggleModal }) => {
    const categories = useSelector(selectCategories);
    const selectedCategory = useSelector(selectSelectedCategory);
    const dispatch = useDispatch();
  
    const handleCategoryChange = selectedOption => {
      dispatch(selectCategories(selectedOption));
    };
  
    const handleVerbTypeChange = event => {
      dispatch(setVerbType(event.target.value));
    };
  

  return (
    <AddWordModalContainer>
      <BtnClose onClick={toggleModal} type="button">
        <svg>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </BtnClose>
      <ModalTitle>Add word</ModalTitle>
      <ModaltText>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </ModaltText>
      <CategoriesWrapper>
      <Select
        styles={selectStyles}
        options={categories}
        value={selectedCategory}
        onChange={handleCategoryChange}
        placeholder="Categories"
      />
      {selectedCategory.value === 'Verb' && (
        <RadioBtnWrapper>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="verbType"
              value="regular"
              onChange={handleVerbTypeChange}
            />{' '}
            Regular
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="verbType"
              value="irregular"
              onChange={handleVerbTypeChange}
            />{' '}
            Irregular
          </RadioLabel>
        </RadioBtnWrapper>
      )}
    </CategoriesWrapper>
    </AddWordModalContainer>
  );
};
