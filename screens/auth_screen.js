import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { colors } from "../styles/globalStyles"; 

import LogInComponent from "./login_screen";
import SignUpComponent from "./signup_screen";

const Tab = createBottomTabNavigator();

// Navigator for redirecting
export default function AuthScreen() {
  // To show uniform background color 
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.softIvory }, 
        tabBarActiveTintColor: colors.slateBlue, 
        tabBarInactiveTintColor: colors.refinedCharcoalGray, 
        headerStyle: { backgroundColor: colors.softIvory }, 
        headerTintColor: colors.refinedCharcoalGray, 
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
