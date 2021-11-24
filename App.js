import React from "react";
import { Text } from "react-native";
import styled from 'styled-components/native'

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>11 December</GroupTitle>
        <GroupItem>
          <Avatar source={{uri: 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg' }}></Avatar>
          <FullName>Angelo Migos</FullName>
        </GroupItem>          
      </Group>      
    </Container>
  );
}

const FullName = styled.Text`

`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

const GroupItem = styled.View`
  padding: 10px 0;
`;

const GroupTitle = styled.Text`
  font-weight: 800;    
  font-size: 22px;
  color: #000;
  text-align: left;
  margin-bottom: 15px;
`;

const Group = styled.View`
  padding: 0 15px;
`;

const Container = styled.View`
  flex: 1;
  margin: 50px 0;
`; 
