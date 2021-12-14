import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import styled from "styled-components/native";

import GreyText from "../components/GreyText/GreyText";
import { Badge, CustomButton } from "../components";
import { Text, ActivityIndicator, Linking } from "react-native";
import { patientsApi } from "../utils/api";

const PatientScreen = ({ navigation, route }) => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { patient } = route.params;

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

  useEffect(() => {
    const id = patient._id; 
    //Get Patient Appointments
    patientsApi
      .show(id)
      .then(({data}) => {
        setAppointments(data.data.appointments);
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      })
  }, [])

  return (
    <Container>
      <PatientDetails>
        <PatientFullName>{patient.fullname}</PatientFullName>
        <GreyText>{patient.phone}</GreyText>
        <PatientButtons>
          <CustomButton>Teeth Formula</CustomButton>
          <CustomButton onPress={() => Linking.openURL(`tel: ${ patient.phone }`)} width={"50px"} color={"#39ca1d"}>
            <FontAwesome name="phone" size={20} color="white" />
          </CustomButton>
        </PatientButtons>
      </PatientDetails>

      { isLoading 
      ? (<ActivityIndicator size="large" color="#2A86FF" />) 
      : (appointments.map((appointment) => (
        <PatientAppointments key={appointment._id}>
          <AppointmentCard>
            <MoreButton>
              <MaterialIcons
                name="more-vert"
                size={24}
                color="rgba(0, 0, 0, .3)"
              />
            </MoreButton>
            <AppointmentCardRow>
              <FontAwesome5 name="tooth" size={16} color="grey" />
              <AppointmentCardLabel>
                Tooth:{" "}
                <Text style={{ fontWeight: "700" }}>
                  {appointment.dentNumber}
                </Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow>
              <FontAwesome5 name="clipboard-list" size={16} color="grey" />
              <AppointmentCardLabel>
                Diagnosis:{" "}
                <Text style={{ fontWeight: "700" }}>
                  {appointment.diagnosis}
                </Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow
              style={{ marginTop: 15, justifyContent: "space-between" }}
            >
              <Badge style={{ width: 200 }} active>
                {appointment.date} - {appointment.time}
              </Badge>
              <Badge color="green">{appointment.price}$</Badge>
            </AppointmentCardRow>
          </AppointmentCard>
        </PatientAppointments>
      )))}
    </Container>
  );
};

const MoreButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
`;

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
  position: relative;
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
