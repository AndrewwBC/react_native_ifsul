import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.neutral.c2};
`;

export const Content = styled.KeyboardAvoidingView`
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

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const ForgotPasswordContainer = styled.View`
  align-items: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  color: ${({ theme }) => theme.purple.dark};
  font-size: 16px;
  font-weight: 700;
`;

export const ErrorMsg = styled.Text`
  height: 24px;
  color: ${({ theme }) => theme.error};
  font-size: 18px;
  margin-top: 12px;
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  margin-top: 24px;
  gap: 48px;
`;

export const BordersContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Border = styled.View`
  border: 1px solid gray;
  height: 2px;
  flex: 1;
`;

export const SignInText = styled.Text`
  color: ${({ theme }) => theme.neutral.c5};
  text-align: center;
  font-size: 16px;
`;

export const SignInTextNavigator = styled.Text`
  color: ${({ theme }) => theme.purple.dark};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

export const FirstStepButtonContainer = styled.View`
  align-items: flex-end;
`;

export const SecondStepButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

// const { signUp } = useContext(LoginUserContext);

// async function handleSignUp() {
//   try {
//     setErrorMsg('');
//     setLoading(true);
//     const { auth } = firebase;
//     const response = await signUp({
//       email: userData.email,
//       password: userData.password,
//     });

//     setSignUpResponse('Registrado com Sucesso!');
//   } catch (error) {
//     console.log(error.message);
//     setErrorMsg(error.message);
//   } finally {
//     setLoading(false);
//   }
// }
