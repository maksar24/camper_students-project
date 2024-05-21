import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import VehicleList from 'components/VehicleList/VehicleList';
import { Container, Title } from './FavoritesPage.styled';

function FavoritePage() {
  const favoritesVehicles = useSelector(selectFavorites);

  return (
    <Container>
      {favoritesVehicles.length ? (
        <VehicleList items={favoritesVehicles} itemsPerPage={4} />
      ) : (
        <Title>You have not added any vehicle to your favorites list yet</Title>
      )}
    </Container>
  );
}

export default FavoritePage;
