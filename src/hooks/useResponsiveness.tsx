import { useWindowDimensions } from "react-native";

const useResponsiveness = () => {
  const { width, height } = useWindowDimensions();

  const guidelineBaseWidth = 365;
  const guidelineBaseHeight = 655;

  const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
  const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
  const moderateScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

  return [horizontalScale, verticalScale, moderateScale];
};

export default useResponsiveness;
