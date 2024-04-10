import React from 'react';
import { Circle } from 'rc-progress';
import { ProgressContainer } from './ProgressBar.styled';

export const ProgressBar = ({ progress }) => {
  return (
    <ProgressContainer>
      <Circle
        percent={progress}
        strokeWidth={10}
        trailColor="#d4f8d3"
        trailWidth={10}
        strokeColor="#2bd627"
      />
    </ProgressContainer>
  );
};
