import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const { spacing } = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  isChosen: boolean,
) => {
  return StyleSheet.create({
    checkboxCard: {
      display: "flex",
      width: horizontalScale(spacing.multipleXL * 12),
      height: verticalScale(spacing.multipleXL * 10),
      borderRadius: spacing.multipleReg * 4,
      opacity: 1,
      backgroundColor: isChosen ? "lightgreen" : "white",
    },
  });
};
