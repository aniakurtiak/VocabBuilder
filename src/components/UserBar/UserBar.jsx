import { useAuth } from 'hooks';
import React, { useState } from 'react';
import sprite from '../../icons/sprites.svg';
import {
  ActionsBtn,
  ActionsPopoverContainer,
  UserBarContainer,
  UserContainer,
  UserName,
  UserSvg,
} from './UserBar.styled';
import Popover from 'react-popover';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';

export const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserBarContainer>
      {user && <UserName>{user.name}</UserName>}
      <UserContainer>
        <Popover
          isOpen={isOpen}
          body={
            <ActionsPopoverContainer>
              <ActionsBtn type="button" onClick={handleLogOut}>
                Log out
              </ActionsBtn>
            </ActionsPopoverContainer>
          }
          onOuterAction={togglePopover}
          place="below"
          tipSize = {0.1}
          preferPlace="end"

        >
          <ActionsBtn onClick={togglePopover}>
            <UserSvg>
              <use href={`${sprite}#icon-user`}></use>
            </UserSvg>
          </ActionsBtn>
        </Popover>
      </UserContainer>
    </UserBarContainer>
  );
};
