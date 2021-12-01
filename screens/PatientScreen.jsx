import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons"; 
import styled from "styled-components/native";

import GreyText from "../components/GreyText/GreyText";
import { Badge, CustomButton } from "../components";
import { Text } from "react-native";

const PatientScreen = ({ navigation, route }) => {
  const { user } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Patient Card",
      headerStyle: {
        backgroundColor: "#2A86FF",
        elevation: 0.8,
        shadowOpacity: 0.8
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: "20px",
      },
    });
  }, [navigation]);

  return (
    <Container>
      <PatientDetails>
        <PatientFullName>{ user.fullname }</PatientFullName>
        <GreyText>{ user.phone }</GreyText>
        <PatientButtons>
          <CustomButton>Teeth Formula</CustomButton>
          <CustomButton width={"50px"} color={"#39ca1d"}>
            <FontAwesome name="phone" size={20} color="white" />
          </CustomButton>
        </PatientButtons>
      </PatientDetails>

      <PatientAppointments>
        <AppointmentCard>
            <AppointmentCardRow>
              <FontAwesome5 name="tooth" size={16} color="grey" />
              <AppointmentCardLabel>Tooth: <Text style={{ fontWeight: '700' }}>12</Text></AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow>
              <FontAwesome5 name="clipboard-list" size={16} color="grey" />
              <AppointmentCardLabel>Diagnosis: <Text style={{ fontWeight: '700' }}>Pulpit</Text></AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow style={{ marginTop: 15, justifyContent: 'space-between' }}>
              <Badge style={{ width: 200 }} active>11.10.2021 - 15:40</Badge>
              <Badge color='green'>100$</Badge>
            </AppointmentCardRow>
        </AppointmentCard>
      </PatientAppointments>

    </Container>
  );
};

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5.5px;
  margin-bottom: 5.5px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCard = styled.View`
  shadow-color: grey;
  elevation: 0.4;
  shadow-opacity: 0.3;
  shadow-radius: 3px;
  shadow-offset: 0px 1px;
  padding: 15px 20px;
  border-radius: 10px;
  background: #fff;
`;

const PatientAppointments = styled.View`
  background-color: #f8fafd;
  flex: 1;
  padding: 20px;
`;

const PatientButtons = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 20px 0;
`;

const PatientFullName = styled.Text`
  font-size: 26px;
  color: #000;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

const PatientDetails = styled(Container)`
  flex: .3;
  padding: 15px;
  /* padding: 15px; */
  border-width: .5px;
  border-color: #cccbcb8b;
  border-style: solid;
`;

// const BackBtn = styled.TouchableOpacity``;


export default PatientScreen;
