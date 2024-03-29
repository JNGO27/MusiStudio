/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Dimensions } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const dimensionsHeight = Dimensions.get("window").height;

const {
  colors: { whites, grays, lightPurples, purples, pinks },
  spacing,
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
    },
    textContainer: {
      paddingTop: spacing.multipleXL * 6,
      paddingLeft: spacing.multipleXL * 4,
    },
    headlineText: {
      fontFamily: typography.bold,
      fontSize: 20,
      color: lightPurples.lightPurple100,
    },
    headlineSubText: {
      color: grays.gray300,
      fontFamily: typography.medium,
      fontSize: moderateScale(10),
      width: "95%",
    },
    card: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: horizontalScale(spacing.multipleReg * 32.5),
      height: verticalScale(spacing.multipleReg * 20),
      marginTop: verticalScale(spacing.multipleXL * 2),
      marginHorizontal: "auto",
      paddingHorizontal: spacing.multipleXL,
      maxWidth: spacing.multipleReg * 45,
      maxHeight: spacing.multipleReg * 70,
      backgroundColor: whites.white200,
      borderRadius: spacing.multipleReg * 4.5,
    },
    emailInput: {
      position: "relative",
      width: "100%",
      display: "flex",
      height: moderateScale(spacing.multipleXL * 3),
      maxHeight: spacing.multipleXL * 4,
      paddingLeft: moderateScale(spacing.multipleReg * 4, 0.25),
      paddingRight: horizontalScale(spacing.multipleReg * 2),
      borderWidth: spacing.multipleXS,
      borderColor: grays.gray300,
      borderRadius: spacing.multipleReg * 4.5,
      backgroundColor: whites.white200,
    },
    emailImage: {
      position: "absolute",
      transform: [{ translateY: verticalScale(-17.5) }],
      left: spacing.multipleReg * 2.5,
      zIndex: 1,
      width: moderateScale(spacing.multipleReg * 2.5),
      maxWidth: spacing.multipleL * 2.5,
      height: moderateScale(spacing.multipleReg * 2.5),
      maxHeight: spacing.multipleL * 2.5,
    },
    magicLinkButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      height: verticalScale(spacing.multipleReg * 4.5),
      position: "relative",
      top: spacing.multipleReg * 3.5,
      borderRadius: spacing.multipleReg * 4.5,
    },
    magicLinkTouchable: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    disabledButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      height: verticalScale(spacing.multipleReg * 4.5),
      position: "relative",
      top: spacing.multipleReg * 3.5,
      borderRadius: spacing.multipleReg * 4.5,
      backgroundColor: pinks.pink300,
      opacity: 0.25,
    },
    text: {
      position: "relative",
      top: spacing.multipleXS,
      color: purples.purple100,
      opacity: 0.75,
      fontFamily: typography.bold,
      fontSize: moderateScale(10),
    },
    backgroundDecoration: {
      position: "absolute",
      alignSelf: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      top: dimensionsHeight - dimensionsHeight / 1.5,
      width: dimensionsHeight * 2,
      height: dimensionsHeight * 2,
      borderRadius: dimensionsHeight,
      backgroundColor: purples.purple100,
      opacity: 0.25,
      zIndex: -1,
    },
    arrow: {
      position: "absolute",
      top: dimensionsHeight - dimensionsHeight / 1.4,
      color: whites.white100,
      width: moderateScale(spacing.multipleXL * 12),
      height: moderateScale(spacing.multipleXL * 12),
      opacity: 0.85,
      zIndex: 2,
    },
  });
};
