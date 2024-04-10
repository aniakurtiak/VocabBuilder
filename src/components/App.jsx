import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operation';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const DictionaryPage = lazy(() => import('../pages/DictionaryPage/DictionaryPage'));
const RecommendPage = lazy(() => import('../pages/RecommendPage/RecommendPage'));
const TrainingPage = lazy(() => import('../pages/TrainingPage/TrainingPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={RegisterPage}
              redirectTo="/dictionary"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/dictionary" />
          }
        />
        <Route
          path="/dictionary"
          element={
            <PrivateRoute component={DictionaryPage} redirectTo="/login" />
          }
        />
        <Route
          path="/recommend"
          element={
            <PrivateRoute component={RecommendPage} redirectTo="/login" />
          }
        />
        <Route
          path="/training"
          element={
            <PrivateRoute component={TrainingPage} redirectTo="/login" />
          }
        />
      </Route>
      <Route
        path="/dictionary"
        element={<PrivateRoute component={DictionaryPage} redirectTo="/login" />}
      />
    </Routes>
  );
};

