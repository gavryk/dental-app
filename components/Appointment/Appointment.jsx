import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components/native";
import Badge from "../Badge/Badge";
import GreyText from "../GreyText/GreyText";
import getAvatarColor from "../../utils/getAvatarColor";

const Appointment = ({ navigate, item }) => {
  const { patient, diagnosis, active, time } = item;
  const avatarColors = getAvatarColor(patient.fullname[0].toUpperCase());
  return (
    <TouchableWithoutFeedback onPress={() => navigate("Patient", item)}>
      <GroupItem>
        <Avatar
          style={{
            backgroundColor: avatarColors.background,
          }}
        >
          <Letter style={{ color: avatarColors.color }}>
            {patient.fullname[0].toUpperCase()}
          </Letter>
        </Avatar>

        <View style={{ flex: 1 }}>
          <FullName>{patient.fullname}</FullName>
          <GreyText>{diagnosis}</GreyText>
        </View>
        {time && <Badge active={active}>{time}</Badge>}
      </GroupItem>
    </TouchableWithoutFeedback>
  );
};

const FullName = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const Letter = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: -1px;
`;

const Avatar = styled.ImageBackground`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

const GroupItem = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
  background-color: #fff;
`;

export default Appointment;
