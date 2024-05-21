import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 10px 40px;
  height: 80px;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #101828;
  &.active {
    color: #e44848;
  }
  &:hover,
  :focus {
    color: #e44848;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
