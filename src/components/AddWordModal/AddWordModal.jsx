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
  RadioField,
  RadioLabel,
  StyledSelect,
} from './AddWordModal.styled';
import sprite from '../../icons/sprites.svg';
import { useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  selectCategories,
} from '../../redux/selectors';

const validationSchema = Yup.object().shape({
  category: Yup.string().required('Category is required'),
  verbType: Yup.string().when('category', {
    is: 'verb',
    then: Yup.string().required('Verb type is required'),
  }),
  en: Yup.string()
    .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, 'Invalid English input')
    .required('English is required'),
  ua: Yup.string()
    .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, 'Invalid Ukrainian input')
    .required('Ukrainian is required'),
});

export const AddWordModal = ({ toggleModal }) => {
  const categories = useSelector(selectCategories);
  // const dispatch = useDispatch();

  const handleSubmit = values => {
    // Send request to backend to create a word
    console.log(values);
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
        {({ values }) => (
          <FormStyle>
            <CategoriesWrapper>
            <Field as={StyledSelect} name="category" id="category">
                <option value="">Categories</option>
                {categories &&
                  categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.value}
                    </option>
                  ))}
              </Field>
              <ErrorMessage name="category" component="div" />

              {values.category === 'Verb' && (
                <RadioBtnWrapper>
                  <RadioLabel>
                    <RadioField type="radio" name="verbType" value="regular" />
                    Regular
                  </RadioLabel>
                  <RadioLabel>
                    <RadioField
                      type="radio"
                      name="verbType"
                      value="irregular"
                    />
                    Irregular
                  </RadioLabel>
                  <ErrorMessage name="verbType" component="div" />
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
            </InputWrapper>
                <ErrMsgStyle name="ua" component="div" />
  
           <InputWrapper>
              <LabelStyle htmlFor="uk">
                <FlagIcon>
                  <use href={`${sprite}#icon-uk`}></use>
                </FlagIcon>
                English
              </LabelStyle>
              <FieldStyle type="text" name="en" id="uk" />
           </InputWrapper>
            <ErrMsgStyle name="en" component="div" />
  
        </FormWrapper>

            <BtnWrapper>
              <FormBtn type="submit">Add</FormBtn>
              <FormBtn type="button" onClick={toggleModal}>
                Cancel
              </FormBtn>
            </BtnWrapper>
          </FormStyle>
        )}
      </Formik>
    </AddWordModalContainer>
  );
};


