import { Filters } from 'components/Filters/Filters';
import React, { useState } from 'react';
import {
  AddWordButton,
  DashboardContainer,
  IconSvg,
  NavLinkStyle,
  StatisticsContainer,
  StatisticsText,
  Wrapper,
} from './Dashboard.styled';
import sprite from '../../icons/sprites.svg';
import { Modal } from 'components/Modal/Modal';
import { AddWordModal } from 'components/AddWordModal/AddWordModal';

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <DashboardContainer>
      <Filters />

      <StatisticsContainer>
        <StatisticsText>To study: </StatisticsText>
        <Wrapper>
          <AddWordButton type='button' onClick={toggleModal}>
            Add word
            <IconSvg>
              <use href={`${sprite}#icon-plus`}></use>
            </IconSvg>
          </AddWordButton>
          <NavLinkStyle to="/training">
            Train onself
            <IconSvg>
              <use href={`${sprite}#icon-horizontal`}></use>
            </IconSvg>
          </NavLinkStyle>
        </Wrapper>
      </StatisticsContainer>

      {isOpen && (
        <Modal toggleModal={toggleModal}>
          {<AddWordModal toggleModal={toggleModal} close = {close} />}
        </Modal>
      )}
    </DashboardContainer>
  );
};
