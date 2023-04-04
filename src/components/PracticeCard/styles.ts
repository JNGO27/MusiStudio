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
  const practiceCardStyles = infoCard(
    horizontalScale,
    verticalScale,
  ).cardContainer;

  return StyleSheet.create({
    practiceCard: {
      ...practiceCardStyles,
    },
    parentContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      minHeight: "100%",
    },
    practiceDetailsContainer: {
      display: "flex",
      flex: 1,
      padding: spacing.multipleReg,
    },
    practiceProfileContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    clockIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      top: spacing.multipleXS,
      width: spacing.multipleReg * 6,
      height: spacing.multipleReg * 6,
      borderRadius: spacing.multipleReg * 4,
      borderColor: grays.gray300,
      borderWidth: spacing.multipleXS,
    },
    hoursPracticed: {
      position: "relative",
      top: verticalScale(spacing.multipleS),
      display: "flex",
      flex: 1,
      paddingLeft: horizontalScale(spacing.multipleXL),
      fontFamily: typography.bold,
      fontSize: moderateScale(16),
      textTransform: "capitalize",
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
    calenderIcon: {
      marginTop: verticalScale(spacing.multipleS),
      paddingLeft: spacing.multipleXL * 5,
      width: horizontalScale(spacing.multipleReg * 3.5),
      height: verticalScale(spacing.multipleReg * 3.5),
    },
    chartIcon: {
      marginTop: verticalScale(spacing.multipleS),
      paddingLeft: spacing.multipleXL * 5,
      width: horizontalScale(spacing.multipleReg * 3),
      height: verticalScale(spacing.multipleReg * 3),
    },
    practiceInfoText: {
      position: "relative",
      top: verticalScale(spacing.multipleXS),
      fontSize: moderateScale(12),
      fontFamily: typography.semiBold,
    },
    moreDetailsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 0.04,
      padding: spacing.multipleReg,
      borderRadius: spacing.multipleReg * 2,
      backgroundColor: "lightgray",
    },
    moreDetailsIcon: {
      position: "relative",
      bottom: spacing.multipleReg,
      alignSelf: "center",
      width: horizontalScale(spacing.multipleReg * 5),
      height: verticalScale(spacing.multipleReg * 5),
      opacity: 0.75,
    },
  });
};
