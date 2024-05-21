import SortingForm from 'components/SortingForm/SortingForm';
import VehicleList from 'components/VehicleList/VehicleList';
import React from 'react';
import { Container } from './CatalogPages.styled';
import { useSelector } from 'react-redux';
import { selectSortedVehicles } from '../../redux/selectors';

function CatalogPage() {
  const sortedVehicles = useSelector(selectSortedVehicles);

  return (
    <Container>
      <SortingForm />
      <VehicleList items={sortedVehicles} itemsPerPage={4} />
    </Container>
  );
}

export default CatalogPage;
