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
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.multipleReg,
      width: verticalScale(spacing.multipleReg * 10),
      height: verticalScale(spacing.multipleReg * 14),
    },
    addStudentContainer: {
      position: "relative",
      width: verticalScale(spacing.multipleReg * 8),
      height: verticalScale(spacing.multipleReg * 8),
      borderRadius: verticalScale(spacing.multipleReg * 8),
      backgroundColor: "white",
    },
    addStudentText: {
      fontFamily: typography.bold,
      color: "purple",
      fontSize: moderateScale(12),
      textAlign: "center",
    },
    studentIcon: {
      width: 40,
      height: 40,
    },
  });
};
