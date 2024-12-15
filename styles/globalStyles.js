import { StyleSheet } from "react-native";

export const colors = {
  freshGreen: "rgb(132, 189, 57)", // Fresh Green
  softIvory: "rgb(242, 236, 220)", // Soft Sand Beige
  refinedCharcoalGray: "rgb(47, 47, 47)", // Refined Charcoal Gray
  slateBlue: "rgb(94, 127, 164)", // Slate Blue
  elegantGold: "rgb(189, 175, 100)", // Elegant Gold
  lightGray: "rgb(201, 199, 180)", // Light Gray
  yellow: "rgb(245, 203, 66)", // Yellow
  red: "rgb(199, 67, 50)", // Red

};

export const globalStyles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: colors.softIvory, // Updated background color
  },
  secondaryContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: colors.softIvory, // Updated background color
  },
  scrollContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.softIvory, // Updated background color
  },
  separator: {
    height: 1,
    backgroundColor: colors.refinedCharcoalGray, // Updated separator color
    marginVertical: 10,
  },

  // Typography
  titleText: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.refinedCharcoalGray, // Updated text color
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 25, // Increased font size
    fontWeight: "600", // Increased font weight
    color: colors.refinedCharcoalGray, // Updated text color
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center", // Centered text
    textShadowOffset: { width: 1, height: 1 }, // Added text shadow offset
    textShadowRadius: 2, // Added text shadow radius
  },
  touchableText: {
    color: colors.softIvory, // Updated touchable text color
    fontSize: 16,
    fontWeight: "500",
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    color: colors.refinedCharcoalGray, // Updated header color
  },
  error: {
    color: "red",
    marginBottom: 20,
  },

  dashboardChart: {
    marginVertical: 20,
    alignItems: "center",
    backgroundColor: colors.lightGray, // Updated background color
    borderRadius: 12,
    padding: 15,
    shadowColor: colors.lightGray, // Updated shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Buttons and touchable elements
  touchable: {
    backgroundColor: colors.slateBlue, // Updated button color
    paddingVertical: 20, // Increased padding
    paddingHorizontal: 40, // Increased padding
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: colors.refinedCharcoalGray, // Updated shadow color
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 250, // Increased width
  },

  scanTouchable: {
    backgroundColor: colors.slateBlue, // Updated button color
    paddingVertical: 20, // Increased padding
    paddingHorizontal: 40, // Increased padding
    borderRadius: 250 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: colors.refinedCharcoalGray, // Updated shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 250, // Increased width
    height: 250, // Added height
  },

  logoutTouchable: {
    backgroundColor: colors.slateBlue, // Updated button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: colors.refinedCharcoalGray, // Updated shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 250, // Added fixed width
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.slateBlue, // Updated button color
    borderRadius: 8,
    padding: 10,
  },

  // Input fields
  input: {
    height: 50,
    width: 250, // Adjusted width
    borderColor: colors.refinedCharcoalGray, // Updated border color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: colors.softIvory, // Updated background color
    fontSize: 16, // Changed font size
    color: colors.refinedCharcoalGray, // Changed text color
    shadowColor: colors.refinedCharcoalGray, // Added shadow color
    shadowOffset: { width: 0, height: 1 }, // Reduced shadow offset
    shadowOpacity: 0.05, // Reduced shadow opacity
    shadowRadius: 2, // Reduced shadow radius
    elevation: 1, // Reduced elevation for Android shadow
  },

  // Dropdown and picker
  pickerContainer: {
    width: 250,
    height: 50,
    marginTop: 10,
  },
  dropdown: {
    position: "absolute",
    width: 250,
    backgroundColor: colors.softIvory, // Updated background color
    borderRadius: 8,
  },

  // Guide styles
  guideContainer: {
    backgroundColor: colors.lightGray,
    padding: 20,
    borderRadius: 12,
    shadowColor: colors.refinedCharcoalGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stepText: {
    fontSize: 18,
    color: colors.refinedCharcoalGray,
    marginBottom: 10,
  },
});
