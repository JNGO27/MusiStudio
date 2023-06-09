import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

const SplashScreenCustom = () => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(2);

  useEffect(() => {
    scale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.bounce,
    });
    opacity.value = withTiming(1, {
      duration: 1200,
      easing: Easing.ease,
    });
  }, [opacity, scale]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Text>Splash Screen</Text>
    </Animated.View>
  );
};

export default SplashScreenCustom;
