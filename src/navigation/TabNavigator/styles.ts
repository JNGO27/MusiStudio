/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { whites },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    tabBarStyleSheet: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bottom: 0,
      borderTopLeftRadius: spacing.multipleReg * 3,
      borderTopRightRadius: spacing.multipleReg * 3,
      height: "7.25%",
      gap: spacing.multipleReg,
      backgroundColor: whites.white200,
    },
    tabBarItemStyleSheet: {
      columnGap: spacing.multipleXS,
    },
  });
};
