import { Dashboard } from 'components/Dashboard/Dashboard';
import React from 'react';
import { DictionaryContainer } from './DictionaryPage.styled';

const DictionaryPage = () => {
  return (
    <DictionaryContainer>
      <Dashboard />
    </DictionaryContainer>
  );
};

export default DictionaryPage;
