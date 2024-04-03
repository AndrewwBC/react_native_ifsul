import { TextInputProps } from 'react-native';
import React, { ReactNode } from 'react';
import { Container, Input } from './styles';

interface MyInputProps extends TextInputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const MyInput = ({ leftIcon, rightIcon, ...rest }: MyInputProps) => {
  return (
    <Container>
      {leftIcon}

      <Input placeholderTextColor={'#999'} numberOfLines={1} {...rest} />

      {rightIcon}
    </Container>
  );
};

export default MyInput;
