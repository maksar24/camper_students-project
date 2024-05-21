import Icon from 'components/Icon/Icon';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background-color: #f2f4f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #e44848;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #101828;
  padding-bottom: 4px;
`;

export const StarsWrapper = styled.span``;

export const StyledIcon = styled(Icon)`
  height: 16px;
  width: 16px;
`;
