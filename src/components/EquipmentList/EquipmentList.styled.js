import Icon from 'components/Icon/Icon';
import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  ${({ $short }) =>
    $short &&
    css`
      max-height: 100px;
      overflow: hidden;
    `}
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background-color: #f2f4f7;
  padding: 12px 18px;
  color: #101828;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  ${({ color }) =>
    color &&
    css`
      fill: transparent;
      stroke: #101828;
    `}
`;
