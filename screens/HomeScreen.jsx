import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { SectionList } from "react-native";
import { Appointment, SectionTitle, PlusButton, SwipeableButtons } from "../components";
import axios from "axios";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { appointmentsApi } from "../utils/api";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    appointmentsApi
      .get()
      .then(({ data }) => {
        setData(data.data);
      });
  }, []);

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

  return (
    <Container>
      {
        data && <SectionList
        sections={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={ SwipeableButtons }>
            <Appointment navigate={navigation.navigate} item={item} />
          </Swipeable>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      }
      <PlusButton />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  /* margin: 0 0 30px; */
  background: #fff;
`;

export default HomeScreen;
