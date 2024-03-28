/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {Alert, TouchableHighlight} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonActions} from '@react-navigation/native';
import {useTheme} from '@rneui/themed';

import {AuthUserContext} from '../../../context/AuthUserProvider';
import {MyInput} from '../../../components/MyInput';

import {
  ButtonText,
  Container,
  Content,
  FormContainer,
  SignInButton,
  Title,
} from './styles';
import {Text} from '@rneui/base';

const SignIn = ({navigation}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);

  const {theme} = useTheme();

  const {signIn} = useContext(AuthUserContext);

  async function handleSignIn() {
    setLoading(true);

    const request = await signIn(userData.email, userData.password);
    console.log(request);

    if (!request.emailVerified) {
      console.log('Email não verificado');
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'AppStack'}],
        }),
      );
    }

    setLoading(false);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Content>
          <Title>SignIn</Title>
          <FormContainer>
            <MyInput
              placeholder="insira o seu email"
              placeholderTextColor={'grey'}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={text =>
                setUserData(prevState => ({
                  ...prevState,
                  email: text,
                }))
              }
            />
            <MyInput
              placeholder="insira a sua senha"
              placeholderTextColor={'grey'}
              keyboardType="default"
              returnKeyType="go"
              secureTextEntry={showPass}
              onChangeText={text =>
                setUserData(prevState => ({
                  ...prevState,
                  password: text,
                }))
              }
            />
          </FormContainer>
          <SignInButton onPress={handleSignIn}>
            <ButtonText style={{color: 'white'}}>SignIn</ButtonText>
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
            <Text style={{color: 'white', fontSize: 16}}>SignUp</Text>
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
            <Text style={{color: 'white', fontSize: 16}}>ForgotPassword</Text>
          </TouchableHighlight>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default SignIn;
