import React, { useEffect, useState } from 'react';
import Popover from 'react-popover';
import {
  ActionsBtn,
  ActionsPopoverContainer,
  Icon,
  IconDots,
  PopoverContainer,
} from './ActionsPopover.styled';
import sprite from '../../icons/sprites.svg';
// import { setSelectedWord } from '../../redux/words/wordsSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectSelectedWord } from '../../redux/selectors';

export const ActionsPopover = ({ word, onClickEditWord }) => {
  console.log(word);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null); 
//   const dispatch = useDispatch();

//   const selectedWord = useSelector(selectSelectedWord);

const handleEditClick = (word) => {
    setSelectedWord(word);
    console.log(selectedWord);
    onClickEditWord();
  };

  useEffect(() => {
    console.log(selectedWord);
  }, [selectedWord]);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PopoverContainer>
      <Popover
        isOpen={isOpen}
        body={
          <ActionsPopoverContainer>
            <ActionsBtn onClick={handleEditClick}>
              <Icon>
                <use href={`${sprite}#icon-edit`}></use>
              </Icon>
              Edit
            </ActionsBtn>
            <ActionsBtn>
              <Icon>
                <use href={`${sprite}#icon-trash`}></use>
              </Icon>
              Delete
            </ActionsBtn>
          </ActionsPopoverContainer>
        }
        place="left"
        preferPlace="start"
        tipSize={0.1}
        onOuterAction={togglePopover}
      >
        <ActionsBtn onClick={togglePopover}>
          <IconDots>
            <use href={`${sprite}#icon-dots`}></use>
          </IconDots>
        </ActionsBtn>
      </Popover>
    </PopoverContainer>
  );
};
