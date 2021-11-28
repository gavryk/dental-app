import React from "react";
import styled from "styled-components";
import { SafeAreaView, SafeAreaProvider, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, PatientScreen } from "./screens";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{ backgroundColor: '#2A86FF' }}/> */}
      <Drawer.Navigator 
          initialRouteName="Home"
          screenOptions={{
            drawerActiveTintColor: '#2A86FF',
            drawerInactiveTintColor: '#2A86FF',
            drawerStyle: {
              backgroundColor: '#fff',
              width: 280,
            },
          }}
        >
        <Drawer.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#2A86FF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: "18px",
            }
          }}
        />
        <Drawer.Screen 
          name="Patient" 
          component={PatientScreen} 
          options={{
            headerStyle: {
              backgroundColor: "#2A86FF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: "18px",
            }
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;
