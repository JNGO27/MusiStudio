import Animated, { useAnimatedStyle } from "react-native-reanimated";

import type { SharedValue } from "react-native-reanimated";

import type { StyleSheetProps } from "@src/types";

type Props = {
  scale: SharedValue<number>;
  styles: StyleSheetProps;
};

const Dot = ({ scale, styles }: Props) => {
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return <Animated.View style={[styles.dot, style]} />;
};

export default Dot;
