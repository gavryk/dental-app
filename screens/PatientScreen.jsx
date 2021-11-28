import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import styled from "styled-components/native";
import { Text, View } from 'react-native';

function PatientScreen({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <BackBtn onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-small-left" size={32} color="white" />
                </BackBtn>
              ),
        });
      }, [navigation]);
    return (
        <View>
            <Text>Patints</Text>
        </View>
    )
}

const BackBtn = styled.TouchableOpacity`

`;

export default PatientScreen
