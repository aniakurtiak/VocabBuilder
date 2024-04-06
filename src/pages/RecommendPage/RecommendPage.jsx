import React, { useEffect } from 'react';
import { RecommendContainer } from './RecommendPage.styled';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { IconContainer } from 'components/Layout/Layout.styled';
import { FlagIcon } from 'components/AddWordModal/AddWordModal.styled';
import sprite from '../../icons/sprites.svg';
import { useDispatch } from 'react-redux';
import { fetchAllWords } from '../../redux/words/operations';
import { WordsTable } from 'components/WordTable/WordsTable';

const RecommendPage = () => {
  const dispatch = useDispatch();

  const IconUk = ({ text }) => (
    <IconContainer>
      <span>{text}</span>
      <FlagIcon>
        <use href={`${sprite}#icon-uk`}>z</use>
      </FlagIcon>
    </IconContainer>
  );

  const IconUa = ({ text }) => (
    <IconContainer>
      <span>{text}</span>
      <FlagIcon>
        <use href={`${sprite}#icon-ua`}>z</use>
      </FlagIcon>
    </IconContainer>
  );

  const columns = React.useMemo(
    () => [
      {
        Header: () => <IconUk text="Word" />,
        accessor: 'en',
        width: 82,
      },
      {
        Header: () => <IconUa text="Translation" />,
        accessor: 'ua',
        width: 116,
      },
      {
        Header: 'Category',
        accessor: 'category',
        width: 95,
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: () => <button>Add</button>,
        width: 50,
      }
    ],
    []
  );

  useEffect(() => {
    dispatch(fetchAllWords());
  }, [dispatch]);



  return (
    <RecommendContainer>
      <Dashboard />
      <WordsTable columns = {columns}/>
    </RecommendContainer>
  );
};

export default RecommendPage;
