import React, { useEffect, useState } from "react";
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
import DateTimePicker from "@react-native-community/datetimepicker";

const AddAppointmentScreen = ({ navigation }) => {
  const [datePick, setDatePick] = useState(new Date());
  const [timePick, setTimePick] = useState(new Date());

  const [values, setValues] = useState({
    diagnosis: "Pulpit",
    dentNumber: "",
    price: "",
    date: `${datePick.getMonth() + 1}.${datePick.getDate()}.${datePick.getFullYear()}`,
    time: null,
  });
  console.log(values);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Appointment",
      headerStyle: {
        backgroundColor: "#2A86FF",
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
              minWidth="95%"
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
          <View style={{ justifyContent: "flex-start", width: 100 }}>
            <DateTimePicker
              style={{ width: 350, backgroundColor: "white" }}
              value={datePick}
              maximumDate={new Date(2300, 10, 20)}
              minimumDate={new Date(1950, 0, 1)}
              dateFormat="dayofweek day month"
              mode="date"
              display="compact"
              onChange={(e, selectedDate) => {
                const currentDate = selectedDate || date;
                setDatePick(currentDate);
                let formattedDate = `${
                  currentDate.getMonth() + 1
                }.${currentDate.getDate()}.${currentDate.getFullYear()}`;
                setFieldValue("date", formattedDate);
              }}
            />
            <DateTimePicker
              style={{ width: 350, backgroundColor: "white" }}
              value={timePick}
              mode="time"
              timeZoneOffsetInMinutes={60}
              display="compact"
              onChange={(e, selectedTime) => {
                setTimePick(selectedTime);
                let hh = selectedTime.getUTCHours() + 1;
                let mm = selectedTime.getUTCMinutes();
                hh = hh < 10 ? `0${hh}` : hh;
                hh = hh == 24 ? `00` : hh;
                mm = mm < 10 ? `0${mm}` : mm;
  
                let myDate = `${hh}:${mm}`;
                setFieldValue("time", myDate);
              }}
            />
          </View>
        </Stack>
        <ButtonView style={{ flex: 1 }}>
          <CustomButton onPress={onSubmit} color="#2A86FF">
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
