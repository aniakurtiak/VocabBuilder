import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../redux/selectors';
import { TrainingCard } from 'components/TrainingCard/TrainingCard';
import { BtnCancel, BtnContainer, BtnSave } from './TrainingRoom.styled';

export const TrainingRoom = () => {
  const tasks = useSelector(selectTasks);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentCardIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div>
      {tasks.tasks && tasks.tasks[currentCardIndex] && (
        <TrainingCard
          task={tasks.tasks[currentCardIndex]}
          onNextClick={handleNextClick} 
        />
      )}
      <BtnContainer>
        <BtnSave>Save</BtnSave>
        <BtnCancel>Cancel</BtnCancel>
      </BtnContainer>
    </div>
  );
};
