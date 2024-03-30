/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Alert, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import { AuthUserContext } from '../../../context/AuthUserProvider';

import {
  ButtonText,
  Container,
  Content,
  FormContainer,
  SignInButton,
  Title,
} from './styles';
import { Icon, Text } from '@rneui/base';
import MyInput from '../../../components/MyInput';

const SignIn = ({ navigation }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const { theme } = useTheme();

  const { signIn } = useContext(AuthUserContext);

  async function handleSignIn() {
    if (userData.email.length === 0 || userData.password.length === 0) {
      setErrorMsg('Preencha todos campos!');
      Alert.alert('Preencha todos campos');
      return;
    }
    setLoading(true);

    const request = await signIn(userData.email, userData.password);
    console.log(request);

    if (!request.emailVerified) {
      console.log('Email não verificado');
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'AppStack' }],
        }),
      );
    }

    setLoading(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Content>
          <Title>SignIn</Title>
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
              secureTextEntry={showPass}
              placeholder="insira a senha"
              keyboardType="default"
              returnKeyType="go"
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
          <Text
            style={{
              height: 24,
              color: 'red',
              fontSize: 18,
              textAlign: 'center',
              marginTop: 12,
            }}>
            {errorMsg}
          </Text>
          <SignInButton onPress={handleSignIn}>
            <ButtonText style={{ color: 'white' }}>SignIn</ButtonText>
          </SignInButton>

          <TouchableHighlight
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={{
              backgroundColor: 'green',
              borderRadius: 8,
              padding: 12,
              alignItems: 'center',
              marginTop: 24,
            }}>
            <Text style={{ color: 'white', fontSize: 16 }}>SignUp</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
            style={{
              backgroundColor: 'green',
              borderRadius: 8,
              padding: 12,
              alignItems: 'center',
              marginTop: 24,
            }}>
            <Text style={{ color: 'white', fontSize: 16 }}>ForgotPassword</Text>
          </TouchableHighlight>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default SignIn;
