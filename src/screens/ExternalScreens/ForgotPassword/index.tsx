/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Alert, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@rneui/themed';

import {
  BackToLogin,
  ButtonText,
  Container,
  Content,
  FormContainer,
  LoginText,
  SignInButton,
  Title,
} from './styles';
import { Icon, Text } from '@rneui/base';
import { LoginUserContext } from '../../../context/LoginUserProvider';
import MyInput from '../../../components/MyInput';
import { ForgotPasswordProps } from '../../../navigation/utils/ForgotPasswordScreenNavigationProps';
import MyButtonHighlight from '../../../components/MyButtonHighlight/MyButtonHighlight';

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
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

          <MyButtonHighlight
            style={{ marginTop: 32, marginBottom: 32 }}
            onPress={handleRetrievePassword}>
            <ButtonText style={{ color: 'white' }}>Recuperar Senha</ButtonText>
          </MyButtonHighlight>

          <BackToLogin style={{ color: '#000', fontSize: 16 }}>
            Retorne para o{' '}
            <LoginText onPress={() => navigation.navigate('SignIn')}>
              Login
            </LoginText>
          </BackToLogin>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default ForgotPassword;
