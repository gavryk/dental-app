import React, { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import {
  Center,
  Input,
  NativeBaseProvider,
  FormControl,
  Select,
  CheckIcon,
  Stack,
} from "native-base";
import { CustomButton } from "../components";
import { appointmentsApi } from "../utils/api";
import { useEffect } from "react/cjs/react.development";

const AddAppointmentScreen = ({ navigation }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    console.log(values);
  }, [values]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Appointment",
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

  const fieldsName = {
    diagnosis: "Diagnosis",
    dentNumber: "Dent Number",
    price: "Price",
    date: "Date",
    time: "Time",
  };

  const setFieldValue = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleChange = (name, e) => {
    const text = e.nativeEvent.text;
    setFieldValue(name, text);
  };

  const onSubmit = () => {
    appointmentsApi
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
              type="number"
              keyboardType="numeric"
              p={5}
              w="95%"
              size="xl"
              variant="underlined"
              placeholder="Dent Number"
              label="Dent Number"
              value={values.dentNumber}
              onChange={(e) => handleChange("dentNumber", e)}
              autoFocus
              clearButtonMode="while-editing"
            />
          </Center>
          <Center>
            <Select
              height="50"
              minWidth="350"
              accessibilityLabel="Choose Diagnosis"
              placeholder="Choose Diagnosis"
              variant="underlined"
              style={{ fontSize: 18, paddingLeft: 15 }}
              placeholderTextColor="dark.500"
              _selectedItem={{
                bg: "coolGray.200",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(e) => setFieldValue("diagnosis", e)}
              selectedValue={values.diagnosis}
            >
              <Select.Item label="Pulpit" value="Pulpit" />
              <Select.Item label="Periodontitis" value="Periodontitis" />
              <Select.Item label="Oral cancer" value="Oral Cancer" />
              <Select.Item label="Tooth Abscesses" value="Tooth Abscesses" />
              <Select.Item label="Prosthetics" value="Prosthetics" />
            </Select>
          </Center>
          <Center>
            <Input
              type="number"
              keyboardType="numeric"
              p={5}
              w="95%"
              size="xl"
              variant="underlined"
              placeholder="Price"
              label="Price"
              value={values.price}
              onChange={(e) => handleChange("price", e)}
              clearButtonMode="while-editing"
            />
          </Center>
        </Stack>
        <ButtonView style={{}}>
          <CustomButton onPress={onSubmit} color="#65bd48">
            <Ionicons name="ios-add" size={24} color="white" />
            <Text>Add Appointment</Text>
          </CustomButton>
        </ButtonView>
      </NativeBaseProvider>
    </Container>
  );
};

const ButtonView = styled.View`
  width: 100%;
  height: auto;
  flex: 0.12;
  margin-top: 20px;
`;

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding-top: 30px;
  height: 100%;
`;

export default AddAppointmentScreen;