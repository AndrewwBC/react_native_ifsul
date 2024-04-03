import { ReactNode } from 'react';
import { TouchableHighlightProps } from 'react-native';

export interface MyButtonHighlightProps extends TouchableHighlightProps {
  children: ReactNode;
}
