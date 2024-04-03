import { firebase } from '@react-native-firebase/auth';
import React, { ErrorInfo, ReactNode, createContext } from 'react';

export const LoginUserContext = createContext({});

interface LoginUserProviderProps {
  children: ReactNode;
}

interface handleSignUpProps {
  email: string;
  password: string;
}

export const LoginUserProvider = ({ children }: LoginUserProviderProps) => {
  async function forgotPassword(email: string) {
    try {
      const { auth } = firebase;
      const request = await auth().sendPasswordResetEmail(email);

      console.log(request);
      return 'Email enviado!';
    } catch (error: any) {
      const errorMsg = error.message;
      throw new Error(errorMsg);
    }
  }

  async function signUp({ email, password }: handleSignUpProps) {
    try {
      const { auth } = firebase;
      const request = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      request.user.sendEmailVerification();
    } catch (error: any) {
      const errorMsg = error.message;
      throw new Error(errorMsg);
    }
  }

  return (
    <LoginUserContext.Provider value={{ forgotPassword, signUp }}>
      {children}
    </LoginUserContext.Provider>
  );
};
