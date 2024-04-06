// import React, { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
// import { useDispatch } from 'react-redux';
import { selectSelectedWord } from '../../redux/selectors';

import * as Yup from 'yup';
import {
  AddWordModalContainer,
  BtnClose,
  BtnWrapper,
  ErrMsgStyle,
  FieldStyle,
  FlagIcon,
  FormBtn,
  FormStyle,
  FormWrapper,
  InputWrapper,
  LabelStyle,
} from './EditWordModal.styled';
import sprite from '../../icons/sprites.svg';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';

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

export const EditWordModal = ({ toggleModal }) => {
  const selectedWord = useSelector(selectSelectedWord);

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <AddWordModalContainer>
      <BtnClose onClick={toggleModal} type="button">
        <svg>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </BtnClose>

      <Formik
        initialValues={{
          en: selectedWord.en,
          ua: selectedWord.ua,
          // category: selectedWord.category,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <FormStyle>
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
                <LabelStyle htmlFor="en">
                  <FlagIcon>
                    <use href={`${sprite}#icon-uk`}></use>
                  </FlagIcon>
                  English
                </LabelStyle>
                <FieldStyle type="text" name="en" id="en" />
              </InputWrapper>
              <ErrMsgStyle name="en" component="div" />
            </FormWrapper>

            <BtnWrapper>
              <FormBtn type="submit">Save</FormBtn>
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
