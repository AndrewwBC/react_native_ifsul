import styled from 'styled-components/native';

export const OpacityButton = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${({ theme }) => theme.yellow.dark};
  color: #fff;
  border-radius: 8px;
  align-items: center;

  &:disabled {
    background-color: grey;
  }
`;
