import { View, Text } from "react-native";
import React from "react";
import ProfileCard from "../components/ProfileCard";

const ChatsScreen = ({ navigation }) => {
  return (
    <View style={{ paddingTop: 50 }}>
      {/* <Text>ChatsScreen</Text> */}
      <ProfileCard />
    </View>
  );
};

export default ChatsScreen;
