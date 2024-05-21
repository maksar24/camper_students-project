import styled from 'styled-components';

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  height: 56px;
  width: fit-content;
  cursor: pointer;
  outline: none;
  background-color: ${({ load }) => (load ? 'transparent' : '#e44848')};
  border: ${({ load }) =>
    load ? '2px solid #47546733' : '2px solid transparent'};
  color: ${({ load }) => (load ? '#101828' : '#fff')};
  text-align: center;
  font-family: 'Inter', sans-serif;
  border-radius: 200px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: ${({ search }) => (search ? '16px 60px' : '16px 40px')};
  transition: 0.5s ease;
  &:hover {
    background-color: #d84343;
  }
  &:focus {
    background-color: #d84343;
  }
`;
