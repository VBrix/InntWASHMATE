import React, { useRef, useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Animated } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

// Import components
import { LogOut } from "../components/log_out_component";
import { ScanStatusComponent } from "../components/scan_status_component";

export default function KontrollørScreen() {
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
    }
  }, []);



  return (
    <View style={[globalStyles.container, { padding: 20 }]}>
      <Text style={[globalStyles.welcomeText, { marginBottom: 20 }]}>
        Welcome to <Text style={{ color: "rgb(132, 189, 57)" }}>WASH</Text>
        <Text style={{ color: "#000" }}>MATE</Text>, {displayName}!
      </Text>

      {/* View type for live animation*/}
      <Animated.View
        style={[globalStyles.container, { padding: 20 }]}
      >
        <TouchableOpacity
          style={[globalStyles.scanTouchable, { marginBottom: 20 }]}
          onPress={ScanStatusComponent}
        >
          <Text style={globalStyles.touchableText}>Scan NFC Tag</Text>
        </TouchableOpacity>
      </Animated.View>

      <View>
        <TouchableOpacity
          style={globalStyles.logoutTouchable}
          onPress={() => LogOut(navigation)}
        >
          <Text style={globalStyles.touchableText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
