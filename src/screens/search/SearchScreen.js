import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import SearchBar from "../../components/SearchBar";
import getAllProfiles from "../../utilities/getAllProfiles";
import ProfileCard from "../../components/ProfileCard";
import { ProfilesContext } from "../../../context/ProfilesContext";
import { useRoute } from "@react-navigation/native";

const SearchScreen = () => {
  const { profiles } = useContext(ProfilesContext);
  const category = useRoute()?.params?.category;
  console.log("category obtained ", category);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar category={category ?? ""} />
      {profiles.length === 0 ? (
        <ActivityIndicator size="large" animating={true} color={"#000"} />
      ) : (
        <FlatList
          data={profiles}
          renderItem={({ item, index }) => <ProfileCard profile={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
});
