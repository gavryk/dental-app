import React from "react";
import {
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 

const SwipeableButtons = (progress, id, removeAppointments) => {
  const scale = progress.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  return (
    <>
      <View style={{ backgroundColor: "#ee3434", justifyContent: "center", padding: 20 }}>
        <TouchableOpacity onPress={() => removeAppointments(id)}>
            <Ionicons name="ios-close" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "#b0b5b9", justifyContent: "center", padding: 20 }}>
        <TouchableOpacity>
            <MaterialIcons name="edit" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SwipeableButtons;
