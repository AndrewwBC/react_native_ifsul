/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions, NavigationProp } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import { AuthUserContext } from '../../../context/AuthUserProvider';

import {
  Border,
  BordersContainer,
  ButtonText,
  ButtonsContainer,
  Container,
  Content,
  ErrorMsg,
  FinalStepContainer,
  FirstStepButtonContainer,
  FormContainer,
  SecondStepButtonContainer,
  SignInText,
  SignInTextNavigator,
  SignUpResponse,
  Title,
  UserData,
  UserDataText,
} from './styles';
import { Icon, Text } from '@rneui/base';
import MyInput from '../../../components/MyInput';
import MyButtonOpacity from '../../../components/MyButtonOpacity';
import { LoginUserContext } from '../../../context/LoginUserProvider';
import { SignUpScreenNavigationProps } from '../../../navigation/utils/ScreensNavigationProps';
import { firebase } from '@react-native-firebase/auth';

interface SignUpProps {
  navigation: NavigationProp<SignUpScreenNavigationProps>;
}

const SignUp = ({ navigation }: SignUpProps) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [signUpResponse, setSignUpResponse] = useState('');

  const [registerSteps, setRegisterSteps] = useState({
    firstStep: true,
    secondStep: false,
    allStepsConcluded: false,
  });

  const { signUp } = useContext(LoginUserContext);

  async function handleSignUp() {
    try {
      setLoading(true);
      setErrorMsg('');
      const response = await signUp({
        email: userData.email,
        password: userData.password,
      });

      console.log(response);
      setSignUpResponse('Registrado com Sucesso!');
      Alert.alert('Registrado com sucesso!');
    } catch (error: any) {
      console.log(error.message);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleEmailChange(email: string) {
    const isEmailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(
      email,
    );

    if (!isEmailValid)
      setUserData(prevState => ({
        ...prevState,
        email,
      }));
  }

  function handlePasswordChange(password: string) {
    if (userData.password.length > 6) {
      setUserData(prevState => ({
        ...prevState,
        password,
      }));
    }
  }

  function confirmPasswordAndSkip() {
    if (userData.confirmPassword !== userData.password) {
      Alert.alert('As senhas não conferem!');
      return;
    }

    setRegisterSteps({
      firstStep: false,
      secondStep: false,
      allStepsConcluded: true,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Content behavior="position">
          <Title>Registre-se</Title>

          {registerSteps.firstStep && (
            <FormContainer>
              <MyInput
                leftIcon={
                  <Icon
                    name="badge-account"
                    type="material-community"
                    size={26}
                    color={'black'}
                  />
                }
                placeholder="insira o seu nome de usuario"
                keyboardType="email-address"
                returnKeyType="next"
              />
              <MyInput
                leftIcon={
                  <Icon
                    name="email-check-outline"
                    type="material-community"
                    size={26}
                    color={'black'}
                  />
                }
                placeholder="insira o seu email"
                keyboardType="email-address"
                returnKeyType="next"
                onChangeText={email => handleEmailChange(email)}
              />
            </FormContainer>
          )}

          {registerSteps.secondStep && (
            <FormContainer>
              <MyInput
                placeholder="insira a senha"
                keyboardType="default"
                returnKeyType="go"
                autoCapitalize={'none'}
                secureTextEntry={showPass}
                leftIcon={
                  <Icon
                    type="material-community"
                    name="form-textbox-password"
                    size={26}
                    color={'black'}
                  />
                }
                onChangeText={password => handlePasswordChange(password)}
              />
              <MyInput
                placeholder="confirme a senha"
                keyboardType="default"
                returnKeyType="go"
                autoCapitalize={'none'}
                secureTextEntry={showPass}
                leftIcon={
                  <Icon
                    type="material-community"
                    name="form-textbox-password"
                    size={26}
                    color={'black'}
                  />
                }
                rightIcon={
                  <Icon
                    type="material-community"
                    name={showPass ? 'eye-off' : 'eye'}
                    size={26}
                    color={'black'}
                    onPress={() => setShowPass(!showPass)}
                  />
                }
                onChangeText={password =>
                  setUserData(prevState => ({
                    ...prevState,
                    confirmPassword: password,
                  }))
                }
              />
            </FormContainer>
          )}

          {registerSteps.firstStep && (
            <FirstStepButtonContainer>
              <MyButtonOpacity>
                <ButtonText
                  onPress={() =>
                    setRegisterSteps({
                      firstStep: false,
                      secondStep: true,
                      allStepsConcluded: false,
                    })
                  }
                  style={{ color: 'white' }}>
                  Avançar para senha
                </ButtonText>
              </MyButtonOpacity>
            </FirstStepButtonContainer>
          )}

          {registerSteps.secondStep &&
            registerSteps.allStepsConcluded === false && (
              <SecondStepButtonContainer>
                <MyButtonOpacity>
                  <ButtonText
                    onPress={() =>
                      setRegisterSteps({
                        firstStep: true,
                        secondStep: false,
                        allStepsConcluded: false,
                      })
                    }
                    style={{ color: 'white' }}>
                    Retornar
                  </ButtonText>
                </MyButtonOpacity>

                <MyButtonOpacity>
                  <ButtonText
                    onPress={confirmPasswordAndSkip}
                    style={{ color: 'white' }}>
                    Avançar para conferir
                  </ButtonText>
                </MyButtonOpacity>
              </SecondStepButtonContainer>
            )}

          {registerSteps.allStepsConcluded && (
            <FinalStepContainer>
              <UserData>
                {userData.email && (
                  <UserDataText>Seu email: {userData.email}</UserDataText>
                )}
                {userData.password && (
                  <UserDataText>Sua senha: {userData.password}</UserDataText>
                )}
              </UserData>
              <MyButtonOpacity>
                <ButtonText
                  onPress={() =>
                    setRegisterSteps({
                      firstStep: false,
                      secondStep: true,
                      allStepsConcluded: false,
                    })
                  }
                  style={{ color: 'white' }}>
                  Retornar
                </ButtonText>
              </MyButtonOpacity>

              <MyButtonOpacity onPress={handleSignUp} disabled={loading}>
                <ButtonText style={{ color: 'white' }}>
                  {signUpResponse ? signUpResponse : 'Confirmar cadastro'}
                </ButtonText>
              </MyButtonOpacity>

              <SignUpResponse>{signUpResponse}</SignUpResponse>
              <ErrorMsg>{errorMsg}</ErrorMsg>
            </FinalStepContainer>
          )}

          <ButtonsContainer>
            <BordersContainer>
              <Border />
              <Text style={{ color: 'gray' }}>OU</Text>
              <Border />
            </BordersContainer>

            <SignInText
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              Já possui uma conta? Faça
              <SignInTextNavigator> Login!</SignInTextNavigator>
            </SignInText>
          </ButtonsContainer>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default SignUp;
