import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { AuthUserContext } from '../../../context/AuthUserProvider';
import { CommonActions } from '@react-navigation/native';
import {
  BorderPostInfo,
  Container,
  IconsAndCreatedAt,
  PostContainer,
  PostHeader,
  PostImage,
  PostInfo,
  UserProfileImage,
  Username,
} from './styles';

import { Icon } from '@rneui/base';

export default function Feed({ navigation }: any) {
  console.log(navigation);

  const data = [
    {
      url: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      userName: '@andrew',
      description: 'É um bom garoto, ou não é?!?',
      created_at: '02/05/2023',
    },
    {
      url: 'https://images.unsplash.com/photo-1616781296073-65d3f087de41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
      userName: '@sasa',
      description: 'É um bom garoto, ou não é?!?',
      created_at: '02/05/2023',
    },
    {
      url: 'https://images.unsplash.com/photo-1616781296073-65d3f087de41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
      userName: '@andrewaaa',
      description: 'É um bom garoto, ou não é?!?',
      created_at: '02/05/2023',
    },
  ];

  const { deleteUserSession } = useContext(AuthUserContext);

  function handleLogOut() {
    try {
      deleteUserSession();
    } catch (err) {
      console.log(err);
    } finally {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'AuthStack' }],
        }),
      );

      //navigation.navigate('SignIn');
    }
  }

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item.userName}
        contentContainerStyle={{ gap: 48 }}
        renderItem={({ item }) => (
          <PostContainer>
            <PostHeader>
              <UserProfileImage source={{ uri: item.url }} />
              <Username>{item.userName}</Username>
            </PostHeader>
            <PostImage
              source={{
                uri: item.url,
              }}
            />
            <View>
              <IconsAndCreatedAt>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <Icon
                    name="cards-heart-outline"
                    type="material-community"
                    size={26}
                    color={'#000'}
                  />
                  <Icon
                    name="comment-outline"
                    type="material-community"
                    size={26}
                    color={'#000'}
                  />
                  <Icon
                    name="share-outline"
                    type="material-community"
                    size={26}
                    color={'#000'}
                  />
                </View>
                <Text style={{ color: '#222' }}>{item.created_at}</Text>
              </IconsAndCreatedAt>
              <PostInfo>
                <Text style={{ color: '#222' }}>{item.description}</Text>
                <BorderPostInfo />
              </PostInfo>
            </View>
          </PostContainer>
        )}
      />
    </Container>
  );
}
