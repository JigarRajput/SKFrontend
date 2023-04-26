import { StyleSheet, StatusBar } from "react-native";

export const homeScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  separator: {
    height: 5,
    width: "100%",
    backgroundColor: "#efefef",
    marginTop: 10,
  },
  imgSliderContainer: {
    paddingHorizontal: 10,
    height: 200,
  },
  welcomeText: {
    fontSize: 16,
    marginHorizontal: 20,
    fontWeight: "800",
    marginVertical: 10,
    fontFamily: "serif",
    color: "#757474",
  },
});
