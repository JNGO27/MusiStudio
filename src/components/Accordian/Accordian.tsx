import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import type { ReactNode } from "react";
import type { StyleSheetProps } from "@src/types";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type Props = {
  unOpenedText: string;
  openedText: string;
  openedAnimatedHeight: number;
  // eslint-disable-next-line react/require-default-props
  styleSheet?: StyleSheetProps;
  children: ReactNode;
};

const Accordion = ({
  unOpenedText,
  openedText,
  openedAnimatedHeight,
  styleSheet,
  children,
}: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const [isOpen, setIsOpen] = useState(false);

  const animatedHeight = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(animatedHeight.value, { duration: 300 }),
    };
  });

  const handlePress = () => {
    setIsOpen(!isOpen);
    animatedHeight.value = isOpen ? 0 : openedAnimatedHeight;
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, styleSheet]}
    >
      <Text style={[styles.title, styleSheet]}>
        {isOpen ? unOpenedText : openedText}
      </Text>
      <Animated.View style={[styles.content, animatedStyles]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Accordion;
