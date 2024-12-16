import * as MailComposer from "expo-mail-composer";
import { Alert } from "react-native";

export const sendMail = async ( product, name) => {
  // Check if the MailComposer is available on the device
  try {
    const isAvailable = await MailComposer.isAvailableAsync();
    if (!isAvailable) {
      Alert.alert("Error", "MailComposer is not available on this device.");
      return;
    }
    // Define format for mail
    const result = await MailComposer.composeAsync({
      recipients: "washmatecorp@gmail.com",
      subject: `Clothing item near wash limit`,
      body: `Hello WASHMATE,\n\nOne of our clothing items with the product number ${product} only has 2 washes left.\n\nBest regards,\n ${name}`,
    });

    console.log("MailComposer result:", result);
    if (result.status === "sent") {
      Alert.alert("Success", "Email sent successfully.");
    // Errorhandling for mail
    } else {
      Alert.alert("Failed", "Failed to send email.");
    }
  } catch (error) {
    Alert.alert("Error", "An error occurred while sending the email.");
    console.error(error);
  }
};
