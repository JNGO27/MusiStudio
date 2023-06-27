/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { reds, greens, blacks, yellows },
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    messageSuccessContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "absolute",
      bottom: verticalScale(spacing.multipleXL * 3.75),
      width: "90%",
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
    messageCancelContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "absolute",
      bottom: verticalScale(spacing.multipleXL * 6.75),
      width: "90%",
      height: verticalScale(spacing.multipleXL * 5),
      paddingHorizontal: spacing.multipleXL,
      borderRadius: spacing.multipleXL * 4,
      borderColor: yellows.yellow700,
      borderWidth: spacing.multipleXS,
      backgroundColor: yellows.yellow50,
      shadowColor: yellows.yellow700,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 2,
      shadowRadius: 2,
      elevation: 12,
    },
    messageText: {
      position: "relative",
      top: spacing.multipleXS,
      display: "flex",
      lineHeight: spacing.multipleReg * 3,
      textAlign: "center",
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: blacks.black,
    },
    iosMessageText: {
      display: "flex",
      lineHeight: spacing.multipleReg * 3,
      textAlign: "center",
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: blacks.black,
    },
  });
};
