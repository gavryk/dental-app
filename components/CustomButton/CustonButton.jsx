import React from 'react';
import styled from 'styled-components';

const CustonButton = ({children, color, width}) => {
    return (
        <Button width={width} color={color}>
            <ButtonText>{children}</ButtonText>
        </Button>
    )
}

const Button = styled.TouchableOpacity`
    background-color: ${(props) => (props.color ? props.color : '#2A86FF')};
    text-align: center;
    padding: 15px 10px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    flex: 1;
    margin: 0 4px;
    max-width: ${(props) => (props.width ? props.width : 'auto')};
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
`;

export default CustonButton
