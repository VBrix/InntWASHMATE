import * as MailComposer from "expo-mail-composer";
import { Alert } from "react-native";

export const sendMail = async (recipient, product, name) => {
  try {
    const isAvailable = await MailComposer.isAvailableAsync();
    if (!isAvailable) {
      Alert.alert("Error", "MailComposer is not available on this device.");
      return;
    }

    const result = await MailComposer.composeAsync({
      recipients: [recipient],
      subject: `Clothing item near wash limit`,
      body: `Hello ${name},\n\nOne of your clothing items with the product number ${product} only has 2 washes left.\n\nBest regards,\nWASHMATE`,
    });

    console.log("MailComposer result:", result);

    if (result.status === "sent") {
      Alert.alert("Success", "Email sent successfully.");
    } else {
      Alert.alert("Failed", "Failed to send email.");
    }
  } catch (error) {
    Alert.alert("Error", "An error occurred while sending the email.");
    console.error(error);
  }
};
