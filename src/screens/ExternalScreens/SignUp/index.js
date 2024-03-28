/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@rneui/themed';

import {MyInput} from '../../../components/MyInput';

import {
  ButtonText,
  Container,
  Content,
  FormContainer,
  SignUpButton,
  Title,
} from './styles';

import {Text} from '@rneui/base';
import {TouchableHighlight} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [signUpResponse, setSignUpResponse] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const {theme} = useTheme();

  async function handleSignUp() {
    try {
      setLoading(true);
      const {auth} = firebase;
      const request = await auth().createUserWithEmailAndPassword(
        userData.email,
        userData.password,
      );

      if (request.additionalUserInfo.isNewUser) {
        setSignUpResponse('Registrado com sucesso!');
      }
    } catch (error) {
      console.log(error.message);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Content>
          <Title>SignUp</Title>
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
              secureTextEntry={true}
              onChangeText={text =>
                setUserData(prevState => ({
                  ...prevState,
                  password: text,
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
            <ButtonText style={{color: 'white'}}>
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
            <Text style={{color: 'white', fontSize: 16}}>SignIn</Text>
          </TouchableHighlight>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default SignUp;
