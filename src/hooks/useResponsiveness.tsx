import { useWindowDimensions } from "react-native";

import type { DirectionalScale, CalculatedScale } from "@src/types";

const useResponsiveness = () => {
  const { width: dimensionWidth, height: dimensionHeight } =
    useWindowDimensions();

  const guidelineBaseWidth = 365;
  const guidelineBaseHeight = 655;

  const horizontalScale: DirectionalScale = (size: number) =>
    (dimensionWidth / guidelineBaseWidth) * size;

  const verticalScale: DirectionalScale = (size: number) =>
    (dimensionHeight / guidelineBaseHeight) * size;

  const moderateScale: CalculatedScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

  type ResponsiveResultTuple = [
    typeof horizontalScale,
    typeof verticalScale,
    typeof verticalScale,
    typeof dimensionWidth,
    typeof dimensionHeight,
  ];

  const result: ResponsiveResultTuple = [
    horizontalScale,
    verticalScale,
    moderateScale,
    dimensionWidth,
    dimensionHeight,
  ];

  return result;
};

export default useResponsiveness;
