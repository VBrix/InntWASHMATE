import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { colors } from "../styles/globalStyles"; // Import colors

import LogInComponent from "./login_screen";
import SignUpComponent from "./signup_screen";

const Tab = createBottomTabNavigator();

// Navigator for redirecting
export default function AuthScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.softIvory }, // Set background color
        tabBarActiveTintColor: colors.slateBlue, // Active tab color
        tabBarInactiveTintColor: colors.refinedCharcoalGray, // Inactive tab color
        headerStyle: { backgroundColor: colors.softIvory }, // Set header background color
        headerTintColor: colors.refinedCharcoalGray, // Set header text color
      }}
    >
      <Tab.Screen
        name='Log ind'
        component={LogInComponent}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/login.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Sign up'
        component={SignUpComponent}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/signup.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
