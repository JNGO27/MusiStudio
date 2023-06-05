/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const { spacing } = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    iconContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: spacing.multipleXL * 6,
      height: spacing.multipleXL * 6,
      borderRadius: spacing.multipleXL * 3,
      zIndex: 2,
    },
    icon: {
      width: spacing.multipleReg * 4,
      height: spacing.multipleReg * 4,
      color: "white",
    },
  });
};
