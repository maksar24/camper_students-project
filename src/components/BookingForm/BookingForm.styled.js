import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  max-width: 448px;
  height: fit-content;
  border-radius: 10px;
  border: 1px solid #10182833;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: #475467;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const StyledError = styled.p`
  color: #e44848;
  font-size: 12px;
  padding-left: 8px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 18px;
  border: none;
  background-color: #f7f7f7;
  color: #101828;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
  resize: none;
  ::placeholder {
    color: #10182899;
  }
`;
