import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrainingPageContainer } from './TrainingPage/TrainingPage.styled';
import { StartTraining } from '../../components/StartTraining/StartTraining';
import { fetchTasks } from '../../redux/words/operations';
import { selectStatistics } from '../../redux/selectors';
import { TrainingRoom } from 'components/TrainingRoom/TrainingRoom';

const TrainingPage = () => {
  const dispatch = useDispatch();
const statistics = useSelector(selectStatistics);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);


  return (
    <TrainingPageContainer>
      {statistics.totalCount ? <TrainingRoom /> :  <StartTraining />}
    </TrainingPageContainer>
  );
};

export default TrainingPage;



