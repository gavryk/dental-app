import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import GreyText from "../components/GreyText/GreyText";
import { CustomButton } from "../components";

const PatientScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Patient Card",
      headerStyle: {
        backgroundColor: "#2A86FF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: "20px",
      },
      //   headerLeft: () => (
      //     <BackBtn onPress={() => navigation.goBack()}>
      //       <Entypo name="chevron-small-left" size={32} color="white" />
      //     </BackBtn>
      //   ),
    });
  }, [navigation]);

  return (
    <Container>
      <PatientTop>
        <PatientFullName>Marina Sultanova</PatientFullName>
        <GreyText>+3(063)-625-11-52</GreyText>
        <PatientButtons>
          <CustomButton>Teeth Formula</CustomButton>
          <CustomButton width={"50px"} color={"#39ca1d"}>
            <FontAwesome name="phone" size={20} color="white" />
          </CustomButton>
        </PatientButtons>
      </PatientTop>
    </Container>
  );
};

const PatientTop = styled.View`
  
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
  padding: 20px;
`;

// const BackBtn = styled.TouchableOpacity``;

export default PatientScreen;
