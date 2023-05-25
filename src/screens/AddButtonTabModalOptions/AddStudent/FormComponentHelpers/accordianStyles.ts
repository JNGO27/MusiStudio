import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { grays },
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
      alignItems: "baseline",
      gap: spacing.multipleReg * 2,
      width: "100%",
      paddingLeft: spacing.multipleXL * 2,
      borderWidth: 0,
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0,
      fontSize: moderateScale(14),
      fontFamily: typography.semiBoldItalic,
      color: grays.gray800,
    },
    icon: {
      position: "relative",
      top: 1.5,
      height: "100%",
      fontSize: moderateScale(14),
      fontFamily: typography.semiBoldItalic,
    },
  });
};
