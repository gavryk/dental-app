import React from "react";
import styled from "styled-components/native";

export default styled.Text`
padding: 7px 15px;
font-weight: 700;
text-align: center;
color: ${(props) => (props.active ? "#fff" : "#4294ff")};
border-radius: 18px;
font-size: 16px;
background: ${(props) => (props.active ? "#2A86FF" : "#e9f5ff")};
overflow: hidden;
`;