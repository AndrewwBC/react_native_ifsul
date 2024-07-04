/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState, useRef } from 'react';
import { CommonActions } from '@react-navigation/native';
import { AuthUserContext } from '../../context/AuthUserProvider';

import styled from 'styled-components/native';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { AuthUserContextProps } from '../../context/utils/AuthUserContextProps';

const dogHome = require('../../assets/images/dogHome.jpg');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image``;

const Preload = ({ navigation }) => {
  const { retrieveUserSession, signIn } = useContext(
    AuthUserContext,
  ) as AuthUserContextProps;

  const [opacity, setOpacity] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const entrar = async () => {
    const userSession = await retrieveUserSession();

    if (userSession) {
      const result = await signIn(userSession.email, userSession.pass);

      console.log(userSession, result);

      if ('userToken' in result) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'AppStack' }],
          }),
        );
      }
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'SignIn' }],
        }),
      );
    }
  };

  useEffect(() => {
    fadeIn();
    entrar();
  }, []);

  return (
    <Animated.View
      style={[
        styles.fadingContainer,
        {
          opacity: fadeAnim,
        },
      ]}>
      <View style={styles.textContainer}>
        <Text style={styles.fadingText}>Pets4Ever</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    flex: 1,
    backgroundColor: '#fb1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    borderRadius: 24,
    elevation: 1,
    padding: 8,
    width: '90%',
  },
  fadingText: {
    fontSize: 38,
    color: 'black',
  },
});

export default Preload;
