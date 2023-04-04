import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  typography,
  colors: { grays },
  componentStyles: { infoCard },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  const familyCardStyles = infoCard(
    horizontalScale,
    verticalScale,
  ).cardContainer;

  return StyleSheet.create({
    familyCard: {
      ...familyCardStyles,
    },
    parentContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      minHeight: "100%",
    },
    familyDetailsContainer: {
      display: "flex",
      flex: 1,
      padding: spacing.multipleReg,
    },
    familyProfileContainer: {
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
      top: verticalScale(spacing.multipleS),
      display: "flex",
      flex: 1,
      paddingLeft: horizontalScale(spacing.multipleXL),
      fontFamily: typography.bold,
      fontSize: moderateScale(18),
    },
    contactInformationContainer: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      gap: spacing.multipleS,
    },
    iconContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    phoneIcon: {
      marginTop: verticalScale(spacing.multipleS),
      paddingLeft: spacing.multipleXL * 5,
      width: horizontalScale(spacing.multipleReg * 3.5),
      height: verticalScale(spacing.multipleReg * 3.5),
    },
    emailIcon: {
      marginTop: verticalScale(spacing.multipleS),
      paddingLeft: spacing.multipleXL * 5,
      width: horizontalScale(spacing.multipleReg * 3),
      height: verticalScale(spacing.multipleReg * 3),
    },
    contactInfoText: {
      position: "relative",
      top: verticalScale(spacing.multipleXS),
      fontSize: moderateScale(12),
      fontFamily: typography.semiBold,
      paddingRight: spacing.multipleL * 4,
    },
  });
};
