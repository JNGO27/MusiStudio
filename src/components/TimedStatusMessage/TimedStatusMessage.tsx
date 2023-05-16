import { useEffect } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const TimedStatusMessage = () => {
  const [horizontalScale, verticalScale, moderateScale, dimensionHeight] =
    useResponsiveness();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const translateY = useSharedValue(dimensionHeight);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const twoSeconds = 2000;

  useEffect(() => {
    translateY.value = withTiming(dimensionHeight / 2, { duration: 500 });

    const timer = setTimeout(() => {
      translateY.value = withTiming(dimensionHeight, { duration: 500 });
    }, twoSeconds);

    return () => {
      clearTimeout(timer);
    };
  }, [dimensionHeight, translateY]);

  return (
    <PanGestureHandler>
      <Animated.View
        style={[
          {
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "50%",
            backgroundColor: "lightblue",
          },
          animatedStyle,
        ]}
      />
    </PanGestureHandler>
  );
};

export default TimedStatusMessage;
