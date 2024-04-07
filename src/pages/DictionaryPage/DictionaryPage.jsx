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

const DictionaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addWordModal, setAddWordModal] = useState(false);
  const [editWordModal, setEditWordModal] = useState(false);
  const dispatch = useDispatch();

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
    dispatch(fetchOwnWords());
  }, [dispatch]);


  return (
    <DictionaryContainer>
      <Dashboard onClickAddWord={onClickAddWord}/>
      <WordsTable columns = {columns}/>

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
