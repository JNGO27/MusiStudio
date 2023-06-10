/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  typography,
  colors: { lightPurples, purples, whites },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  dimensionWidth: number,
) => {
  const circleSize = dimensionWidth;

  return StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: lightPurples.lightPurple100,
      paddingTop: spacing.multipleXL * 7,
      paddingBottom: spacing.multipleXL * 6.5,
    },
    emptyContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: lightPurples.lightPurple100,
    },
    cardsContainer: {
      width: "100%",
      paddingLeft: spacing.multipleL * 1,
    },
    cardsContainerFlex: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      gap: spacing.multipleReg * 2,
    },
    backgroundDecoration: {
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      backgroundColor: whites.white200,
      marginHorizontal: spacing.multipleXL * 20,
    },
    noStudentsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.multipleXL * 2,
      width: "100%",
      height: "100%",
      paddingHorizontal: spacing.multipleXL * 3.5,
    },
    noStudentsImage: {
      width: horizontalScale(spacing.multipleXL * 25),
      height: verticalScale(spacing.multipleXL * 6),
    },
    bodyText: {
      color: purples.purple100,
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      opacity: 0.75,
    },
  });
};
