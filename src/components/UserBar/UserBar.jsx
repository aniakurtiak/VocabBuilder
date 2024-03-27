import { useAuth } from 'hooks';
import React from 'react';
import sprite from '../../icons/sprites.svg';
import { UserBarContainer, UserContainer, UserName, UserSvg } from './UserBar.styled';

export const UserBar = () => {
  const { user } = useAuth();

  return (
    <UserBarContainer>
      {user && <UserName>{user.name}</UserName>}
      <UserContainer>
        <UserSvg>
          <use href={`${sprite}#icon-user`}></use>
        </UserSvg>
      </UserContainer>
    </UserBarContainer>
  );
};
