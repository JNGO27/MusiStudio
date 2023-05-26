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

  let typeResults;
  let typeMessage;

  if (type === "Success") {
    typeResults = styles.messageSuccessContainer;
  } else if (type === "Error") {
    typeResults = styles.messageErrorContainer;
  } else {
    typeResults = styles.messageCancelContainer;
  }

  if (type === "Success") {
    typeMessage = "Student has successfully been added.";
  } else if (type === "Error") {
    typeMessage = "Please fill out the empty form values highlighted in red.";
  } else {
    typeMessage = "Student form submission has been canceled.";
  }

  const successOrErrorStyles = {
    messageContainer: typeResults,
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
