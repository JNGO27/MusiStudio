import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  colors: { whites, purples },
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
    logOutButton: {
      position: "absolute",
      bottom: verticalScale(spacing.multipleXL * 6),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: horizontalScale(spacing.multipleXL * 15),
      height: verticalScale(spacing.multipleReg * 5),
      borderColor: purples.purple1000,
      borderWidth: spacing.multipleXS,
      borderRadius: spacing.multipleReg * 2.5,
      backgroundColor: purples.purple100,
      shadowColor: whites.white100,
      shadowOffset: { width: 0, height: -1.5 },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 3,
    },
    buttonText: {
      color: "white",
      fontFamily: typography.bold,
      fontSize: moderateScale(16),
    },
  });
};
