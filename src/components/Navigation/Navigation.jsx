import { Logo } from 'components/Logo/Logo';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/auth/operation';
import { UserBar } from 'components/UserBar/UserBar';
import {
  BurgerMenuBtn,
  BurgerMenuIcon,
  NavContainer,
  UserBarWrapper,
} from './Navigation.styled';
import { UserNav } from 'components/UserNav/UserNav';

export const Navigation = ({toggleModal}) => {
  // const dispatch = useDispatch();
  // const handleLogOut = () => dispatch(logOut());


  return (
    <NavContainer>
      <Logo />
     <UserNav/>
     <UserBarWrapper>
        <UserBar />
        <BurgerMenuBtn type="button" onClick={toggleModal}>
          <BurgerMenuIcon />
        </BurgerMenuBtn>
     </UserBarWrapper>

      {/* <button type="button" onClick={handleLogOut}>Logout</button> */}
    </NavContainer>
  );
};
