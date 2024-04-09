import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswers, selectTasks } from '../../redux/selectors';
import { TrainingCard } from 'components/TrainingCard/TrainingCard';
import {BtnContainer, BtnSave, LinkCancel } from './TrainingRoom.styled';
import { setAnswers } from '../../redux/words/wordsSlice';
import { sendAnswers } from '../../redux/words/operations';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"

export const TrainingRoom = () => {
  const tasks = useSelector(selectTasks);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [inputValues, setInputValues] = useState({});
  const dispatch = useDispatch();
  const answers = useSelector(selectAnswers);
  const navigate = useNavigate();


  const handleNextClick = (task) => {
    const inputValue = inputValues[task._id] || '';
    if (inputValue.trim() !== '') {
      const answerCard = {
        _id: task._id,
        en: inputValue,
        ua: task.ua,
        task: task.task
      };
      dispatch(setAnswers([...answers, answerCard]));
      setInputValues(prevInputValues => {
        return { ...prevInputValues, [task._id]: '' };
      });
    }
    if (currentCardIndex < tasks.tasks.length - 1) {
      setCurrentCardIndex(prevIndex => prevIndex + 1);
    }

  };


const handleSave = (task) => {
   handleNextClick(task);
   dispatch(sendAnswers(answers))
   .unwrap()
    .then(() => {
     console.log(answers);
    })
    .catch(error => {
      toast.error('Something went wrong. Your progress will not be saved!');
      navigate('/dictionary');
    });
  };

  return (
    <div>
      {tasks.tasks && tasks.tasks[currentCardIndex] && (
        <TrainingCard
          task={tasks.tasks[currentCardIndex]}
          onNextClick={handleNextClick}
          inputValue={inputValues[tasks.tasks[currentCardIndex]._id] || ''}
          setInputValue={(value) => setInputValues({ ...inputValues, [tasks.tasks[currentCardIndex]._id]: value })}
          showNextButton={currentCardIndex < tasks.tasks.length - 1} 
        />
      )}
      <BtnContainer>
        <BtnSave type='submit' onClick={handleSave}>Save</BtnSave>
        <LinkCancel to = '/dictionary'>Cancel</LinkCancel>
      </BtnContainer>
    </div>
  );
};
