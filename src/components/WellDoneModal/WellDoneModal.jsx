import React from 'react';
import {
  BtnClose,
  ColumnsTitle,
  ColumnsWrapper,
  PictureStyle,
  Title,
  WellDoneContainer,
  WordsContainer,
} from './WellDoneModal.styled';
import sprite from '../../icons/sprites.svg';
import bookMob from '../../img/bookMob.png';
import bookMob2x from '../../img/bookMob@2x.png';
import bookMobWeb from '../../img/bookMob.webp';
import bookMob2xWeb from '../../img/bookMob@2x.webp';
import book from '../../img/book.png';
import book2x from '../../img/book @2x.png';
import bookWeb from '../../img/book.webp';
import book2xWeb from '../../img/book @2x.webp';
import { useSelector } from 'react-redux';
import { selectCheckedAnswers } from '../../redux/selectors';

export const WellDoneModal = ({ toggleModal }) => {
  const checkAnswers = useSelector(selectCheckedAnswers);

  const mistakes = checkAnswers.filter(answer => !answer.isDone);
  const correctAnswers = checkAnswers.filter(answer => answer.isDone);

  return (
    <WellDoneContainer>
      <BtnClose onClick={toggleModal} type="button">
        <svg>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </BtnClose>
      <Title>Well Done!</Title>
      <ColumnsWrapper>
        <WordsContainer>
          <ColumnsTitle>Correct answers:</ColumnsTitle>
          {correctAnswers.map((answer, index) => (
            <p key={index}>{answer.en}</p>
          ))}
        </WordsContainer>
        <WordsContainer>
          <ColumnsTitle>Mistakes:</ColumnsTitle>
          {mistakes.map((answer, index) => (
            <p key={index}>{answer.en}</p>
          ))}
        </WordsContainer>
      </ColumnsWrapper>
      <PictureStyle>
        <source
          srcSet={`${bookWeb} 1x, ${book2xWeb} 2x`}
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet={`${book} 1x, ${book2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${bookMobWeb} 1x, ${bookMob2xWeb} 2x`}
          media="(max-width: 767px)"
          type="image/webp"
        />
        <source
          srcSet={`${bookMob} 1x, ${bookMob2x} 2x`}
          media="(max-width: 767px)"
        />
        <img src={bookMobWeb} alt="report form" />
      </PictureStyle>
    </WellDoneContainer>
  );
};
