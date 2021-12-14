import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { SectionList } from "react-native";
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
    const result = data.map(group => {
      group.data = group.data.filter(item => item._id !== id); 
      return group;
    })
    setData(result);
    appointmentsApi
      .remove(id);
  }
  
  return (
    <Container>
      {data && (
        <SectionList
          sections={data}
          onRefresh={fetchAppointments}
          refreshing={isLoading}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Swipeable 
              key={item._id}
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
