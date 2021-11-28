import React from 'react';
import styled from 'styled-components';

const CustonButton = ({children}) => {
    return (
        <Button>
            <ButtonText>{children}</ButtonText>
        </Button>
    )
}

const Button = styled.TouchableOpacity`
    background-color: #2A86FF;
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
`;

export default CustonButton
