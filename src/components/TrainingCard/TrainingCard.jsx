import {
  BtnNext,
  Container,
  InputStyle,
  TaskItem,
  Text,
  TrainingListContainer,
  WrapforUk,
} from './TrainingCard.styled';
import { IconSvg } from 'components/Dashboard/Dashboard.styled';
import sprite from '../../icons/sprites.svg';
import { FlagIcon } from 'components/AddWordModal/AddWordModal.styled';
import { useSelector } from 'react-redux';
import { selectAnswers } from '../../redux/selectors';

export const TrainingCard = ({ task, onNextClick, inputValue, setInputValue, showNextButton }) => {
  const answers = useSelector(selectAnswers);

  const handleNext = () => {
    onNextClick(task);
    console.log(answers);
};
  
  return (
    <TrainingListContainer>
      <TaskItem>
        <InputStyle
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Enter translation" 
        />
        <Container>
          {showNextButton && <BtnNext onClick={handleNext}>
            Next
            <IconSvg>
              <use href={`${sprite}#icon-horizontal`}></use>
            </IconSvg>
          </BtnNext>}
          <WrapforUk>
            <FlagIcon>
              <use href={`${sprite}#icon-uk`}></use>
            </FlagIcon>
            <p>English</p>
          </WrapforUk>
        </Container>
      </TaskItem>
      <TaskItem>
        <Text>{task.ua}</Text>
        <WrapforUk>
          <FlagIcon>
            <use href={`${sprite}#icon-ua`}></use>
          </FlagIcon>
          <p>Ukrainian</p>
        </WrapforUk>
      </TaskItem>
    </TrainingListContainer>
  );
};
