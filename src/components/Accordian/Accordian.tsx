import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import type { ReactNode } from "react";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type Props = {
  unOpenedText: string;
  openedText: string;
  children: ReactNode;
};

const Accordion = ({ unOpenedText, openedText, children }: Props) => {
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
    animatedHeight.value = isOpen ? 0 : 100;
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.title}>{isOpen ? unOpenedText : openedText}</Text>
      <Animated.View style={[styles.content, animatedStyles]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Accordion;
