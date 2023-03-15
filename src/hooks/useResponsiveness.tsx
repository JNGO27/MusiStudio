import { useWindowDimensions } from "react-native";

import type { DirectionalScale, CalculatedScale } from "@src/types";

const useResponsiveness = () => {
  const { width, height } = useWindowDimensions();

  const guidelineBaseWidth = 365;
  const guidelineBaseHeight = 655;

  const horizontalScale: DirectionalScale = (size: number) =>
    (width / guidelineBaseWidth) * size;

  const verticalScale: DirectionalScale = (size: number) =>
    (height / guidelineBaseHeight) * size;

  const moderateScale: CalculatedScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

  return [horizontalScale, verticalScale, moderateScale];
};

export default useResponsiveness;
