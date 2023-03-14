import { StyleSheet } from "react-native";

import globalStyles from "@src/globalStyles";
import { DirectionalScale, CalculatedScale } from "@src/types";

const {
  spacing,
  colors: { whites, grays, purples, pinks },
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      minHeight: "100%",
    },
    card: {
      display: "flex",
      flexShrink: 1,
      alignContent: "stretch",
      gap: spacing.multipleReg,
      width: horizontalScale(spacing.multipleReg * 35),
      height: verticalScale(spacing.multipleReg * 35),
      maxWidth: spacing.multipleReg * 45,
      maxHeight: spacing.multipleReg * 70,
      margin: horizontalScale(-spacing.multipleReg * 6),
      paddingTop: verticalScale(spacing.multipleL * 1.5),
      backgroundColor: whites.white200,
      borderRadius: spacing.multipleReg * 4.5,
    },
    image: {
      display: "flex",
      flexShrink: 1,
      width: horizontalScale(spacing.multipleReg * 36),
      maxWidth: spacing.multipleReg * 52,
      height: verticalScale(spacing.multipleReg * 24),
      marginRight: horizontalScale(11),
    },
    decorationsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: verticalScale(spacing.multipleM),
    },
    headlineText: {
      color: "hsl(252.5, 94.7%, 85.1%)",
      fontFamily: typography.bold,
      fontSize: moderateScale(24),
      textAlign: "center",
    },
    headlineSubText: {
      color: grays.gray300,
      fontFamily: typography.medium,
      fontSize: moderateScale(12),
      paddingHorizontal: horizontalScale(spacing.multipleReg * 4),
    },
  });
};
