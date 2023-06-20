import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  colors: { whites },
  spacing,
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    screenContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: "black",
      paddingHorizontal: horizontalScale(spacing.multipleXL * 1.5),
    },
    headlineText: {
      position: "absolute",
      top: verticalScale(spacing.multipleReg * 6.5),
      fontFamily: typography.bold,
      fontSize: moderateScale(20),
      color: whites.white300,
    },
    settingsCardsContainer: {
      display: "flex",
      gap: spacing.multipleXL * 2,
      width: "100%",
    },
  });
};
