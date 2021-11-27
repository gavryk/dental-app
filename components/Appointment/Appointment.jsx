import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Appointment = ({ user, diagnosis, active, time }) => {
  return (
    <GroupBlock>
      <GroupItem>
            <Avatar
              source={{
                uri: user.avatar,
              }}
            ></Avatar>
            <View style={{ flex: 1 }}>
              <FullName>{user.fullname}</FullName>
              <GreyText>{diagnosis}</GreyText>
            </View>
            <GroupDate active={ active }>{time}</GroupDate>
          </GroupItem>
    </GroupBlock>
  );
};

const GroupDate = styled.Text`
  padding: 7px 15px;
  font-weight: 700;
  color: ${(props) => (props.active ? "#fff" : "#4294ff")};
  border-radius: 18px;
  font-size: 16px;
  background: ${(props) => (props.active ? "#2A86FF" : "#e9f5ff")};
  overflow: hidden;
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

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

const GroupBlock = styled.View`
  padding: 10px 15px;
`;

export default Appointment;