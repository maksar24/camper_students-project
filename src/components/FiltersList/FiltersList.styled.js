import Icon from 'components/Icon/Icon';
import styled, { css } from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  height: 95px;
  width: 112px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  border: ${({ checked }) =>
    checked ? '1px solid #E44848' : '1px solid #10182833'};
`;

export const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 95px;
  width: 112px;
  cursor: pointer;
`;

export const StyledIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  ${props =>
    props.specialStyle
      ? css`
          stroke: #101828;
          fill: transparent;
        `
      : css`
          stroke: transparent;
          fill: #101828;
        `}
`;

export const Title = styled.p`
  color: #101828;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
`;
