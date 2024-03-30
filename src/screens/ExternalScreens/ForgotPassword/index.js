/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Alert, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@rneui/themed';

import {
  ButtonText,
  Container,
  Content,
  FormContainer,
  SignInButton,
  Title,
} from './styles';
import { Icon, Text } from '@rneui/base';
import { LoginUserContext } from '../../../context/LoginUserProvider';
import MyInput from '../../../components/MyInput';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const { forgotPassword } = useContext(LoginUserContext);

  function handleRetrievePassword() {
    try {
      setLoading(true);
      forgotPassword(email);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Content>
          <Title>Recuperar Senha</Title>
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
              placeholderTextColor={'grey'}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={text => setEmail(text)}
            />
          </FormContainer>
          <SignInButton onPress={handleRetrievePassword}>
            <ButtonText style={{ color: 'white' }}>Recuperar Senha</ButtonText>
          </SignInButton>

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

export default ForgotPassword;
