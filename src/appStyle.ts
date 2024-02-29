import styled from 'styled-components/native';

import {TextProps} from 'react-native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 24px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: aliceblue;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px 32px;
  background-color: red;
  color: #f9f9f9;
  border-radius: 12px;
`;

interface ValueOfCountProps extends TextProps {
  value: number;
}

export const ValueOfCount: React.FC<ValueOfCountProps> = styled.Text`
  font-size: 32px;
  color: rgb(0, ${({value}) => value * 25}, 0);
  margin-top: 48px;
`;
