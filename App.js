import React from "react";
import styled from "styled-components/native";
import Group from "./components/Group";

export default function App() {
  return (
    <Container>
      <Group title={ '14 December' } items={[
        {
          time: '15:45', 
          diagnosis: 'pulpit',
          user: {
            fullname: 'Don Cabron',
            avatar: 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
          }
        },
        {
          time: '16:45', 
          diagnosis: 'pulpit',
          user: {
            fullname: 'Sem Arnold',
            avatar: 'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
          }
        }
      ]}/>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin: 60px 0;
`;
