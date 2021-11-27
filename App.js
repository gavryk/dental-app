import React from "react";
import { SectionList } from "react-native";
import styled from "styled-components/native";
import {Appointment, SectionTitle} from "./components";

const DATA = [
  {
    title: '14 December',
    data: [
      {
        time: '15:46', 
        diagnosis: 'pulpit',
        active: true,
        user: {
          fullname: 'Don Cabron',
          avatar: 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        }
      },
      {
        time: '16:35', 
        diagnosis: 'Bite Trauma, Primary',
        user: {
          fullname: 'Sem Arnold',
          avatar: 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        }
      }
    ]
  },
  {
    title: '23 December',
    data: [
      {
        time: '12:30', 
        diagnosis: 'Chipped Teeth',
        user: {
          fullname: 'Anna Mitchel',
          avatar: 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        }
      },
      {
        time: '13:00', 
        diagnosis: 'Tooth Decay',
        user: {
          fullname: 'Sem Arnold',
          avatar: 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        }
      },
      {
        time: '15:00',
        diagnosis: 'Poor Oral Hygiene',
        user: {
          fullname: 'Tim Terner',
          avatar: 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        }
      }
    ]
  }
]

export default function App() {
  return (
    <Container>
      <SectionList 
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title }} ) => (
          <SectionTitle>{ title }</SectionTitle>
        )}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin: 40px 0;
`;
