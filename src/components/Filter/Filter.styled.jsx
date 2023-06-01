import Styled from '@emotion/styled';


export const StyledLabel = Styled.label`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledInput =Styled.input`
width: 300px;
  height: 40px;
  font-size: 16px;
  border-radius: ${({ theme }) => {
    return theme.inputBorderRadius;
  }};
  border: ${({ theme }) => {
    return theme.buttonBorder;
  }};
`;

