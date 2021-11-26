import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>11 December</GroupTitle>
        <GroupItem>
          <Avatar
            source={{
              uri: "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg",
            }}
          ></Avatar>
          <View>
            <FullName>Angelo Migos</FullName>
            <GreyText>Pulpitis, tooth extraction</GreyText>
          </View>
          <GroupDate>11:25</GroupDate>
        </GroupItem>
      </Group>
    </Container>
  );
}

const GroupDate = styled.Text`
  background: #e9f5ff;
  padding: 5px 10px;
  font-weight: 600;
  color: #4294ff;
`;

const GreyText = styled.Text`
  font-size: 12px;
  color: #8b979f;
`;

const FullName = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const GroupItem = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 10px 0;
`;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000;
  text-align: left;
  margin-bottom: 5px;
`;

const Group = styled.View`
  padding: 0 15px;
`;

const Container = styled.View`
  flex: 1;
  margin: 60px 0;
`;
