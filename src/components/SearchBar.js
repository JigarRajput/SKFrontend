// jai Ganesh
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect, useContext } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import getAllProfiles from "../utilities/getAllProfiles";
import { ProfilesContext } from "../../context/ProfilesContext";

const SearchBar = ({ category }) => {
  const { setProfiles } = useContext(ProfilesContext);
  const [allProfiles, setAllProfiles] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const [currentRoute, setCurrentRoute] = useState("Home");
  const [searchText, setSearchText] = useState("");

  console.log("search text ", searchText);

  useEffect(() => {
    if (category) {
      setSearchText(category);
    }
    setCurrentRoute(route.name);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProfiles();
      const filteredProfiles = res?.filter((profile) =>
        profile?.serviceCategory
          .toUpperCase()
          .includes(searchText.toUpperCase())
      );
      console.log("Matched profiles", filteredProfiles);
      setProfiles(filteredProfiles);
    };
    fetchData();
  }, [searchText]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        currentRoute === "Home" ? navigation.navigate("Search") : null;
      }}
    >
      <View style={styles.searchBar}>
        <Image
          style={{ width: 20, height: 20, marginEnd: 10 }}
          source={require("../assets/search_icon.png")}
        />
        <TextInput
          placeholder="search for services..."
          style={{ width: "80%", backgroundColor: "white" }}
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  searchBar: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    borderStyle: "solid",
    // borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#636363",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 10,
  },
});

export default SearchBar;
