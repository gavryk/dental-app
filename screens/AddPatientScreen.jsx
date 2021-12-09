import React, { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Center, Input, NativeBaseProvider, FormControl , Stack } from "native-base";
import { CustomButton } from "../components";
import { patientsApi } from "../utils/api";

const AddPatientScreen = ({ navigation }) => {
  const [values, setValues] = useState({});

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

  const handleChange = (name, e) => {
    const text = e.nativeEvent.text;
    setValues({
      ...values,
      [name]: text,
    });
  };

  
  const onSubmit = () => {
    patientsApi
      .add(values)
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((e) => {
        alert("BAD");
      });
  };

  return (
    <Container>
      <NativeBaseProvider style={{ flex: 0.25 }}>
        <Stack space={4} mx={1}>
          <Center>
            <Input
              p={5}
              w="95%"
              size="xl"
              variant="underlined"
              placeholder="Patient Name"
              label="Name"
              value={values.fullname}
              onChange={(e) => handleChange("fullname", e)}
              autoFocus
              clearButtonMode="while-editing"
            />
          </Center>
          <Center>
            <Input
              p={5}
              keyboardType="phone-pad"
              dataDetectorTypes="phoneNumber"
              w="95%"
              size="xl"
              onChange={handleChange.bind(this, "phone")}
              variant="underlined"
              placeholder="Phone Number"
              clearButtonMode="while-editing"
              value={values.phone}
            />
          </Center>
        </Stack>
        <ButtonView style={{}}>
          <CustomButton onPress={onSubmit} color="#65bd48">
            <Ionicons name="ios-add" size={24} color="white" />
            <Text>Add Patient</Text>
          </CustomButton>
        </ButtonView>
      </NativeBaseProvider>
    </Container>
  );
};

const ButtonView = styled.View`
  width: 100%;
  height: auto;
  flex: .12;
  margin-top: 20px;
`;

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding-top: 30px;
  height: 100%;
`;


export default AddPatientScreen;