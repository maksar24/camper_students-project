import { useNavigate } from 'react-router-dom';
import {
  ContentContainer,
  DescriptionContainer,
  HeroContainer,
  Text,
  Title,
} from './Hero.styled';
import Button from 'components/Button/Button';

const Hero = () => {
  const navigate = useNavigate();

  const handleMoveToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <HeroContainer>
      <ContentContainer>
        <Title>Find your camper</Title>
        <DescriptionContainer>
          <Button onClick={handleMoveToCatalog}>Order now</Button>
          <Text>
            Book your camper today.
            <br />
            And we will help you
          </Text>
        </DescriptionContainer>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
