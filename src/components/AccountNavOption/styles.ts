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
  const accountSize = verticalScale(spacing.multipleL * 3.75);

  return StyleSheet.create({
    accountNavContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: accountSize + spacing.multipleReg,
      height: accountSize + spacing.multipleReg,
      borderRadius: accountSize + spacing.multipleReg / 2,
      borderWidth: spacing.multipleXS,
      borderColor: grays.gray300,
      margin: spacing.multipleXL,
    },
    accountIcon: {
      width: accountSize,
      height: accountSize,
      color: grays.gray300,
      borderRadius: accountSize / 2,
    },
  });
};
