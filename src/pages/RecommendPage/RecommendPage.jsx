import React, { useEffect } from 'react';
import {
  ArrowBtn,
  ArrowSpanBtn,
  ArrowSvg,
  RecommendContainer,
} from './RecommendPage.styled';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { IconContainer } from 'components/Layout/Layout.styled';
import { FlagIcon } from 'components/AddWordModal/AddWordModal.styled';
import sprite from '../../icons/sprites.svg';
import { useDispatch } from 'react-redux';
import { addWordFromOtherUser, fetchAllWords } from '../../redux/words/operations';
import { WordsTable } from 'components/WordTable/WordsTable';
import toast from 'react-hot-toast';
import { WordsPagination } from 'components/WordsPagination/WordsPagination';
import { useSelector } from 'react-redux';
import { selectWords } from '../../redux/selectors';

const RecommendPage = () => {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);
  const totalPages = words.totalPages;

  const handleAddToDictionary = (word) => {
    console.log(word._id);
    dispatch(addWordFromOtherUser(word._id))
    .unwrap()
      .then(() => {
        toast.success('Word added successfully');
    dispatch(fetchAllWords());
  })
  .catch(error => {
    toast.error(error);
  });
  }


  const IconUk = ({ text }) => (
    <IconContainer>
      <span>{text}</span>
      <FlagIcon>
        <use href={`${sprite}#icon-uk`}></use>
      </FlagIcon>
    </IconContainer>
  );

  const IconUa = ({ text }) => (
    <IconContainer>
      <span>{text}</span>
      <FlagIcon>
        <use href={`${sprite}#icon-ua`}></use>
      </FlagIcon>
    </IconContainer>
  );

  const ArrowIcon = ({ text, word}) => (
        <ArrowBtn type='button' onClick={()=> {handleAddToDictionary(word)}}>
          <ArrowSpanBtn>{text}</ArrowSpanBtn>
          <ArrowSvg>
            <use href={`${sprite}#icon-horizontal`}></use>
          </ArrowSvg>
        </ArrowBtn>

  );

  const columns = React.useMemo(
    () => [
      {
        Header: () => <IconUk text="Word" />,
        accessor: 'en',
        width: 90,
      },
      {
        Header: () => <IconUa text="Translation" />,
        accessor: 'ua',
        width: 116,
      },
      {
        Header: 'Category',
        accessor: 'category',
        width: 99,
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({row}) => <ArrowIcon text="Add to dictionary" word = {row.original} />,
        width: 50,
      },
    ],
    []
  );


  useEffect(() => {
    dispatch(fetchAllWords({ page: 1, perPage: 10 })); // Загрузка першої сторінки при завантаженні компонента
  }, [dispatch]);

  return (
    <RecommendContainer>
      <Dashboard />
      <WordsTable columns={columns} />
      <WordsPagination pageCount={totalPages} />
    </RecommendContainer>
  );
};

export default RecommendPage;
