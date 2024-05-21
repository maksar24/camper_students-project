import MainLayout from 'layouts/MainLayout/MainLayout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchVehicles } from '../redux/vehicles/operations.js';

const HomePage = lazy(() => import('../pages/HomePages/HomePage.jsx'));
const FavoritePage = lazy(() =>
  import('../pages/FavoritesPage/FavoritePage.jsx')
);
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};
