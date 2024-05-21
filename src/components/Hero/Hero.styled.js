import styled from 'styled-components';
import Image from '../../assets/images/Camper_hero.jpeg';

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.3),
      rgba(47, 48, 58, 0.3)
    ),
    url(${Image});
  background-size: cover;
  background-position: center;
  display: flex;
  color: #fff;
  &::before {
    content: '';
    position: absolute;
    top: -80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.3),
        rgba(47, 48, 58, 0.3)
      ),
      url(${Image});
    background-size: cover;
    background-position: center;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Clarkson', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(64px, 1rem + 5vw, 88px);
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 22px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 40px;
`;
