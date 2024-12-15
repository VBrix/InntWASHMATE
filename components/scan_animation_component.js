import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";

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
      }, 3000); // Reset after 5 seconds
    });
  }, [colorStatus]);

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(94, 127, 164, 1)", colorStatus], // From default color to the new color
  });

  return (
    <Animated.View style={[globalStyles.scanTouchable, { marginBottom: 20 }, { backgroundColor }]}>
      <TouchableOpacity onPress={onPress} style={{ padding: 20, borderRadius: 15 }}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};
