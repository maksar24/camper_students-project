import styled from 'styled-components';
import Icon from 'components/Icon/Icon';

export const Form = styled.form`
  max-width: 360px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  input:focus + svg {
    stroke: #101828;
  }
`;

export const IconStyled = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  width: 18px;
  height: 20px;
  fill: transparent;
  stroke: #10182899;
`;

export const GroupTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #10182899;
  margin-bottom: ${({ primary }) => (primary ? '8px' : '14px')};
`;

export const MainWrapper = styled.div`
  margin-bottom: 32px;
`;

export const SubgroupTitle = styled.p`
  width: 100%;
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  border-bottom: 1px solid #1018281a;
`;

export const List = styled.ul`
  border: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;
