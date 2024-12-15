import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { globalStyles, colors } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

// Import components
import { LogOut } from "../components/log_out_component";
import { ScanStatusComponent } from "../components/scan_status_component";
import { ScanAnimationComponent } from "../components/scan_animation_component";

export default function KontrollørScreen() {
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState("");
  const [buttonColor, setButtonColor] = useState(colors.slateBlue); // Default color

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
    }
  }, []);

  const handleScan = async () => {
    const colorStatus = await ScanStatusComponent();
    console.log(colorStatus); // Log colorStatus
    setButtonColor(colorStatus);
    setTimeout(() => setButtonColor(colors.slateBlue), 5000); // Reset after 5 seconds
  };

  return (
    <View style={[globalStyles.container, { padding: 20 }]}>
      <Text style={[globalStyles.welcomeText, { marginBottom: 20 }]}>
         Welcome to <Text style={{ color: colors.freshGreen }}>WASH</Text><Text style={{ color: "#000" }}>MATE</Text>, {displayName}!
      </Text>

      <ScanAnimationComponent colorStatus={buttonColor} onPress={handleScan}>
        <Text style={globalStyles.touchableText}>Scan Status</Text>
      </ScanAnimationComponent>

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
