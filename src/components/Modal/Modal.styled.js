import Icon from 'components/Icon/Icon';
import styled, { css } from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  ${({ $price }) =>
    $price &&
    css`
      margin-bottom: 24px;
    `}
`;

export const IconCross = styled(Icon)`
  width: 16px;
  height: 16px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background: transparent;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 1.5;
`;

export const InfoText = styled.p`
  ${({ $rating }) =>
    $rating &&
    css`
      text-decoration: underline;
    `}
`;

export const StarIcon = styled(Icon)`
  width: 16px;
  height: 15px;
`;

export const LocationIcon = styled(Icon)`
  width: 16px;
  height: 15px;
  fill: transparent;
  stroke: #101828;
`;

export const ScrolledContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100% - 120px);
  margin-bottom: 24px;
  padding-right: 16px;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 7px;
    width: 8px;
  }
`;

export const PicturesWrapper = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const PictureFrame = styled.li`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Picture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Description = styled.p`
  color: #475467;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 44px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 44px;
  padding-bottom: 24px;
  border-bottom: 1px solid #10182833;
`;

export const CategoryButton = styled.button`
  position: relative;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
    bottom: -26px;
    width: 100%;
    height: 4px;
    background-color: #e44848;
  }
`;

export const SecondaryTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;

export const DetailsWrapper = styled.div`
  max-width: 430px;
`;
