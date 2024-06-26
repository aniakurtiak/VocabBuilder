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

export const TrainingCard = ({
  task,
  onNextClick,
  inputEnValue,
  setInputEnValue,
  inputUaValue,
  setInputUaValue,
  showNextButton,
}) => {

  const handleNext = () => {
    onNextClick(task);
  };

  return (
    <TrainingListContainer>
      <TaskItem>
        {task.task === 'ua' ? (
          <Text>{task.en}</Text>
        ) : (
          <InputStyle
            type="text"
            value={inputEnValue}
            onChange={e => setInputEnValue(e.target.value)}
            placeholder="Enter translation"
          />
        )}
        <Container>
          {task.task === 'en' && showNextButton && (
            <BtnNext onClick={handleNext}>
              Next
              <IconSvg>
                <use href={`${sprite}#icon-horizontal`}></use>
              </IconSvg>
            </BtnNext>
          )}
          <WrapforUk>
            <FlagIcon>
              <use href={`${sprite}#icon-uk`}></use>
            </FlagIcon>
            <p>English</p>
          </WrapforUk>
        </Container>
      </TaskItem>

      <TaskItem>
          {task.task === 'en' ? (
            <Text>{task.ua}</Text>
          ) : (
            <InputStyle
              type="text"
              value={inputUaValue}
              onChange={e => setInputUaValue(e.target.value)}
              placeholder="Введіть переклад"
            />
          )}
        <Container>
        {task.task === 'ua' && showNextButton && (
          <BtnNext onClick={handleNext}>
            Next
            <IconSvg>
              <use href={`${sprite}#icon-horizontal`}></use>
            </IconSvg>
          </BtnNext>
        )}
          <WrapforUk>
            <FlagIcon>
              <use href={`${sprite}#icon-ua`}></use>
            </FlagIcon>
            <p>Ukrainian</p>
          </WrapforUk>
        </Container>
      </TaskItem>
    </TrainingListContainer>
  );
};
