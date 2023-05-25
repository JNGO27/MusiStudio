/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  typography,
  colors: { whites },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    addButton: {
      width: spacing.multipleXL * 3.5,
      height: spacing.multipleXL * 3.5,
      borderRadius: (spacing.multipleXL * 3.5) / 2,
      padding: spacing.multipleS,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: -spacing.multipleL,
    },
    addButtonTouchable: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
    addButtonIcon: {
      position: "relative",
      alignSelf: "center",
      bottom: verticalScale(spacing.multipleXS * 2.75),
      color: whites.white200,
      fontFamily: typography.semiBold,
      fontSize: spacing.multipleReg * 3,
    },
  });
};
