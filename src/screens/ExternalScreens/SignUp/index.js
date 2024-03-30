/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@rneui/themed';

import {
  ButtonText,
  Container,
  Content,
  FormContainer,
  SignUpButton,
  Title,
} from './styles';

import { Icon, Text } from '@rneui/base';
import { TouchableHighlight } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import { LoginUserContext } from '../../../context/LoginUserProvider';
import MyInput from '../../../components/MyInput';

const SignUp = ({ navigation }) => {
  const [userData, setUserData] = useState({
    email: 'pelotas@maail.com',
    password: '111111',
  });
  const [loading, setLoading] = useState(false);
  const [signUpResponse, setSignUpResponse] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [showPass, setShowPass] = useState(true);
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Content>
          <Title>SignUp</Title>
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
              placeholder="Senha"
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
              color: 'red',
              fontSize: 16,
              fontWeight: 600,
              marginTop: 12,
            }}>
            {errorMsg && errorMsg}
          </Text>

          <SignUpButton onPress={handleSignUp}>
            <ButtonText style={{ color: 'white' }}>
              {signUpResponse ? signUpResponse : 'SignUp'}
            </ButtonText>
          </SignUpButton>

          <TouchableHighlight
            onPress={() => {
              navigation.navigate('SignIn');
            }}
            style={{
              backgroundColor: 'green',
              borderRadius: 8,
              padding: 12,
              alignItems: 'center',
              marginTop: 24,
            }}>
            <Text style={{ color: 'white', fontSize: 16 }}>SignIn</Text>
          </TouchableHighlight>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default SignUp;
