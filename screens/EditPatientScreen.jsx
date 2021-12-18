import React, { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import {
  Center,
  Input,
  NativeBaseProvider,
  FormControl,
  Stack,
} from "native-base";
import { CustomButton } from "../components";
import { patientsApi } from "../utils";

const EditPatientScreen = ({ navigation, route }) => {
    const { fullname, phone, _id } = route.params;
  const [values, setValues] = useState({
      fullname,
      phone
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Edit Patient",
      headerStyle: {
        backgroundColor: "#b1b1b1",
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
      .update(_id, values)
      .then(() => {
        navigation.navigate("Patients", { lastUpdateTime: new Date() });
      })
      .catch((e) => {
        alert("BAD");
      });
  };

  return (
    <Container>
      <NativeBaseProvider>
        <View style={{ flex: 0.3 }}>
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
        </View>
        <ButtonView style={{}}>
          <CustomButton onPress={onSubmit} color="#65bd48">
            <Ionicons name="ios-add" size={24} color="white" />
            <Text>Save</Text>
          </CustomButton>
        </ButtonView>
      </NativeBaseProvider>
    </Container>
  );
};

const ButtonView = styled.View`
  width: 100%;
  height: 100%;
  height: auto;
  margin-top: 20px;
  flex: 1;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
`;

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding-top: 30px;
  height: 100%;
`;

export default EditPatientScreen;
