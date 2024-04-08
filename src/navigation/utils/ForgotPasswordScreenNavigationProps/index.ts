import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface ForgotPasswordScreenNavigationProps extends ParamListBase {
  SignIn: undefined;
}

export interface ForgotPasswordProps {
  navigation: NavigationProp<ForgotPasswordScreenNavigationProps>;
}
