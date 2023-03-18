/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  colors: { whites, lightPurples, pinks },
  spacing,
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      paddingTop: spacing.multipleXL * 6,
      paddingLeft: spacing.multipleXL * 4,
    },
    headlineText: {
      fontFamily: typography.bold,
      fontSize: 20,
      color: lightPurples.lightPurple100,
    },
  });
};
