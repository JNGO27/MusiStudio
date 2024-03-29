import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  colors: { whites, grays, purples, reds },
  spacing,
  typography,
  getBreakpoints,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  dimensionWidth: number,
) => {
  const deviceSize = getBreakpoints(dimensionWidth);
  const isTabletSize = deviceSize === "XL" || deviceSize === "L";
  const headlinePosition = verticalScale(spacing.multipleReg * 6.5);
  const accountSize = spacing.multipleL * 12.5;

  return StyleSheet.create({
    screenContainer: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      backgroundColor: purples.purple100,
      paddingHorizontal: horizontalScale(spacing.multipleXL * 1.5),
    },
    headlineText: {
      position: "absolute",
      top: headlinePosition,
      fontFamily: typography.bold,
      fontSize: moderateScale(20),
      color: whites.white300,
      textAlign: "center",
    },
    contentContainer: {
      display: "flex",
      flex: 1,
      width: "100%",
      alignItems: "center",
      gap: spacing.multipleXL,
    },
    profileContainer: {
      marginTop: headlinePosition * 3,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: accountSize + spacing.multipleL * 5,
      height: accountSize + spacing.multipleL * 5,
      padding: spacing.multipleXL * 4,
      borderRadius: accountSize + (spacing.multipleL * 2) / 2,
      borderStyle: "dashed",
      borderColor: purples.purple300,
      borderWidth: spacing.multipleXS,
    },
    accountIconOrPicture: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: accountSize,
      height: accountSize,
      borderRadius: accountSize / 2,
      color: "white",
    },
    uploadMessage: {
      fontSize: moderateScale(10),
      fontFamily: typography.medium,
      color: whites.white200,
      opacity: 0.5,
    },
    emailContainer: {
      marginTop: spacing.multipleXL * 2,
      alignSelf: "flex-start",
      marginLeft: spacing.multipleXL * 2,
    },
    emailLabelText: {
      fontSize: moderateScale(14),
      fontFamily: typography.semiBold,
      color: grays.gray300,
      opacity: 0.8,
    },
    userEmailContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: spacing.multipleL,
    },
    userEmailText: {
      fontSize: moderateScale(14),
      fontFamily: typography.semiBold,
      color: whites.white100,
    },
    lockIcon: {
      position: "relative",
      bottom: 2.3,
      width: verticalScale(spacing.multipleXL * 1.7),
      height: verticalScale(spacing.multipleXL * 1.7),
      opacity: 0.75,
    },
    deleteUserButton: {
      position: "absolute",
      bottom: verticalScale(spacing.multipleXL * 6),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: isTabletSize
        ? horizontalScale(spacing.multipleXL * 14)
        : horizontalScale(spacing.multipleXL * 20),
      height: isTabletSize
        ? horizontalScale(spacing.multipleXL * 3)
        : horizontalScale(spacing.multipleReg * 7),
      borderColor: reds.red900,
      borderWidth: spacing.multipleXS,
      borderRadius: spacing.multipleReg * 2.5,
      backgroundColor: reds.red700,
      shadowColor: reds.red900,
      shadowOffset: { width: 0, height: -1.5 },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 3,
    },
    buttonText: {
      color: "white",
      fontFamily: typography.bold,
      fontSize: moderateScale(16),
    },
  });
};
