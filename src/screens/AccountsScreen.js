import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import applicationStyles from "../styles/ApplicationStyles";

const AccountsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={applicationStyles.container}>
      <Text>AccountsScreen</Text>
    </SafeAreaView>
  );
};

export default AccountsScreen;
