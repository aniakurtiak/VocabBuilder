import { Dashboard } from 'components/Dashboard/Dashboard';
import React, { useState } from 'react';
import { DictionaryContainer } from './DictionaryPage.styled';
import { WordsTable } from 'components/WordTable/WordsTable';
import { Modal } from 'components/Modal/Modal';
import { AddWordModal } from 'components/AddWordModal/AddWordModal';
import { EditWordModal } from 'components/EditWordModal/EditWordModal';

const DictionaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addWordModal, setAddWordModal] = useState(false);
  const [editWordModal, setEditWordModal] = useState(false);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  function onClickAddWord() {
    setEditWordModal(false);
    setAddWordModal(true);
    toggleModal();
  }
  function onClickEditWord() {
    setAddWordModal(false);
    setEditWordModal(true);
    toggleModal();
  }

  const close = () => {
    setIsOpen(false);
  };

  return (
    <DictionaryContainer>
      <Dashboard onClickAddWord={onClickAddWord}/>
      <WordsTable onClickEditWord={onClickEditWord} />

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
