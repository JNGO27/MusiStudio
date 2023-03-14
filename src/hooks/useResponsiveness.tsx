import { useWindowDimensions } from "react-native";

const useResponsiveness = () => {
  const { width, height } = useWindowDimensions();

  const guidelineBaseWidth = 280;
  const guidelineBaseHeight = 780;

  const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
  const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
  const moderateScale = (size: number, factor: number) =>
    size + (horizontalScale(size) - size) * factor;

  return [horizontalScale, verticalScale, moderateScale];
};

export default useResponsiveness;
