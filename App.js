import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
// Render screens as its a EAS build
enableScreens();
import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth, onAuthStateChanged, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// imprt screens and styles
import HomepageScreen from "./screens/homepage_screen";
import RegistrationGuideScreen from "./screens/registrationGuide_screen";
import AuthScreen from "./screens/auth_screen";
import AdminScreen from "./screens/admin_screen";
import KontrollørScreen from "./screens/kontrollør_screen";
import RengøringsansvarligScreen from "./screens/rengøringsmedarbejder_screen";
import { colors } from "./styles/globalStyles"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfp-lh5IiQWONkrK-iG4j8rTRmf4AChb0",
  authDomain: "intgk1.firebaseapp.com",
  databaseURL: "https://intgk1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "intgk1",
  storageBucket: "intgk1.appspot.com",
  messagingSenderId: "466408583193",
  appId: "1:466408583193:web:437b3dd480fdcbac2eba88",
};

export default function App() {
  const [user, setUser] = useState({ loggedIn: false });
  let auth;

  // Initialize Firebase
  if (getApps().length < 1) {
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
    console.log("Firebase Initialized!");
  } else {
    auth = getAuth();
  }

  // Monitor authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser({ loggedIn: !!currentUser });
    });
    return () => unsubscribe();
  }, [auth]);

  // Stack Navigator
  const Stack = createStackNavigator();
  const StackNavigation = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.softIvory }, 
        headerTintColor: colors.refinedCharcoalGray, 
      }}
    >
      <Stack.Screen 
        name='Homepage' 
        component={HomepageScreen}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name='Registration Guide'
        component={RegistrationGuideScreen}
        options={{
          headerLeftContainerStyle: { paddingLeft: 20, paddingTop: 100 },
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name='Admin'
        component={AdminScreen}
        options={{
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name='Kontrollør'
        component={KontrollørScreen}
        options={{
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name='Rengøringsansvarlig'
        component={RengøringsansvarligScreen}
        options={{
          headerLeftContainerStyle: { paddingLeft: 20, paddingTop: 100 },
          headerTintColor: "#000",
        }}
      />
    </Stack.Navigator>
  );
  return (
    <>
      <StatusBar backgroundColor={colors.softIvory} barStyle='dark-content' />
      <NavigationContainer>
        {user.loggedIn ? <StackNavigation /> : <AuthScreen/>}
      </NavigationContainer>
    </>
  );
}

