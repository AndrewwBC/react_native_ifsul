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

export const PostAcionsAndInfos = styled.View`
  padding: 12px;
  gap: 12px;
`;

export const IconsAndCreatedAt = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PostInfo = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: 'red';
`;

export const PostInfoDescription = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.neutral.c8};
`;

export const BorderPostInfo = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
`;

export const CommentContainer = styled.View`
  gap: 12px;
`;

export const SeeAllComments = styled.Text`
  color: ${({ theme }) => theme.neutral.c6};
  font-weight: 600;
`;
