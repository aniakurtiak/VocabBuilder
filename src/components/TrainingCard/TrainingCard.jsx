import React from 'react'
import { BtnNext, Container, InputStyle, TaskItem, Text, TrainingListContainer, WrapforUk, Wrapper } from './TrainingCard.styled'
import { IconSvg } from 'components/Dashboard/Dashboard.styled'
import sprite from '../../icons/sprites.svg';
import { FlagIcon } from 'components/AddWordModal/AddWordModal.styled';

export const TrainingCard = ({task, onNextClick}) => {

  return (
    <TrainingListContainer>
    <TaskItem>
      <InputStyle type="text" placeholder='Enter translation' />
      <Container>
        <BtnNext onClick={onNextClick}>
          Next
          <IconSvg>
            <use href={`${sprite}#icon-horizontal`}></use>
          </IconSvg>
        </BtnNext>
        <Wrapper>
          <FlagIcon>
            <use href={`${sprite}#icon-uk`}></use>
          </FlagIcon>
          <p>English</p>
        </Wrapper>
      </Container>
    </TaskItem>
    <TaskItem>
      <Text>{task.ua}</Text>
      <WrapforUk>
        <FlagIcon>
          <use href={`${sprite}#icon-ua`}></use>
        </FlagIcon>
        <p>Ukrainian</p>
      </WrapforUk>
    </TaskItem>
  </TrainingListContainer>
  )
}
