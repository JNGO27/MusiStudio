/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { lightPurples, purples, whites, blacks, grays },
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
      gap: spacing.multipleXL * 2,
      paddingHorizontal: spacing.multipleXL * 2,
    },
    rateContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      gap: spacing.multipleXL * 2,
      marginBottom: spacing.multipleXL,
    },
    rateInnerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      gap: spacing.multipleL,
    },
    rateHeadline: {
      display: "flex",
      flex: 1,
      fontSize: moderateScale(22),
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
    rateAmount: {
      fontSize: moderateScale(20),
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
    rateSubline: {
      fontSize: moderateScale(12),
      fontFamily: typography.semiBold,
      color: whites.white200,
      textAlign: "center",
    },
    studentDetailContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.multipleXL * 2,
      width: "100%",
    },
    studentDetailHeadline: {
      display: "flex",
      flex: 1,
      fontSize: moderateScale(16),
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
    studentDetailSubline: {
      display: "flex",
      flex: 1,
      fontSize: moderateScale(14),
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
    buttonsContainer: {
      position: "absolute",
      bottom: -spacing.multipleXS,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      borderTopLeftRadius: spacing.multipleXL * 6,
      borderTopRightRadius: spacing.multipleXL * 6,
      borderColor: grays.gray800,
      borderWidth: spacing.multipleXS,
      height: verticalScale(spacing.multipleXL * 5),
      backgroundColor: blacks.blackAlpha40,
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      gap: spacing.multipleS,
    },
    buttonText: {
      fontSize: moderateScale(12),
      fontFamily: typography.semiBold,
      color: grays.gray300,
    },
    divider: {
      height: "100%",
      width: spacing.multipleXS,
      backgroundColor: grays.gray800,
    },
    icon: {
      width: spacing.multipleReg * 3,
      height: spacing.multipleReg * 3,
      color: grays.gray800,
    },
  });
};
