import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

// Import components
import RegistrationComponent from "../components/scan_registration_component";
import { LogOut } from "../components/log_out_component";
import { globalStyles, colors} from "../styles/globalStyles";

export default function AdminScreen() {
  const navigation = useNavigation();
  const [auth, setAuth] = useState(null);
  const [displayName, setDisplayName] = useState("");

  // get user from auth DB
  useEffect(() => {
    const auth = getAuth();
    setAuth(auth);
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="height"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[globalStyles.container, { padding: 20, justifyContent: "space-between" }]}>
          <Text style={[globalStyles.welcomeText, { marginBottom: 20 }]}>
            Welcome to <Text style={{ color: colors.freshGreen }}>WASH</Text><Text style={{ color: "#000" }}>MATE</Text>, {displayName}!
          </Text>
      
          <View style={{ flex: 1, justifyContent: "center" }}>
            <RegistrationComponent />
          </View>

          <View style={{ flex: 1, justifyContent: "center" }}>
            <TouchableOpacity
              style={globalStyles.logoutTouchable}
              onPress={() => navigation.navigate("Registration Guide")}
            >
              <Text style={globalStyles.touchableText}>Registration Guide</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={[globalStyles.logoutTouchable, { marginBottom: 0 }]}
              onPress={() => LogOut(navigation)}
            >
              <Text style={globalStyles.touchableText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
