import VehicleCard from 'components/VehicleCard/VehicleCard';
import { Container, List } from './VehicleList.styled';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';

const VehicleList = ({ items, itemsPerPage }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [visibleItemsCount, setVisibleItemsCount] = useState(itemsPerPage);

  const handleLoadMore = () => {
    setVisibleItemsCount(prevCount => prevCount + itemsPerPage);
  };

  const openModal = () => {
    setModalIsOpen(true);
    document.querySelector('body').style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.querySelector('body').style.overflow = 'auto';
  };

  const showDetails = id => {
    const vehicle = items.find(el => el._id === id);
    setVehicleDetails(vehicle);
    openModal();
  };

  return (
    <Container>
      <List>
        {items?.slice(0, visibleItemsCount).map(el => {
          return (
            <VehicleCard
              key={el._id}
              data={el}
              handleShowMore={showDetails}
            ></VehicleCard>
          );
        })}

        {modalIsOpen && (
          <Modal
            toggleModal={closeModal}
            isOpen={modalIsOpen}
            data={vehicleDetails}
          />
        )}
      </List>
      {visibleItemsCount < items?.length && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </Container>
  );
};

export default VehicleList;
