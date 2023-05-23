import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  typography,
  colors: { whites, purples, blues },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.multipleReg,
      width: "100%",
      height: verticalScale(spacing.multipleReg * 10),
      paddingLeft: spacing.multipleL * 2,
      backgroundColor: blues.darkBlue1100,
      borderRadius: spacing.multipleXL * 10,
    },
    optionContainer: {
      position: "relative",
      width: verticalScale(spacing.multipleReg * 8),
      height: verticalScale(spacing.multipleReg * 8),
      borderRadius: verticalScale(spacing.multipleReg * 8),
      backgroundColor: purples.purple900,
    },
    optionText: {
      fontFamily: typography.bold,
      paddingLeft: spacing.multipleL,
      color: whites.white100,
      fontSize: moderateScale(14),
    },
    studentImagesContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%",
    },
    studentIcon: {
      width: "100%",
      height: "100%",
    },
  });
};
