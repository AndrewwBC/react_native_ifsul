/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';
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
  FirstStepButtonContainer,
  FormContainer,
  SecondStepButtonContainer,
  SignInText,
  SignInTextNavigator,
  StepsButtonsContainer,
  Title,
} from './styles';
import { Icon, Text } from '@rneui/base';
import MyInput from '../../../components/MyInput';
import MyButtonOpacity from '../../../components/MyButtonOpacity';
import { LoginUserContext } from '../../../context/LoginUserProvider';

const SignIn = ({ navigation }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [registerSteps, setRegisterSteps] = useState({
    firstStep: true,
    secondStep: false,
    allStepsConcluded: false,
  });

  const { theme } = useTheme();

  const { signUp } = useContext(LoginUserContext);

  async function handleSignUp() {
    try {
      setErrorMsg('');
      setLoading(true);
      const { auth } = firebase;
      const response = await signUp({
        email: userData.email,
        password: userData.password,
      });

      setSignUpResponse('Registrado com Sucesso!');
    } catch (error) {
      console.log(error.message);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  console.log(showPass);
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
                onChangeText={email =>
                  setUserData(prevState => ({
                    ...prevState,
                    email,
                  }))
                }
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
                onChangeText={email =>
                  setUserData(prevState => ({
                    ...prevState,
                    email,
                  }))
                }
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
                onChangeText={password =>
                  setUserData(prevState => ({
                    ...prevState,
                    password,
                  }))
                }
              />
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
                    password,
                  }))
                }
              />
            </FormContainer>
          )}

          <ErrorMsg>{errorMsg}</ErrorMsg>

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
                  Avançar
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
                    onPress={() =>
                      setRegisterSteps({
                        firstStep: false,
                        secondStep: true,
                        allStepsConcluded: true,
                      })
                    }
                    style={{ color: 'white' }}>
                    Avançar
                  </ButtonText>
                </MyButtonOpacity>
              </SecondStepButtonContainer>
            )}

          {registerSteps.allStepsConcluded && (
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
                <ButtonText style={{ color: 'white' }}>Concluir</ButtonText>
              </MyButtonOpacity>
            </SecondStepButtonContainer>
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

export default SignIn;
