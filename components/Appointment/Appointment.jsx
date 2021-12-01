import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Badge  from "../Badge/Badge";
import GreyText  from "../GreyText/GreyText";


const Appointment = ({ navigate, item }) => {
  const { user, diagnosis, active, time } = item;
  return (
    <GroupItem onPress={() => navigate('Patient', item)}>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      ></Avatar>
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
        <GreyText>{diagnosis}</GreyText>
      </View>
      <Badge active={active}>{time}</Badge>
    </GroupItem>
  );
};

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

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Appointment;
