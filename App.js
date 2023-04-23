import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import BottomTabs from "./src/Navigation/BottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import { MyTheme } from "./src/constants/theme";
import MainStack from "./src/Navigation/MainStack";

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainStack />
    </NavigationContainer>
  );
}
