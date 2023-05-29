/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { lightPurples, whites, purples },
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  const circleDimension = verticalScale(spacing.multipleReg * 90);
  const circleBorder = verticalScale(circleDimension / 2);
  const circleTopOffset = verticalScale(
    -circleBorder - spacing.multipleReg * 2,
  );

  return StyleSheet.create({
    detailsContainer: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      backgroundColor: purples.purple100,
    },
    gradientDecoration: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      top: circleTopOffset,
      height: circleDimension,
      width: circleDimension,
      borderRadius: circleBorder,
    },
    headlineText: {
      position: "absolute",
      bottom: spacing.multipleReg * 6,
      fontFamily: typography.bold,
      fontSize: moderateScale(18),
      color: lightPurples.lightPurple100,
    },
    detailsContent: {
      position: "relative",
      top: circleTopOffset,
      height: "100%",
      width: "100%",
      paddingTop: spacing.multipleXL * 3,
      paddingHorizontal: spacing.multipleXL * 4,
    },
    rateHeadline: {
      fontSize: moderateScale(22),
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
  });
};
