import React from 'react';
import {
  AddWordModalContainer,
  BtnClose,
  BtnWrapper,
  CategoriesWrapper,
  ErrMsgStyle,
  FieldStyle,
  FlagIcon,
  FormBtn,
  FormStyle,
  FormWrapper,
  InputWrapper,
  LabelStyle,
  ModalTitle,
  ModaltText,
  RadioBtnWrapper,
  RadioInput,
  RadioLabel,
  selectStyles,
} from './AddWordModal.styled';
import sprite from '../../icons/sprites.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectSelectedCategory,
} from '../../redux/selectors';
import {
  setSelectedCategory,
  setVerbType,
} from '../../redux/filters/filtersSlice';
import Select from 'react-select';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const AddWordModal = ({ toggleModal }) => {
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  const handleCategoryChange = selectedOption => {
    dispatch(setSelectedCategory(selectedOption)); // Змінити на вашу дію, що змінює обрану категорію
  };

  const handleVerbTypeChange = event => {
    dispatch(setVerbType(event.target.value));
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    category: Yup.string().required('Category is required'),
    verbType: Yup.string().when('category', {
      is: 'Verb',
      then: Yup.string().required('Verb type is required'),
    }),
    en: Yup.string()
      .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, 'Invalid English input')
      .required('Please enter a translation'),
    ua: Yup.string()
      .matches(
        /^(?![A-Za-z])[А-ЯИЕИИГга-яиейʼ\s]+$/u,
        'Invalid Ukrainian input'
      )
      .required('Please enter a word'),
  });

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

      <Formik
        initialValues={{
          category: '',
          verbType: '',
          en: '',
          ua: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormStyle>
          <CategoriesWrapper>
            <Select
              name="category"
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

        <FormWrapper>
            <InputWrapper>
              <LabelStyle htmlFor="ua">
                <FlagIcon>
                  <use href={`${sprite}#icon-ua`}></use>
                </FlagIcon>
                Ukrainian
              </LabelStyle>
                <FieldStyle type="text" name="ua" id="ua" />
                <ErrMsgStyle name="ua" component="div" />
            </InputWrapper>
  
           <InputWrapper>
              <LabelStyle htmlFor="uk">
                <FlagIcon>
                  <use href={`${sprite}#icon-uk`}></use>
                </FlagIcon>
                English
              </LabelStyle>
              <FieldStyle type="text" name="en" id="uk" />
            <ErrMsgStyle name="en" component="div" />
           </InputWrapper>
  
        </FormWrapper>

          <BtnWrapper>
            <FormBtn type="submit">Add</FormBtn>
            <FormBtn type="button" onClick={toggleModal}>
              Cancel
            </FormBtn>
          </BtnWrapper>
        </FormStyle>
      </Formik>
    </AddWordModalContainer>
  );
};
