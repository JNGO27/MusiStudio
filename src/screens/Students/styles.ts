import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  typography,
  colors: { lightPurples, grays },
  componentStyles: { studentCard },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  const studentCardStyles = studentCard(
    horizontalScale,
    verticalScale,
  ).cardContainer;

  return StyleSheet.create({
    container: {
      width: "100%",
      minHeight: "100%",
      backgroundColor: lightPurples.lightPurple100,
    },
    cardsContainer: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "100%",
      height: "100%",
      gap: spacing.multipleReg * 2,
      paddingHorizontal: horizontalScale(spacing.multipleReg * 2),
    },
    studentCard: {
      ...studentCardStyles,
      padding: spacing.multipleReg,
    },
    studentProfileContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    profileCircle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: spacing.multipleReg * 8,
      height: spacing.multipleReg * 8,
      borderRadius: spacing.multipleReg * 4,
      borderColor: grays.gray300,
      borderWidth: spacing.multipleXS,
    },
    initials: {
      position: "relative",
      top: verticalScale(spacing.multipleXS),
      fontFamily: typography.bold,
      fontSize: moderateScale(14),
    },
    profileName: {
      position: "relative",
      top: verticalScale(spacing.multipleM),
      display: "flex",
      flex: 1,
      paddingLeft: horizontalScale(spacing.multipleXL),
      fontFamily: typography.bold,
      fontSize: moderateScale(20),
    },
    contactInformationContainer: {
      display: "flex",
    },
    icon: {
      width: horizontalScale(spacing.multipleReg * 4),
      height: verticalScale(spacing.multipleReg * 4),
    },
  });
};