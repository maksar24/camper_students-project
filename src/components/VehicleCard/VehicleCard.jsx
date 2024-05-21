import EquipmentList from 'components/EquipmentList/EquipmentList';
import {
  HelperWrapper,
  Image,
  Item,
  Container,
  InfoWrapper,
  Title,
  TitleWrapper,
  Description,
  ButtonHearts,
  InfoText,
  MainWrapper,
  ImageWrapper,
  EmptyHeartIcon,
  LocationIcon,
  StarIcon,
  FilledHeartIcon,
} from './VehicleCard.styled';
import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../redux/favorites/favorites';
import { useEffect, useState } from 'react';
import { selectFavorites } from '../../redux/selectors';

const VehicleCard = ({ data, handleShowMore }) => {
  const { _id, gallery, name, location, price, description, rating, reviews } =
    data;

  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const favoritesList = useSelector(selectFavorites);

  useEffect(() => {
    setIsFavorite(favoritesList.some(({ _id: id }) => id === _id));
  }, [_id, favoritesList]);

  const toggleFavoriteStatus = () => {
    dispatch(toggleFavorites(data));
    setIsFavorite(!isFavorite);
  };

  return (
    <Item>
      <ImageWrapper>
        <Image src={gallery[0]} alt={name} />
      </ImageWrapper>
      <Container>
        <MainWrapper>
          <TitleWrapper>
            <Title>{name}</Title>
            <HelperWrapper>
              <Title>€{price}.00</Title>
              <ButtonHearts onClick={toggleFavoriteStatus}>
                {!isFavorite ? (
                  <EmptyHeartIcon name="heart" />
                ) : (
                  <FilledHeartIcon name="filled-heart" />
                )}
              </ButtonHearts>
            </HelperWrapper>
          </TitleWrapper>
          <HelperWrapper $primary>
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
          </HelperWrapper>
        </MainWrapper>
        <Description>{description}</Description>
        <EquipmentList data={data} short />
        <Button onClick={() => handleShowMore(_id)}>Show more</Button>
      </Container>
    </Item>
  );
};

export default VehicleCard;
