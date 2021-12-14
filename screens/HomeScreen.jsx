import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { SectionList, Alert } from "react-native";
import { Appointment, SectionTitle, PlusButton, SwipeableButtons } from "../components";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { appointmentsApi } from "../utils/api";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
      headerStyle: {
        backgroundColor: "#2A86FF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: "18px",
      }
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

  const removeAppointments = (id) => {
     Alert.alert(
      'Delete Appointment',
      'Are you sure you want to delete the appointment?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Delete',
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
          }
        }
      ],
      { cancelable: false }
    );
  }
  
  
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
              renderRightActions={(progress) => SwipeableButtons(progress, item._id, removeAppointments)}>
              <Appointment navigate={navigation.navigate} item={item} />
            </Swipeable>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
        />
      )}
      <PlusButton navigate={navigation.navigate} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  /* margin: 0 0 30px; */
  background: #fff;
`;

export default HomeScreen;
