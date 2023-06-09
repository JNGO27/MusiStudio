/* eslint-disable no-param-reassign */
import { useEffect } from "react";
import { View } from "react-native";
import {
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import type { SharedValue } from "react-native-reanimated";

import useResponsiveness from "@src/hooks/useResponsiveness";
import Dot from "./Dot";

import createStyleSheet from "./styles";

type Props = {
  dotSize: number;
  dotColor: string;
};

const ThreeDotsLoading = ({ dotSize, dotColor }: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    dotSize,
    dotColor,
  );

  const scale1 = useSharedValue(0);
  const scale2 = useSharedValue(0);
  const scale3 = useSharedValue(0);

  useEffect(() => {
    const animate = (scale: SharedValue<number>, delay: number) => {
      scale.value = withDelay(
        delay,
        withSequence(
          withTiming(1, { duration: 250 }),
          withTiming(0, { duration: 250 }),
        ),
      );
    };
    animate(scale1, 0);
    animate(scale2, 100);
    animate(scale3, 200);
    const id = setInterval(() => {
      animate(scale1, 0);
      animate(scale2, 100);
      animate(scale3, 200);
    }, 800);

    return () => {
      clearInterval(id);
    };
  }, [scale1, scale2, scale3]);

  return (
    <View style={styles.container}>
      <Dot scale={scale1} styles={styles} />
      <Dot scale={scale2} styles={styles} />
      <Dot scale={scale3} styles={styles} />
    </View>
  );
};

export default ThreeDotsLoading;
