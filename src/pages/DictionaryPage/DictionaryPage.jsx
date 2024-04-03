import { Dashboard } from 'components/Dashboard/Dashboard';
import React from 'react';
import { DictionaryContainer } from './DictionaryPage.styled';
import { WordsTable } from 'components/WordTable/WordsTable';

const DictionaryPage = () => {
  return (
    <DictionaryContainer>
      <Dashboard />
      <WordsTable />
    </DictionaryContainer>
  );
};

export default DictionaryPage;
