import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { Container, Content, MyButtonText, MyText } from './styles';
import MyButtonHighlight from '../MyButtonHighlight/MyButtonHighlight';
import { AuthUserContext } from '../../context/AuthUserProvider';
import { AuthUserContextProps } from '../../context/utils/AuthUserContextProps';
import { CommonActions, NavigationProp } from '@react-navigation/native';
import { SignOutScreenNavigationProps } from '../../navigation/utils/ScreensNavigationProps';

interface SignOutProps {
  navigation: NavigationProp<SignOutScreenNavigationProps>;
}

const SignOutModal = ({ navigation }: SignOutProps) => {
  const { deleteUserSession } = useContext(
    AuthUserContext,
  ) as AuthUserContextProps;

  async function signOut() {
    await deleteUserSession();

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AuthStack' }],
      }),
    );
  }

  return (
    <Container>
      <Content>
        <MyText>Você realmente deseja sair?</MyText>

        <MyButtonHighlight onPress={signOut}>
          <MyButtonText>Sim</MyButtonText>
        </MyButtonHighlight>
      </Content>
    </Container>
  );
};

export default SignOutModal;
