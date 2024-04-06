import React, { useState } from 'react';
import Popover from 'react-popover';
import {
  ActionsBtn,
  ActionsPopoverContainer,
  Icon,
  IconDots,
  PopoverContainer,
} from './ActionsPopover.styled';
import sprite from '../../icons/sprites.svg';
import { setSelectedWord } from '../../redux/words/wordsSlice';
import { useDispatch } from 'react-redux';

export const ActionsPopover = ({ word, onClickEditWord }) => {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();


const handleEditClick = (word) => {
    dispatch(setSelectedWord(word));
    onClickEditWord();
  };

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PopoverContainer>
      <Popover
        isOpen={isOpen}
        body={
          <ActionsPopoverContainer>
            <ActionsBtn onClick={() => {handleEditClick(word)}}>
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
