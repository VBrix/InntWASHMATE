import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity } from "react-native";

import { colors, globalStyles } from "../styles/globalStyles";

// Function to change color of touchable opacity when clicked
export const ScanAnimationComponent = ({ colorStatus, onPress, children }) => {
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundColorAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(backgroundColorAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }, 3000); 
    });
  }, [colorStatus]);

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.slateBlue, colorStatus],
  });
  // Returning the TouchableOpcaity imported to scan status and wash
  return (
    <Animated.View style={[globalStyles.scanTouchable, { marginBottom: 20 }, { backgroundColor }]}>
      <TouchableOpacity onPress={onPress} style={{ padding: 20, borderRadius: 15 }}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};
