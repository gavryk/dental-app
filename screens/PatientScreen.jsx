import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Text, View } from "react-native";

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
        fontSize: "18px",
      },
    //   headerLeft: () => (
    //     <BackBtn onPress={() => navigation.goBack()}>
    //       <Entypo name="chevron-small-left" size={32} color="white" />
    //     </BackBtn>
    //   ),
    });
  }, [navigation]);


  return (
    <View>
      <Text>Patients</Text>
    </View>
  );
}

const BackBtn = styled.TouchableOpacity``;

export default PatientScreen;
