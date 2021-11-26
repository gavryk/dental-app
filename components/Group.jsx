import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Group = ({ title, items }) => {
  return (
    <GroupBlock>
      <GroupTitle>{title}</GroupTitle>
      {items.map((item, index) => {
        return (
          <GroupItem key={`${item.fullname}_${index}`}>
            <Avatar
              source={{
                uri: item.user.avatar,
              }}
            ></Avatar>
            <View style={{ flex: 1 }}>
              <FullName>{item.user.fullname}</FullName>
              <GreyText>{item.diagnosis}</GreyText>
            </View>
            <GroupDate active>{item.time}</GroupDate>
          </GroupItem>
        );
      })}
    </GroupBlock>
  );
};

Group.defaultProps = {
  groupTite: "Untitled",
  items: [],
};

export default Group;

const GroupDate = styled.Text`
  padding: 7px 15px;
  font-weight: 700;
  color: ${(props) => (props.active ? "#fff" : "#4294ff")};
  border-radius: 18px;
  font-size: 16px;
  background: ${(props) => (props.active ? "#2A86FF" : "#e9f5ff")};
  overflow: hidden;
`;

const GreyText = styled.Text`
  font-size: 12px;
  color: #8b979f;
`;

const FullName = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000;
  text-align: left;
  margin-bottom: 5px;
`;

const GroupBlock = styled.View`
  padding: 0 15px;
`;
