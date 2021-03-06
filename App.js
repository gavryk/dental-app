import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  AddPatientScreen, HomeScreen, PatientScreen, 
  AddAppointmentScreen, PatientsScreen, EditPatientScreen, 
  EditAppointmentScreen } from "./screens";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{ backgroundColor: '#2A86FF' }}/> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Patient" component={PatientScreen} />
        <Stack.Screen name="AddPatient" component={AddPatientScreen} />
        <Stack.Screen name="AddAppointment" component={AddAppointmentScreen} />
        <Stack.Screen name="Patients" component={PatientsScreen} />
        <Stack.Screen name="EditPatient" component={EditPatientScreen} />
        <Stack.Screen name="EditAppointment" component={EditAppointmentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
