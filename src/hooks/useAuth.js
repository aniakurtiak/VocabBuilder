import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
    error,
  };
};
