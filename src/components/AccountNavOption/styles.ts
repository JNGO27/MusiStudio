/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { grays },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  const accountSize = spacing.multipleL * 4.5;

  return StyleSheet.create({
    accountNavContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: accountSize,
      height: accountSize,
      borderRadius: accountSize / 2,
    },
    accountIcon: {
      width: accountSize,
      height: accountSize,
      color: grays.gray300,
    },
  });
};
