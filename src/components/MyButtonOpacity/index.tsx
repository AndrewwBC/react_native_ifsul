import React, { ReactNode, useContext, useState } from 'react';
import { OpacityButton } from './styles';
import { MyButtonOpacityProps } from '../utils/MyButtonOpacityProps';

const MyButtonOpacity = ({ children, ...rest }: MyButtonOpacityProps) => {
  return <OpacityButton {...rest}>{children}</OpacityButton>;
};

export default MyButtonOpacity;
