// components/registrationGuide_screen.js
import React from "react";
import { Text, ScrollView, View } from "react-native";
import { globalStyles, colors } from "../styles/globalStyles";

export default function RegistrationGuideScreen() {
  return (
    <ScrollView
      contentContainerStyle={[globalStyles.scrollContainer, { paddingTop: 60, backgroundColor: colors.softIvory }]}
      style={{ backgroundColor: colors.softIvory }} 
    >
      <View style={[globalStyles.guideContainer, { backgroundColor: colors.softIvory }]}>
        <Text style={globalStyles.titleText}>
          Guide to Register New Clothing Item Using NFC Tag
        </Text>

        <Text style={globalStyles.stepText}>
          Step 1: Press the text field above the button: "Scan NFC Tag and Save"
        </Text>
        <Text style={globalStyles.stepText}>
          Step 2: Write the, regulatory determined, maximum number of washes and product number
        </Text>
        <Text style={globalStyles.stepText}>
          Step 3: Press the button: "Scan NFC Tag and Save"
        </Text>
        <Text style={globalStyles.stepText}>
          Step 4: Hold the phone and scan the NFC tag located in the clothing item
        </Text>
      </View>
    </ScrollView>
  );
}
