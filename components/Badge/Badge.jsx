import React from "react";
import styled from "styled-components/native";

const getColor = ({ active, color }) => {
    const colors = {
        green: {
            background: 'rgba(132, 210, 105, .21)',
            color: '#61BB42'
        },
        active: {
            background: '#4294ff',
            color: '#fff'
        },
        default: {
            background: '#E9F5FF',
            color: '#4294ff'
        }
    }

    if(active) {
        return colors.active
    } else if (color && colors[color]) {
        return colors[color]
    } else {
        return colors.default
    }
}

export default styled.Text`
padding: 7px 15px;
font-weight: 700;
text-align: center;
color: ${(props) => getColor(props).color};
border-radius: 18px;
font-size: 16px;
background: ${(props) => getColor(props).background};
overflow: hidden;
`;