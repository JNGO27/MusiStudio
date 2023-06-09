import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  dotSize: number,
  dotColor: string,
) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: dotSize,
    },
    dot: {
      height: horizontalScale(dotSize),
      width: horizontalScale(dotSize),
      borderRadius: horizontalScale(dotSize / 2),
      backgroundColor: dotColor,
    },
  });
};
