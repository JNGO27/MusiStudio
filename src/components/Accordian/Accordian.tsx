/* eslint-disable react/require-default-props */
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
  styleSheet?: StyleSheetProps;
  icon?: string;
  children: ReactNode;
};

const Accordion = ({
  unOpenedText,
  openedText,
  openedAnimatedHeight,
  styleSheet,
  icon,
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
    <>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.container, styleSheet?.container]}
      >
        <Text style={[styles.title, styleSheet?.title]}>
          {isOpen ? unOpenedText : openedText}
        </Text>
        <Text style={[styles.icon, styleSheet?.icon]}>{icon}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.content, animatedStyles]}>
        {children}
      </Animated.View>
    </>
  );
};

export default Accordion;
