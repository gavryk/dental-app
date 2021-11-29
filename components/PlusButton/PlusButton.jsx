import React from "react";
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components";

const PlusButton = ({ toTop }) => {
    return (
        <PlusBtn style={{
            shadowColor: '#2A86FF',
            shadowOffset: {
                width: 0,
                height: 7
            },
            shadowOpacity: 0.7,
            shadowRadius: 10,
            elevation: 18,
        }}>
            <Ionicons name="ios-add" size={32} color="white" />
        </PlusBtn>
    )
}

const PlusBtn = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    right: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 58px;
    height: 58px;
    background-color: #2A86FF;
`;

export default PlusButton;