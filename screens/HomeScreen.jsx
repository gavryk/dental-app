import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { SectionList } from "react-native";
import { Appointment, SectionTitle, PlusButton } from "../components";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://trycode.pw/c/KYNRI.json').then(({data}) => {
      setData(data);
    })
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
        renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} />}
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
