import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { SearchBar } from 'react-native-elements';
import { FlatList, Alert, LogBox, View } from "react-native";
import {
  Appointment,
  SectionTitle,
  PlusButton,
  SwipeableButtons,
} from "../components";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { patientsApi, phoneFormat } from "../utils";

const PatientsScreen = ({ navigation, route }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [lastUpdateTime, setlastUpdateTime] = useState(null);

  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Patients",
      headerStyle: {
        backgroundColor: "#1c467c",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: "18px",
      },
    });
  }, [navigation]);

  const fetchPatients = () => {
    setIsLoading(true);
    patientsApi
      .get()
      .then(({ data }) => {
        setData(data.data);
        console.log(data);
      })
      .finally((e) => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPatients, []);

  useEffect(fetchPatients, [route.params]);

  const onSearch = (text) => {
    setSearchValue(text);
  };

  const removeItem = (id) => {
    Alert.alert(
      "Delete Patient",
      "Are you sure you want to delete the patient?",
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
            patientsApi
              .remove(id)
              .then(() => {
                fetchPatients();
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

  return (
    <Container>
      {data && (
        <>
          <View style={{ padding: 0 }}>
            <SearchBar
              placeholder="Type Here..."
              containerStyle={{
                padding: 10,
              }}
              lightTheme={true}
              platform="default"
              round={true}
              onChangeText={onSearch}
              value={searchValue}
            />
          </View>
          <FlatList
            data={data}
            onRefresh={fetchPatients}
            refreshing={isLoading}
            keyExtractor={(item, index) => item._id}
            renderItem={({ item }) => (
              <Swipeable
                renderRightActions={(progress) =>
                  SwipeableButtons(progress, item._id, removeItem)
                }
              >
                <Appointment
                  navigate={navigation.navigate}
                  item={{
                    patient: item,
                    diagnosis: phoneFormat(item.phone),
                  }}
                />
              </Swipeable>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <SectionTitle>{title}</SectionTitle>
            )}
          />
        </>
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

export default PatientsScreen;
