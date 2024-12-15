import { Alert, Vibration } from "react-native";
import { getDatabase, ref, get } from "firebase/database";

// import components
import { NfcScanComponent } from "./NFC_scan_component"; 

export const ScanStatusComponent = async (

) => {
  // Retrieve the NFC tag ID from the DB and compare it with the scanned NFC tag
  const handleTagProcessing = async (tagId) => {
    const db = getDatabase();
    const registrationRef = ref(db, "registrations/");

    const snapshot = await get(registrationRef);

    if (!snapshot.exists()) {
      Alert.alert("No registrations found in the database.");
      return;
    }

    const registrations = snapshot.val();
    let found = false;

    // Loop through the registrations to compare scanned NFC tag to the DB
    Object.keys(registrations).forEach((key) => {
      const registeredTagId = registrations[key].id.toUpperCase().trim();
      if (registeredTagId === tagId) {
        found = key;
      }
    });

    // If found run animation based on status and vibrate
    if (found) {
      const registration = registrations[found];
      if (registration.Status === "Active") {
      } else if (registration.Status === "Inactive") {
      }
      Vibration.vibrate(500);
    } else {
      Alert.alert("NFC Tag not registered.");
    }
  };

  try {
    await NfcScanComponent(async (tagId) => {
      console.log("Scanned NFC Tag ID:", tagId);
      await handleTagProcessing(tagId);
    });
  } catch (error) {
    console.warn("NFC scan failed:", error);
    Alert.alert("NFC Scan failed. Please try again.");
  }
};
