import React from 'react';
import { RecommendContainer } from './RecommendPage.styled';
import { Dashboard } from 'components/Dashboard/Dashboard';

const RecommendPage = () => {
  return (
    <RecommendContainer>
      <Dashboard />
    </RecommendContainer>
  );
};

export default RecommendPage;
