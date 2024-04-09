import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrainingPageContainer } from './TrainingPage/TrainingPage.styled';
import { StartTraining } from '../../components/StartTraining/StartTraining';
import { fetchTasks } from '../../redux/words/operations';
import { selectTasks } from '../../redux/selectors';
import { TrainingRoom } from 'components/TrainingRoom/TrainingRoom';

const TrainingPage = () => {
  const dispatch = useDispatch();
const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);


  return (
    <TrainingPageContainer>
    {tasks ? <TrainingRoom tasks={tasks} /> : <StartTraining />}
    </TrainingPageContainer>
  );
};

export default TrainingPage;



