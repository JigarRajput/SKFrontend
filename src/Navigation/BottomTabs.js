import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from "../screens/ChatsScreen";
import SavedScreen from "../screens/SavedScreen";
import AccountsScreen from "../screens/AccountsScreen";
import { Image } from "react-native";
import { MyTheme } from "../constants/theme";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/homeIcon.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? MyTheme.colors.primary : "grey",
              }}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/chatIcon.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? MyTheme.colors.primary : "grey",
              }}
            />
          ),
        }}
        name="Chats"
        component={ChatsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/saveIcon.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? MyTheme.colors.primary : "grey",
              }}
            />
          ),
        }}
        name="Saved"
        component={SavedScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/profileIcon.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? MyTheme.colors.primary : "grey",
              }}
            />
          ),
        }}
        name="Accounts"
        component={AccountsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
