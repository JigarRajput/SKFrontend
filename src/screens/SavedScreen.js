import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import ProfileCard from "../components/ProfileCard";
import { SaveProfilesContext } from "../../context/SaveProfilesContext";
import { SafeAreaView } from "react-native-safe-area-context";
import applicationStyles from "../styles/ApplicationStyles";

const SavedScreen = () => {
  const { savedProfiles } = useContext(SaveProfilesContext);
  return (
    <SafeAreaView style={applicationStyles.container}>
      <FlatList
        data={savedProfiles}
        renderItem={({ item, index }) => <ProfileCard profile={item} />}
      />
    </SafeAreaView>
  );
};

export default SavedScreen;
