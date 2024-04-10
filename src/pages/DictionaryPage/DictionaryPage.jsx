import { Dashboard } from 'components/Dashboard/Dashboard';
import React, { useCallback, useEffect, useState } from 'react';
import { DictionaryContainer } from './DictionaryPage.styled';
import { WordsTable } from 'components/WordTable/WordsTable';
import { Modal } from 'components/Modal/Modal';
import { AddWordModal } from 'components/AddWordModal/AddWordModal';
import { EditWordModal } from 'components/EditWordModal/EditWordModal';
import sprite from '../../icons/sprites.svg';
import { ActionsPopover } from 'components/ActionsPopover/ActionsPopover';
import { useDispatch } from 'react-redux';
import { fetchOwnWords } from '../../redux/words/operations';
import { FlagIcon, IconContainer } from 'components/Layout/Layout.styled';
import { WordsPagination } from 'components/WordsPagination/WordsPagination';
import { useSelector } from 'react-redux';
import { selectWords } from '../../redux/selectors';

const DictionaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addWordModal, setAddWordModal] = useState(false);
  const [editWordModal, setEditWordModal] = useState(false);
  const dispatch = useDispatch();
  const words = useSelector(selectWords);
  const totalPages = words.totalPages;

  const toggleModal = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, [setIsOpen]);

  const onClickAddWord = useCallback(() => {
    setAddWordModal(true);
    setEditWordModal(false);
    toggleModal();
  }, [setAddWordModal, setEditWordModal, toggleModal]);

  const onClickEditWord = useCallback(() => {
    setAddWordModal(false);
    setEditWordModal(true);
    toggleModal();
  }, [setAddWordModal, setEditWordModal, toggleModal]);

  const close = () => {
    setIsOpen(false);
  };

  const perPage = 7;
  const handlePageClick = selected => {
    dispatch(fetchOwnWords({ page: selected + 1, perPage }));
  };

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
        Header: 'Progress',
        accessor: 'progress',
        width: 95,
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row }) => <ActionsPopover word={row.original} onClickEditWord={onClickEditWord} />,
        width: 50,
      }
    ],
    [onClickEditWord]
  );

  useEffect(() => {
    dispatch(fetchOwnWords({ page: 1, perPage: 10 }));
  }, [dispatch]);


  return (
    <DictionaryContainer>
      <Dashboard onClickAddWord={onClickAddWord}/>
      <WordsTable columns = {columns}/>
      <WordsPagination pageCount={totalPages}  handlePageClick={({ selected }) => handlePageClick(selected)}/>


      {isOpen && (
        <Modal toggleModal={toggleModal} >
          {addWordModal && <AddWordModal toggleModal={toggleModal} close={close} />}
          {editWordModal && <EditWordModal toggleModal={toggleModal} close={close}/>}
        </Modal>
      )}
    </DictionaryContainer>
  );
};

export default DictionaryPage;