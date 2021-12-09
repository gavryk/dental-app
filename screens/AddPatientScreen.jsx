import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Center, Input, NativeBaseProvider, Stack } from "native-base";
import { CustomButton } from "../components";

const AddPatientScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Patient",
      headerStyle: {
        backgroundColor: "#2a9714",
        elevation: 0.8,
        shadowOpacity: 0.8,
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
      <View style={{ flex: 0.25, paddingTop: 30 }}>
        <NativeBaseProvider>
          <Stack space={4} mx={1}>
            <Center>
              <Input
                p={5}
                w="90%"
                size="xl"
                variant="underlined"
                placeholder="Patient Name"
                label="Name"
                type="text"
              />
            </Center>
            <Center>
              <Input
                p={5}
                keyboardType="numeric"
                w="90%"
                size="xl"
                variant="underlined"
                placeholder="Phone Number"
              />
            </Center>
          </Stack>
        </NativeBaseProvider>
      </View>
      <ButtonView style={{}}>
        <CustomButton color="#65bd48">
          <Ionicons name="ios-add" size={24} color="white" />
          <Text>Add Patient</Text>
        </CustomButton>
      </ButtonView>
    </Container>
  );
};

const ButtonView = styled.View`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  flex: .1;
`;

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  height: 100%;
`;


export default AddPatientScreen;