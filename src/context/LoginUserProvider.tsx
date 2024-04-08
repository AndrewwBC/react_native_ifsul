import { firebase } from '@react-native-firebase/auth';
import React, { ErrorInfo, ReactNode, createContext } from 'react';

interface LoginUserProviderProps {
  children: ReactNode;
}

interface handleSignUpProps {
  email: string;
  password: string;
}

interface LoginUserContextProps {
  forgotPassword: (email: string) => Promise<void>;
  signUp: ({ email, password }: handleSignUpProps) => Promise<void>;
}

export const LoginUserContext = createContext<LoginUserContextProps>({
  forgotPassword: function (email: string): Promise<void> {
    throw new Error('Function not implemented.');
  },
  signUp: function ({ email, password }: handleSignUpProps): Promise<void> {
    throw new Error('Function not implemented.');
  },
});

export const LoginUserProvider = ({ children }: LoginUserProviderProps) => {
  async function forgotPassword(email: string) {
    try {
      const { auth } = firebase;
      const request = await auth().sendPasswordResetEmail(email);

      console.log(request);
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
