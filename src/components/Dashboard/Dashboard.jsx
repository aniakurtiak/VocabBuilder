import { Filters } from 'components/Filters/Filters';
import React from 'react';
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

export const Dashboard = ({onClickAddWord}) => {

  return (
    <DashboardContainer>
      <Filters />
      <StatisticsContainer>
        <StatisticsText>To study: </StatisticsText>
        <Wrapper>
          <AddWordButton type='button' onClick={onClickAddWord}>
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
    </DashboardContainer>
  );
};
