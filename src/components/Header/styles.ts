/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { whites },
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    headerContainer: {
      position: "absolute",
      top: 0,
      backgroundColor: whites.white100,
      width: "100%",
      height: spacing.multipleXL * 5.5,
      paddingHorizontal: spacing.multipleXL * 2,
      borderBottomLeftRadius: spacing.multipleXL * 4,
      borderBottomRightRadius: spacing.multipleXL * 4,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 5,
    },
    headerText: { fontFamily: typography.semiBold },
  });
};
