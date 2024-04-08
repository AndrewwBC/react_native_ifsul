import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 12px;
`;

export const PostContainer = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
  padding: 0 12px;
`;

export const UserProfileImage = styled.Image`
  border-radius: 9999px;
  width: 36px;
  height: 36px;
  margin-right: 8px;
`;

export const Username = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const PostImage = styled.Image`
  width: 100vw;
  height: 400;
`;

export const IconsAndCreatedAt = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0;
  padding: 0 12px;
`;

export const PostInfo = styled.View`
  background-color: 'red';
  padding: 0 12px;
  margin-bottom: 24px;
`;

export const BorderPostInfo = styled.View`
  width: 100%;
  height: 1px;
  background: grey;
`;
