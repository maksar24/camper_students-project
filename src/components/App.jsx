import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePages/HomePage'));
const FavoritePage = lazy(() => import('../pages/FavoritesPages/FavoritePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPages/CatalogPage'));

export const App = () => {
  return (
    <Routes path="/">
      <Route index element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
    </Routes>
  );
};
