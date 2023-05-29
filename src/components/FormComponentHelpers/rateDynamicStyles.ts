import { StyleSheet } from "react-native";

import type { CalculatedScale, RateCheckboxesState } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  typography,
  colors: { blacks, greens },
} = globalStyles;

export default (
  moderateScale: CalculatedScale,
  rateState: RateCheckboxesState,
) => {
  return StyleSheet.create({
    checkboxCardPerHour: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: rateState.PER_HOUR ? greens.green800 : blacks.blackAlpha50,
      textAlign: "left",
      paddingLeft: spacing.multipleL * 2,
    },
    checkboxCardPerLesson: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: rateState.PER_LESSON ? greens.green800 : blacks.blackAlpha50,
      textAlign: "left",
      paddingLeft: spacing.multipleL * 2,
    },
    checkboxCardPerMonth: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: rateState.PER_MONTH ? greens.green800 : blacks.blackAlpha50,
      textAlign: "left",
      paddingLeft: spacing.multipleL * 2,
    },
  });
};
