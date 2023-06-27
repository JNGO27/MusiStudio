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
  dimensionWidth: number,
  dimensionHeight: number,
) => {
  const circleDimension = horizontalScale(spacing.multipleReg * 10);
  const circleBorder = horizontalScale(dimensionWidth);

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
      top: 0,
      height: circleDimension,
      width: "100%",
      borderRadius: circleBorder,
    },
    headlineText: {
      position: "absolute",
      bottom: verticalScale(spacing.multipleS),
      fontFamily: typography.bold,
      fontSize: moderateScale(18),
      color: lightPurples.lightPurple100,
      textAlign: "center",
      width: "50%",
    },
    detailsContent: {
      position: "relative",
      top: 0,
      height: "100%",
      width: "100%",
      paddingTop: spacing.multipleXL * 3,
      gap: spacing.multipleXL * 2,
      paddingLeft: spacing.multipleXL * 2,
      paddingRight: spacing.multipleXL * 2,
    },
    familyDetailContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.multipleXL * 2,
      width: "100%",
    },
    familyDetailHeadline: {
      display: "flex",
      flex: 1,
      fontSize: moderateScale(16),
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
    familyDetailSubline: {
      display: "flex",
      flex: 1.5,
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
