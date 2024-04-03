import React, { ReactNode, createContext } from 'react';
import auth from '@react-native-firebase/auth';
import EncryptedStorage from 'react-native-encrypted-storage';

import { AuthUserContextProps } from './utils/AuthUserContextProps';

export const AuthUserContext = createContext<AuthUserContextProps | null>(null);

export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
  /*
    Cache criptografado do usuário
  */
  async function storeUserSession(email: string, pass: string) {
    try {
      await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify({
          email,
          pass,
        }),
      );
    } catch (e) {
      console.error('AuthUserProvider, storeUserSession: ' + e);
    }
  }

  async function retrieveUserSession() {
    try {
      const session = await EncryptedStorage.getItem('user_session');
      console.log(session);
      return session !== null ? JSON.parse(session) : null;
    } catch (e) {
      console.error('AuthUserProvider, retrieveUserSession: ' + e);
    }
  }

  async function deleteUserSession() {
    try {
      const sessionExists = await EncryptedStorage.getItem('user_session');

      if (sessionExists) {
        auth().signOut();
        await EncryptedStorage.removeItem('user_session');
      }
    } catch (err: any) {
      console.error(err.message);
    }
  }

  async function signIn(email: string, pass: string) {
    try {
      const { user } = await auth().signInWithEmailAndPassword(email, pass);

      if (!auth().currentUser!.emailVerified) {
        user.sendEmailVerification();
        return { emailIsNotVerified: true };
      }

      const userToken = await user.getIdToken(true);

      //await storeUserSession(email, pass);
      return { userToken };
    } catch (e: any) {
      const errorMsg = launchServerMessageErro(e);
      return { errorMsg };
    }
  }

  //função utilitária
  function launchServerMessageErro(e: { code: string }) {
    switch (e.code) {
      case 'auth/user-not-found':
        return 'Usuário não cadastrado.';
      case 'auth/wrong-password':
        return 'Erro na senha.';
      case 'auth/invalid-email':
        return 'Email inválido.';
      case 'auth/user-disabled':
        return 'Usuário desabilitado.';
      case 'auth/email-already-in-use':
        return 'Email em uso. Tente outro email.';
      default:
        return 'Erro desconhecido. Contate o administrador';
    }
  }
  return (
    <AuthUserContext.Provider
      value={{
        signIn,
        deleteUserSession,
        retrieveUserSession,
        storeUserSession,
      }}>
      {children}
    </AuthUserContext.Provider>
  );
};
