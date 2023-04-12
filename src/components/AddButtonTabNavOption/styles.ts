import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const { spacing, typography } = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    addStudentContainer: {
      position: "relative",
      width: verticalScale(spacing.multipleReg * 8),
      height: verticalScale(spacing.multipleReg * 8),
      borderRadius: verticalScale(spacing.multipleReg * 8),
      backgroundColor: "white",
    },
    addStudentText: {
      position: "absolute",
      fontFamily: typography.bold,
      color: "purple",
      bottom: -verticalScale(spacing.multipleReg * 6),
      fontSize: moderateScale(12),
      textAlign: "center",
    },
    studentIcon: {
      width: 40,
      height: 40,
    },
  });
};
