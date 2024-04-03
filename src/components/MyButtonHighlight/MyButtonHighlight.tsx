import React from 'react';
import { MyButtonHighlightProps } from '../utils/MyButtonHighlightProps';
import { HighlightButton } from './styles';

const MyButtonHighlight = ({ children, ...rest }: MyButtonHighlightProps) => {
  return <HighlightButton {...rest}>{children}</HighlightButton>;
};

export default MyButtonHighlight;
