import { StyleSheet } from "react-native";

import globalStyles from "@src/globalStyles";
import { DirectionalScale, CalculatedScale } from "@src/types";

const {
  spacing,
  colors: { whites, grays, purples, lightPurples, pinks },
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
    },
    scrollContainer: {
      display: "flex",
      minHeight: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      display: "flex",
      justifyContent: "center",
      flexShrink: 1,
      alignContent: "stretch",
      gap: spacing.multipleReg,
      width: horizontalScale(spacing.multipleReg * 32.5),
      height: verticalScale(spacing.multipleReg * 27),
      maxWidth: spacing.multipleReg * 45,
      maxHeight: spacing.multipleReg * 70,
      backgroundColor: whites.white200,
      borderRadius: spacing.multipleReg * 4.5,
    },
    image: {
      display: "flex",
      flexShrink: 1,
      position: "relative",
      top: verticalScale(spacing.multipleReg * 8.5),
      width: verticalScale(spacing.multipleReg * 37),
      maxWidth: spacing.multipleReg * 52,
      height: verticalScale(spacing.multipleReg * 29),
      marginLeft: verticalScale(spacing.multipleReg * 2),
    },
    decorationsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: -verticalScale(spacing.multipleXL * 3),
    },
    decorationsContainerInner: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: verticalScale(spacing.multipleXS),
      marginBottom: verticalScale(spacing.multipleS),
    },
    decorationCircle: {
      backgroundColor: pinks.pink100,
      width: horizontalScale(spacing.multipleXS),
      height: horizontalScale(spacing.multipleXS),
      borderRadius: 50,
    },
    decorationBox: {
      backgroundColor: purples.purple100,
      height: horizontalScale(spacing.multipleXS),
      width: horizontalScale(spacing.multipleReg * 4),
      maxWidth: spacing.multipleReg * 5,
      borderRadius: spacing.multipleReg * 4.5,
    },
    accountPerson: {
      display: "flex",
      justifyContent: "center",
      width: horizontalScale(spacing.multipleL * 3),
      maxWidth: spacing.multipleL * 5,
      height: horizontalScale(spacing.multipleL * 3),
      maxHeight: spacing.multipleL * 4,
      marginBottom: spacing.multipleXL,
    },
    logInContainer: {
      display: "flex",
      alignItems: "center",
      gap: verticalScale(spacing.multipleS),
      width: "100%",
      marginTop: verticalScale(spacing.multipleReg * 3),
    },
    text: {
      color: grays.gray400,
    },
    headlineContainer: {
      position: "relative",
      top: verticalScale(spacing.multipleReg * 3.5),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: spacing.multipleReg * 6,
    },
    headlineText: {
      color: lightPurples.lightPurple100,
      fontFamily: typography.bold,
      fontSize: horizontalScale(24),
      textAlign: "center",
    },
    headlineSubText: {
      color: grays.gray300,
      fontFamily: typography.medium,
      fontSize: moderateScale(12),
      textAlign: "center",
      paddingHorizontal: moderateScale(spacing.multipleReg * 2.5),
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      borderTopColor: grays.gray300,
      borderTopWidth: 1,
      opacity: 0.5,
      marginTop: verticalScale(spacing.multipleReg * 6),
      paddingBottom: spacing.multipleXL,
    },
    footerText: {
      textAlign: "center",
      width: "85%",
      paddingTop: spacing.multipleReg,
      color: whites.white200,
      fontSize: moderateScale(10),
      fontFamily: typography.medium,
    },
    creditsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.multipleM,
      paddingBottom: spacing.multipleL,
    },
    creditsText: {
      textAlign: "center",
      paddingTop: spacing.multipleReg,
      color: whites.white200,
      fontSize: moderateScale(10),
      fontFamily: typography.medium,
    },
    freePik: {
      paddingTop: spacing.multipleReg,
      color: pinks.pink300,
      textDecorationLine: "underline",
      textDecorationColor: pinks.pink300,
      fontSize: moderateScale(10),
      fontFamily: typography.medium,
    },
  });
};
