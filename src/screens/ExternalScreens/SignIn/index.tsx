/* eslint-disable react-native/no-inline-styles */
import React, { DispatchWithoutAction, useContext, useState } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CommonActions,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
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
  ForgotPasswordContainer,
  ForgotPasswordText,
  FormContainer,
  SignUpText,
  SignUpTextNavigator,
  Title,
} from './styles';
import { Icon, Text } from '@rneui/base';
import MyInput from '../../../components/MyInput';
import MyButtonOpacity from '../../../components/MyButtonOpacity';
import { AuthUserContextProps } from '../../../context/utils/AuthUserContextProps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListExternalRoutes } from '../../../navigation/utils/RootStackParamListExternalRoutes';

type ForgotPassRoute = RouteProp<
  RootStackParamListExternalRoutes,
  'ForgotPassword'
>;

type RegisterRoute = RouteProp<RootStackParamListExternalRoutes, 'SignUp'>;

const SignIn = ({
  navigation,
}: {
  navigation: NavigationProp<DispatchWithoutAction>;
}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const { theme } = useTheme();

  const { signIn } = useContext(AuthUserContext) as AuthUserContextProps;

  async function handleSignIn() {
    setLoading(true);
    if (userData.email.length === 0 || userData.password.length === 0) {
      setErrorMsg('Preencha todos campos!');
      Alert.alert('Preencha todos campos');
      return;
    }

    const request = await signIn(userData.email, userData.password);

    if ('emailIsNotVerified' in request) {
      setErrorMsg('Email não verificado!');
      Alert.alert('Email não verificado');
    }
    if ('userToken' in request) {
      console.log(request.userToken);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'AppStack' }],
        }),
      );
    }

    if ('errorMsg' in request) {
      setErrorMsg(request.errorMsg!);
      Alert.alert(request.errorMsg!);
    }

    setLoading(false);
  }
  console.log(showPass);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Content behavior="height">
          <Title>Pets4Ever</Title>
          <FormContainer>
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
            <ForgotPasswordContainer>
              <ForgotPasswordText
                onPress={() => {
                  navigation.navigate<ForgotPassRoute>('ForgotPassword');
                }}>
                Esqueceu a senha?
              </ForgotPasswordText>
            </ForgotPasswordContainer>
          </FormContainer>
          <ErrorMsg>{errorMsg}</ErrorMsg>

          <ButtonsContainer>
            <MyButtonOpacity onPress={handleSignIn}>
              <ButtonText style={{ color: 'white' }}>Entrar</ButtonText>
            </MyButtonOpacity>

            <BordersContainer>
              <Border />
              <Text style={{ color: 'gray' }}>OU</Text>
              <Border />
            </BordersContainer>

            <SignUpText
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              Ainda não possui uma conta?
              <SignUpTextNavigator> Registre-se</SignUpTextNavigator>
            </SignUpText>
          </ButtonsContainer>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default SignIn;
