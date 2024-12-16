import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

// Import components
import { LogOut } from "../components/log_out_component";
import { ScanWashComponent } from "../components/scan_wash_component";
import { ScanAnimationComponent } from "../components/scan_animation_component";
import { globalStyles, colors } from "../styles/globalStyles";


export default function RengøringsansvarligScreen() {
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState("");
  const [buttonColor, setButtonColor] = useState(colors.slateBlue); 
  const [displayScanStatus, setDisplayScanStatus] = useState(false);

  // Get logged in user
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
    }
  }, []);

  // Change color and display if scanning is in progress
  const handleScan = async () => {
    setDisplayScanStatus(true);
    const colorStatus = await ScanWashComponent();
    setDisplayScanStatus(false);
    setButtonColor(colorStatus);
    setTimeout(() => setButtonColor(colors.slateBlue), 3000); 
  };

  return (
    <View style={[globalStyles.container, { padding: 20 }]}>
      <Text style={[globalStyles.welcomeText, { marginBottom: 20 }]}>
        Welcome to <Text style={{ color: colors.freshGreen }}>WASH</Text>
        <Text style={{ color: "#000" }}>MATE</Text>, {displayName}!
      </Text>

      {displayScanStatus && <Text style ={globalStyles.titleText}> Scanning...</Text>}
      
      <ScanAnimationComponent colorStatus={buttonColor} onPress={handleScan}>
        <Text style={globalStyles.touchableText}>Scan Wash</Text>
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
