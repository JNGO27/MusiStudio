/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { reds, greens, blacks },
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  dimensionWidth: number,
) => {
  const centeredValue = dimensionWidth / 2 - (dimensionWidth * 0.91) / 2;

  return StyleSheet.create({
    messageSuccessContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: horizontalScale(centeredValue),
      bottom: verticalScale(spacing.multipleXL * 6.75),
      width: "80%",
      height: verticalScale(spacing.multipleXL * 4.5),
      paddingHorizontal: spacing.multipleXL,
      borderRadius: spacing.multipleXL * 4,
      borderColor: greens.green700,
      borderWidth: spacing.multipleXS,
      backgroundColor: greens.green50,
      shadowColor: greens.green700,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 2,
      shadowRadius: 2,
      elevation: 12,
    },
    messageErrorContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "absolute",
      left: horizontalScale(centeredValue),
      bottom: verticalScale(spacing.multipleXL * 6.75),
      width: "90%",
      height: verticalScale(spacing.multipleXL * 5),
      paddingHorizontal: spacing.multipleXL,
      borderRadius: spacing.multipleXL * 4,
      borderColor: reds.red700,
      borderWidth: spacing.multipleXS,
      backgroundColor: reds.red50,
      shadowColor: reds.red700,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 2,
      shadowRadius: 2,
      elevation: 12,
    },
    messageText: {
      position: "relative",
      top: spacing.multipleXS,
      lineHeight: spacing.multipleReg * 3,
      textAlign: "center",
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: blacks.black,
    },
  });
};
