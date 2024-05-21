import ReactModal from 'react-modal';
import {
  ButtonsWrapper,
  CategoryButton,
  CategoryContainer,
  CloseButton,
  Description,
  DetailsWrapper,
  IconCross,
  InfoText,
  InfoWrapper,
  LocationIcon,
  Picture,
  PictureFrame,
  PicturesWrapper,
  ReviewsWrapper,
  ScrolledContainer,
  SecondaryTitle,
  StarIcon,
  Title,
  TitleWrapper,
} from './Modal.styled';
import { useState } from 'react';
import Features from 'components/Features/Features';
import BookingForm from 'components/BookingForm/BookingForm';

ReactModal.setAppElement('#root');

const Modal = ({ data, isOpen, toggleModal }) => {
  const { gallery, name, location, price, description, rating, reviews } = data;
  const [isChecked, setIsChecked] = useState(true);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={{
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: 'calc(100vh - 80px)',
          width: '100%',
          maxWidth: '982px',
          borderRadius: '20px',
          padding: '40px',
          overflow: 'hidden',
          border: 'none',
        },
        overlay: {
          position: 'fixed',
          zIndex: 100,
          backgroundColor: '#11121366',
        },
      }}
    >
      <TitleWrapper>
        <Title>{name}</Title>
        <CloseButton onClick={toggleModal}>
          <IconCross name={'cross'} />
        </CloseButton>
      </TitleWrapper>

      <ReviewsWrapper>
        <InfoWrapper>
          <StarIcon name="filled-star" />
          <InfoText $rating>
            {rating}({reviews.length} Reviews)
          </InfoText>
        </InfoWrapper>
        <InfoWrapper>
          <LocationIcon name="map-pin" />
          <InfoText>{location}</InfoText>
        </InfoWrapper>
      </ReviewsWrapper>

      <Title $price>€{price}.00</Title>

      <ScrolledContainer>
        <PicturesWrapper>
          {gallery.map((el, i) => {
            return (
              <PictureFrame key={i}>
                <Picture src={el} alt={name} />
              </PictureFrame>
            );
          })}
        </PicturesWrapper>

        <Description>{description}</Description>

        <ButtonsWrapper>
          <CategoryButton onClick={toggleChecked} $isActive={isChecked}>
            <SecondaryTitle>Features</SecondaryTitle>
          </CategoryButton>
          <CategoryButton onClick={toggleChecked} $isActive={!isChecked}>
            <SecondaryTitle>Reviews</SecondaryTitle>
          </CategoryButton>
        </ButtonsWrapper>

        <CategoryContainer>
          <DetailsWrapper>
            <Features data={data} />
          </DetailsWrapper>
          <BookingForm />
        </CategoryContainer>
      </ScrolledContainer>
    </ReactModal>
  );
};

export default Modal;
