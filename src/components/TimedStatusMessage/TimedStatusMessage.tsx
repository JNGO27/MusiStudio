/* eslint-disable react/require-default-props */
import { useEffect } from "react";
import { View, Text, Platform } from "react-native";
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
  const isIOS = Platform.OS === "ios";

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

  const iosArrMessage = typeMessage.split(" ");
  const iosFirstHalf = iosArrMessage
    .slice(0, iosArrMessage.length / 2)
    .join(" ");
  const iosSecondHalf = iosArrMessage.slice(iosArrMessage.length / 2).join(" ");

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
      {isIOS ? (
        <View>
          <Text style={styles.iosMessageText}>{iosFirstHalf}</Text>
          <Text style={styles.iosMessageText}>{iosSecondHalf}</Text>
        </View>
      ) : (
        <Text style={styles.messageText}>{typeMessage}</Text>
      )}
    </Animated.View>
  );
};

export default TimedStatusMessage;
