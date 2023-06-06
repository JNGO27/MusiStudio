/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { grays },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    tabBarItemStyleSheet1: {
      columnGap: spacing.multipleXS,
      borderRightWidth: spacing.multipleXS,
      borderRightColor: grays.gray600,
    },
    tabBarItemStyleSheet2: {
      columnGap: spacing.multipleXS,
      borderleftWidth: spacing.multipleXS,
      borderleftColor: grays.gray300,
    },
  });
};
