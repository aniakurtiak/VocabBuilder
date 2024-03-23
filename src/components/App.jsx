import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operation';
import { useAuth } from 'hooks';
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
        <Route index element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/training" element={<TrainingPage />} />
      </Route>
    </Routes>
  );
};
