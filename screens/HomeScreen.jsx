import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { SectionList, Alert, LogBox, TouchableOpacity, Text } from "react-native";
import { Appointment, SectionTitle, PlusButton, SwipeableButtons } from "../components";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { appointmentsApi } from "../utils";

const HomeScreen = ({ navigation, route }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [lastUpdateTime, setlastUpdateTime] = useState(null);

  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Appointments List",
      headerStyle: {
        backgroundColor: "#2A86FF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: "18px",
      },
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Patients")}
          style={{ marginRight: 5 }}
        >
          <Ionicons name="people" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const fetchAppointments = () => {
    setIsLoading(true);
    appointmentsApi
      .get()
      .then(({ data }) => {
        setData(data.data);
      })
      .finally((e) => {
        setIsLoading(false);
      });
  };

  useEffect(fetchAppointments, []);

  useEffect(fetchAppointments, [route.params]);

  const removeItem = (id) => {
    Alert.alert(
      "Delete Appointment",
      "Are you sure you want to delete the appointment?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            setIsLoading(true);
            appointmentsApi
              .remove(id)
              .then(() => {
                fetchAppointments();
              })
              .catch(() => {
                setIsLoading(false);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };
  
  const editItem = (item) => {
    navigation.navigate("EditAppointment", item);
  };
  
  return (
    <Container>
      {data && (
        <SectionList
          sections={data}
          onRefresh={fetchAppointments}
          refreshing={isLoading}
          keyExtractor={(item, index) => item._id}
          renderItem={({ item }) => (
            <Swipeable
              renderRightActions={(progress) =>
                SwipeableButtons(progress, item._id, removeItem, editItem, item)
              }
            >
              <Appointment navigate={navigation.navigate} item={item} />
            </Swipeable>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
        />
      )}
      <PlusButton navigate={navigation.navigate} refScreen="AddPatient" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  /* margin: 0 0 30px; */
  background: #fff;
`;

export default HomeScreen;
