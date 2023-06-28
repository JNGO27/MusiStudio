import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  colors: { whites, purples },
  spacing,
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  const headlinePosition = verticalScale(spacing.multipleReg * 6.5);

  return StyleSheet.create({
    scrollContainer: {
      backgroundColor: purples.purple100,
    },
    scrollContentContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: horizontalScale(spacing.multipleXL * 1.5),
    },
    screenContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    headlineText: {
      position: "relative",
      top: headlinePosition,
      fontFamily: typography.bold,
      fontSize: moderateScale(20),
      color: whites.white300,
      textAlign: "center",
    },
    allContentContainer: {
      alignSelf: "flex-start",
      display: "flex",
      alignItems: "center",
      flex: 1,
      marginTop: headlinePosition + verticalScale(spacing.multipleXL * 2),
      paddingBottom: spacing.multipleXL * 5,
    },
    contentContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      gap: spacing.multipleXL * 2,
    },
    sectionContainer: {
      width: "100%",
    },
    sectionContainerContact: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
    },
    sectionText: {
      textAlign: "left",
      fontSize: moderateScale(14),
      fontFamily: typography.bold,
      color: whites.white300,
      opacity: 0.9,
    },
    privacyPolicyAppTextContent: {
      textAlign: "left",
      fontSize: moderateScale(12),
      fontFamily: typography.semiBold,
      color: purples.purple300,
    },
    contactUsEmail: {
      fontFamily: typography.medium,
      fontSize: moderateScale(12),
      color: whites.white300,
      textAlign: "center",
    },
  });
};
