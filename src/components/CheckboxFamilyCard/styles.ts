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
      width: horizontalScale(spacing.multipleXL * 13),
      height: verticalScale(spacing.multipleXL * 10),
      borderRadius: spacing.multipleReg * 4,
      opacity: 2,
      backgroundColor: isChosen ? greens.green50 : "white",
      borderWidth: spacing.multipleXS,
      borderColor: isChosen ? greens.green500 : grays.gray300,
    },
  });
};
