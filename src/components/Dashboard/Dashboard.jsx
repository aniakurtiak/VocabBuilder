import { Filters } from 'components/Filters/Filters';
import React, { useEffect } from 'react';
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
import { selectStatistics } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getStatistics } from '../../redux/words/operations';

export const Dashboard = ({ onClickAddWord }) => {
  const statistics = useSelector(selectStatistics);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <DashboardContainer>
      <Filters />
      <StatisticsContainer>
        <StatisticsText>To study: {statistics.totalCount} </StatisticsText>
        <Wrapper>
          <AddWordButton type="button" onClick={onClickAddWord}>
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
