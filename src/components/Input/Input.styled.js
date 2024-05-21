import styled from 'styled-components';

export const CustomInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: #f7f7f7;
  padding: ${({ $location }) => ($location ? '18px 18px 18px 44px' : '18px')};
  color: #101828;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
  ::placeholder {
    color: #10182899;
  }
`;
