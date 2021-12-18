import React, { useEffect, useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import {
  Center,
  Input,
  NativeBaseProvider,
  Select,
  CheckIcon,
  Stack,
} from "native-base";
import { CustomButton } from "../components";
import { appointmentsApi } from "../utils";
import DateTimePicker from "@react-native-community/datetimepicker";

const convertTime = (time) => {
  let hh = time.getUTCHours() + 1;
  let mm = time.getUTCMinutes();
  hh = hh < 10 ? `0${hh}` : hh;
  hh = hh == 24 ? `00` : hh;
  mm = mm < 10 ? `0${mm}` : mm;

  return `${hh}:${mm}`;
};

const EditAppointmentScreen = ({ navigation, route }) => {
  const { _id, date, dentNumber, diagnosis, price, time } = route.params;
  const [datePick, setDatePick] = useState(new Date());
  const [timePick, setTimePick] = useState(new Date());

  const [values, setValues] = useState({
    diagnosis,
    dentNumber: `${dentNumber}`,
    price: `${price}`,
    date: `${date}`,
    time: `${time}`,
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Edit Appointment",
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
  };

  const handleChange = (name, e) => {
    const text = e.nativeEvent.text;
    setFieldValue(name, text);
  };

  const onSubmit = () => {
    appointmentsApi
      .update(_id, values)
      .then(() => {
        navigation.navigate("Home", { lastUpdateTime: new Date() });
      })
      .catch((e) => {
        if (e.response.data && e.response.data.message) {
          e.response.data.message.forEach((err) => {
            const fieldName = err.param;
            alert(`Error! Field "${fieldsName[fieldName]}" is incorrect.`);
          });
        }
      });
  };

  return (
    <Container>
      <NativeBaseProvider style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Stack space={4} mx={1}>
            <Center>
              <Input
                keyboardType="numeric"
                p={5}
                w="95%"
                size="xl"
                variant="underlined"
                placeholder="Dent Number"
                label="Dent Number"
                value={values.dentNumber}
                onChange={(e) => handleChange("dentNumber", e)}
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
                keyboardType="numeric"
                dataDetectorTypes="price"
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
            <DateTimeView>
              <DateTimePicker
                style={{
                  backgroundColor: "white",
                  flexBasis: "30%",
                  width: "30%",
                }}
                value={datePick}
                maximumDate={new Date(2300, 10, 20)}
                minimumDate={new Date()}
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
                style={{
                  width: "100%",
                  flex: 1,
                }}
                value={timePick}
                mode="time"
                timeZoneOffsetInMinutes={60}
                onChange={(e, selectedTime) => {
                  setTimePick(selectedTime);
                  let myDate = convertTime(selectedTime);
                  setFieldValue("time", myDate);
                }}
              />
            </DateTimeView>
          </Stack>
        </View>
        <ButtonView>
          <CustomButton onPress={onSubmit} color="#2A86FF">
            <Ionicons name="ios-add" size={24} color="white" />
            <Text>Save</Text>
          </CustomButton>
        </ButtonView>
      </NativeBaseProvider>
    </Container>
  );
};

const DateTimeView = styled.View`
  display: flex;
  flex: 1;
  width: 98%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

const ButtonView = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 50px;
`;

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: flex-start;
  padding-top: 30px;
  height: 100%;
`;

export default EditAppointmentScreen;
