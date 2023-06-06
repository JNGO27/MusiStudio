/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  typography,
  colors: { purples, whites },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  const circleSize = horizontalScale(spacing.multipleXL * 5.5);

  return StyleSheet.create({
    touchableBackground: {
      overflow: "hidden",
      borderRadius: spacing.multipleXL * 3,
    },
    touchableContainer: {
      display: "flex",
      alignItems: "center",
    },
    dashboardCardContainer: {
      display: "flex",
      alignItems: "center",
      width: horizontalScale(spacing.multipleXL * 11.5),
      height: verticalScale(spacing.multipleXL * 12.25),
      borderRadius: spacing.multipleXL * 3,
      shadowOffset: { width: 0, height: -1.5 },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 15,
    },
    circleDecoration: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: spacing.multipleXL * 2,
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      backgroundColor: purples.purple100,
    },
    studentsIcon: {
      width: spacing.multipleXL * 3.5,
      height: spacing.multipleXL * 3.5,
      color: whites.white200,
    },
    studentsText: {
      fontFamily: typography.medium,
      fontSize: moderateScale(14),
      color: whites.white300,
      opacity: 0.85,
      width: "80%",
      marginTop: spacing.multipleXL,
      textAlign: "center",
    },
  });
};
