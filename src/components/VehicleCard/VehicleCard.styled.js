import Icon from 'components/Icon/Icon';
import styled, { css } from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 24px;
  height: 358px;
  width: 888px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid #10182833;
`;

export const ImageWrapper = styled.div`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 526px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #101828;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const ButtonHearts = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

export const EmptyHeartIcon = styled(Icon)`
  width: 25px;
  height: 24px;
  fill: transparent;
  stroke: #000;
`;

export const FilledHeartIcon = styled(Icon)`
  width: 25px;
  height: 24px;
  fill: transparent;
`;

export const HelperWrapper = styled.div`
  display: flex;
  gap: ${({ primary }) => (primary ? '16px' : '10px')};
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 1.5;
`;

export const InfoText = styled.p`
  ${({ rating }) =>
    rating &&
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

export const Description = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #475467;
  font-size: 16px;
  line-height: 1.5;
`;
