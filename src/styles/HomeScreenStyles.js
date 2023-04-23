import { StyleSheet, StatusBar } from "react-native";

export const homeScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  separator: {
    height: 10,
    width: "100%",
    backgroundColor: "#ebebeb",
    marginTop: 10,
  },
  imgSliderContainer: {
    paddingHorizontal: 10,
    height: 250,
  },
});
