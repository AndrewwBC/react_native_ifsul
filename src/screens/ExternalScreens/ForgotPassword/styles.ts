import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  justify-content: center;
  margin-top: 160px;
  padding: 12px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #000;
`;

export const FormContainer = styled.View`
  flex-grow: 1;
  margin-top: 80px;
  gap: 16px;
`;

export const SignInButton = styled.TouchableOpacity`
  padding: 12px;
  background-color: #222;
  color: #fff;
  border-radius: 8px;
  margin-top: 32px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const BackToLogin = styled.Text`
  margin-top: 32px;
  font-size: 16px;
  color: #222;
  text-align: center;
`;

export const LoginText = styled.Text`
  color: ${({ theme }) => theme.purple.dark};
  font-weight: 700;
`;
