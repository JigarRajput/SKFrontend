import { NavigationContainer } from "@react-navigation/native";
import { MyTheme } from "./src/constants/theme";
import MainStack from "./src/Navigation/MainStack";
import ProfileProvider from "./context/ProfilesContext";
import SaveProfileProvider from "./context/SaveProfilesContext";

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <SaveProfileProvider>
        <ProfileProvider>
          <MainStack />
        </ProfileProvider>
      </SaveProfileProvider>
    </NavigationContainer>
  );
}
