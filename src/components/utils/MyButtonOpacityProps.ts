import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface MyButtonOpacityProps extends TouchableOpacityProps {
  children: ReactNode;
}
