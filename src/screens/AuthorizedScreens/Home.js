import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home({navigation}) {
  console.log(navigation);

  return (
    <View>
      <Text style={{color: 'red', fontSize: 24, textAlign: 'center'}}>
        Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    size: 24,
    fontWeight: 'bold',
    color: '#f00',
  },
});
