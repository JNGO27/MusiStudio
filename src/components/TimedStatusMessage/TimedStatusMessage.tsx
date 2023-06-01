/* eslint-disable react/require-default-props */
import { useEffect } from "react";
import { Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import type { TimedStatusMessageTypes } from "@src/types";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

import { getTypeStyleResults, getTypeMessage } from "./helpers";

type Props = {
  type: TimedStatusMessageTypes;
};

const TimedStatusMessage = ({ type }: Props) => {
  const [horizontalScale, verticalScale, moderateScale, , dimensionHeight] =
    useResponsiveness();

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

  const fiveSeconds = 5000;

  const typeStyleResults = getTypeStyleResults(type, styles);
  const typeMessage = getTypeMessage(type);

  const successOrErrorStyles = {
    messageContainer: typeStyleResults,
  };

  useEffect(() => {
    translateY.value = withTiming(-dimensionHeight / 17, { duration: 350 });

    const timer = setTimeout(() => {
      translateY.value = withTiming(dimensionHeight, { duration: 500 });
    }, fiveSeconds);
    return () => {
      clearTimeout(timer);
    };
  }, [dimensionHeight, translateY]);

  return (
    <Animated.View
      style={[successOrErrorStyles.messageContainer, animatedStyle]}
    >
      <Text style={styles.messageText}>{typeMessage}</Text>
    </Animated.View>
  );
};

export default TimedStatusMessage;
