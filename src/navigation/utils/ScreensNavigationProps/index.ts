import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface ForgotPasswordScreenNavigationProps extends ParamListBase {
  SignIn: undefined;
}

export interface ForgotPasswordProps {
  navigation: NavigationProp<ForgotPasswordScreenNavigationProps>;
}

export interface SignInScreenNavigationProps extends ParamListBase {
  ForgotPassword: undefined;
  SignUp: undefined;
}

export interface SignOutScreenNavigationProps extends ParamListBase {}

export interface SignUpScreenNavigationProps extends ParamListBase {
  SignIn: undefined;
}
