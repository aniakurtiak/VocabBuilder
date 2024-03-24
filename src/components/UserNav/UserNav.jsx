import { Logo } from 'components/Logo/Logo'
import { useAuth } from 'hooks';
import React from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';

export const UserNav = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const handleLogOut = () => dispatch(logOut());

  return (
    <div>
        <Logo/>
      <p>Welcome, {user.name}</p>
        <button type="button" onClick={handleLogOut}>Logout</button>
    </div>
  )
}
