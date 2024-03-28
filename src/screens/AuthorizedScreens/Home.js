import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthUserContext} from '../../context/AuthUserProvider';
import {CommonActions} from '@react-navigation/native';

export default function Home({navigation}) {
  console.log(navigation);

  const {deleteUserSession} = useContext(AuthUserContext);

  function handleLogOut() {
    try {
      deleteUserSession();
    } catch (err) {
      console.log(err);
    } finally {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'AuthStack'}],
        }),
      );

      //navigation.navigate('SignIn');
    }
  }

  return (
    <View>
      <Text style={{color: 'red', fontSize: 24, textAlign: 'center'}}>
        Home
      </Text>

      <TouchableOpacity
        onPress={handleLogOut}
        style={{backgroundColor: 'red', padding: 16}}>
        <Text>LogOut</Text>
      </TouchableOpacity>
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
