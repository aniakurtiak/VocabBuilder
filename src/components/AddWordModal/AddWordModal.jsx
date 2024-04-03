import React, { useEffect, useState } from 'react';
import {
  AddWordModalContainer,
  BtnClose,
  BtnWrapper,
  CategoriesWrapper,
  ErrMsgCategories,
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
  Option,
  RadioBtnWrapper,
  RadioInput,
  RadioLabel,
  StyledSelect,
} from './AddWordModal.styled';
import sprite from '../../icons/sprites.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  selectCategories, selectWordsError,
} from '../../redux/selectors';
import { addWord } from '../../redux/words/operations';
import toast from 'react-hot-toast';


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

export const AddWordModal = ({ toggleModal, close }) => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const error = useSelector(selectWordsError);
  const [verbType, setVerbType] = useState('');

  const handleSubmit = values => {
    const dataToSend = { ...values };
    if (values.category === 'verb') {
      dataToSend.isIrregular = verbType === 'irregular';
    } 
    dispatch(addWord(dataToSend))
      .then(() => {
        close();
      })
      .catch(error => {
        toast.error(error); 
      });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

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
          en: '',
          ua: '',
          category: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormStyle>
            <CategoriesWrapper>
            <Field as={StyledSelect} name="category" id="category">
                <option value="">Categories</option>
                {categories &&
                  categories.map(category => (
                    <Option key={category.value} value={category.value}>
                      {category.value}
                    </Option>
                  ))}
              </Field>
              <ErrMsgCategories name="category" component="div" />

              {values.category === 'Verb' && (
                <RadioBtnWrapper>
                  <RadioLabel>
                  <RadioInput
                      type="radio"
                      name="verbType"
                      value="regular"
                      checked={verbType === 'regular'}
                      onChange={() => {
                        setVerbType('regular');
                        setFieldValue('isIrregular', false);
                      }}
                    />
                    Regular
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="verbType"
                      value="irregular"
                      checked={verbType === 'irregular'}
                      onChange={() => {
                        setVerbType('irregular');
                        setFieldValue('isIrregular', true);
                      }}
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


