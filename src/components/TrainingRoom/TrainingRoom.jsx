import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswers, selectStatistics, selectTasks } from '../../redux/selectors';
import { TrainingCard } from 'components/TrainingCard/TrainingCard';
import {
  BtnContainer,
  BtnSave,
  LinkCancel,
  ProgressContainer,
  ProgressNumber,
} from './TrainingRoom.styled';
import { setAnswers, setCheckedAnswers } from '../../redux/words/wordsSlice';
import { sendAnswers } from '../../redux/words/operations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { WellDoneModal } from 'components/WellDoneModal/WellDoneModal';
import { ProgressBar } from 'components/StartTraining/ProgressBar/ProgressBar';

export const TrainingRoom = () => {
  const tasks = useSelector(selectTasks);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [inputEnValues, setInputEnValues] = useState({});
  const [inputUaValues, setInputUaValues] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  
  const dispatch = useDispatch();
  const answers = useSelector(selectAnswers);
  const navigate = useNavigate();
  const statistics = useSelector(selectStatistics);


  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleEnInput = task => {
    const inputEnValue = inputEnValues[task._id] || '';
    if (inputEnValue.trim() !== '') {
      const answerCard = {
        _id: task._id,
        en: inputEnValue,
        ua: task.ua,
        task: task.task,
      };
      dispatch(setAnswers([...answers, answerCard]));
      setInputEnValues(prevInputValues => {
        return { ...prevInputValues, [task._id]: '' };
      });
    }
  };

  const handleUaInput = task => {
    const inputUaValue = inputUaValues[task._id] || '';
    if (inputUaValue.trim() !== '') {
      const answerCard = {
        _id: task._id,
        en: task.en,
        ua: inputUaValue,
        task: task.task,
      };
      dispatch(setAnswers([...answers, answerCard]));
      setInputEnValues(prevInputValues => {
        return { ...prevInputValues, [task._id]: '' };
      });
    }
  };

  const handleNextClick = task => {
    handleEnInput(task);
    handleUaInput(task);
    if (currentCardIndex < tasks.tasks.length - 1) {
      setCurrentCardIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleSave = task => {
    handleNextClick(task);
    dispatch(sendAnswers(answers))
      .unwrap()
      .then(data => {
        dispatch(setCheckedAnswers(data));
        toggleModal();
      })
      .catch(error => {
        toast.error('Something went wrong. Your progress will not be saved!');
        navigate('/dictionary');
      });
  };

const tasksCount = statistics.totalCount*2;

  return (
    <div>
        {statistics.totalCount > 0 && (
        <ProgressContainer>
          <ProgressBar progress={tasksCount} />
          <ProgressNumber>{tasksCount}</ProgressNumber>
        </ProgressContainer>
      )}
      {tasks.tasks && tasks.tasks[currentCardIndex] && (
        <TrainingCard
          task={tasks.tasks[currentCardIndex]}
          onNextClick={handleNextClick}
          inputEnValue={inputEnValues[tasks.tasks[currentCardIndex]._id] || ''}
          setInputEnValue={value =>
            setInputEnValues({
              ...inputEnValues,
              [tasks.tasks[currentCardIndex]._id]: value,
            })
          }
          inputUaValue={inputUaValues[tasks.tasks[currentCardIndex]._id] || ''}
          setInputUaValue={value =>
            setInputUaValues({
              ...inputUaValues,
              [tasks.tasks[currentCardIndex]._id]: value,
            })
          }
          showNextButton={currentCardIndex < tasks.tasks.length - 1}
        />
      )}

      <BtnContainer>
        <BtnSave type="submit" onClick={handleSave}>
          Save
        </BtnSave>
        <LinkCancel to="/dictionary">Cancel</LinkCancel>
      </BtnContainer>
       {/* )}  */}

      {isOpen && (
        <Modal toggleModal={toggleModal}>
          <WellDoneModal toggleModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
};
