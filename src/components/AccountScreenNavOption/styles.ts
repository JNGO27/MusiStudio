import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  colors: { purples, grays, whites },
  spacing,
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    settingsNavCard: {
      width: "100%",
      height: verticalScale(spacing.multipleXL * 7),
      backgroundColor: grays.gray300,
      borderColor: whites.white200,
      borderWidth: spacing.multipleS,
      borderRadius: spacing.multipleXL * 2,
    },
    cardHeaderText: {
      position: "relative",
      top: verticalScale(spacing.multipleReg * 1.5),
      left: verticalScale(spacing.multipleReg),
      fontFamily: typography.bold,
      fontSize: moderateScale(16),
      color: purples.purple100,
    },
    cardSubText: {
      position: "relative",
      top: verticalScale(spacing.multipleReg * 1.5),
      left: verticalScale(spacing.multipleReg),
      fontFamily: typography.semiBold,
      fontSize: moderateScale(10),
      color: purples.purple100,
    },
  });
};
