import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { grays, greens },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  isChosen: boolean,
) => {
  return StyleSheet.create({
    checkboxFamilyCard: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: horizontalScale(spacing.multipleXL * 24),
      height: verticalScale(spacing.multipleReg * 10),
      maxWidth: spacing.multipleXL * 30,
      maxHeight: spacing.multipleXL * 16,
      marginLeft: spacing.multipleM * 1,
      borderRadius: spacing.multipleReg * 2,
      opacity: 2,
      backgroundColor: isChosen ? greens.green50 : "white",
      borderWidth: spacing.multipleXS,
      borderColor: isChosen ? greens.green500 : grays.gray300,
    },
  });
};
