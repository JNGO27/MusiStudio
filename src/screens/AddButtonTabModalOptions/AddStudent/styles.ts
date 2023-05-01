/* eslint-disable */

import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  typography,
  spacing,
  colors: { lightPurples, whites, grays, blacks, greens },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  const formContainerSpacing = spacing.multipleXL * 34;

  return StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      width: "100%",
      height: "40%",
    },
    addStudentImage: {
      display: "flex",
      width: "50%",
      height: 300,
    },
    headerText: {
      position: "relative",
      top: spacing.multipleXL * 6,
      alignSelf: "flex-start",
      paddingLeft: spacing.multipleXL * 2,
      width: "50%",
      fontSize: moderateScale(24),
      textAlign: "center",
      fontFamily: typography.extraBold,
      color: lightPurples.lightPurple100,
    },
    formContainer: {
      position: "relative",
      top: -formContainerSpacing,
      backgroundColor: whites.white300,
      borderTopRightRadius: spacing.multipleReg * 7,
      borderTopLeftRadius: spacing.multipleReg * 7,
      paddingTop: spacing.multipleL * 3,
      paddingBottom: spacing.multipleXL * 18,
      gap: spacing.multipleReg * 4,
    },
    formSection: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    familyTypeContainer: {
      display: "flex",
      flexDirection: "row",
      gap: spacing.multipleL * 2,
    },
    familyTypeText: {
      position: "absolute",
      top: 20,
    },
    familyTypeCheckbox: {
      width: "100%",
      height: "100%",
    },
    formSectionHeaderText: {
      fontFamily: typography.semiBold,
      alignSelf: "flex-start",
      paddingLeft: spacing.multipleL * 3,
      fontSize: moderateScale(14),
      color: grays.gray800,
    },
    input: {
      width: "80%",
      height: verticalScale(35),
      backgroundColor: "white",
      borderRadius: spacing.multipleReg * 2,
      paddingLeft: 10,
    },
    checkboxCardInner: {
      width: "100%",
      height: "100%",
      padding: spacing.multipleReg,
    },
    checkIcon: {
      alignSelf: "center",
      marginTop: spacing.multipleXL,
      width: spacing.multipleReg * 5,
      height: spacing.multipleReg * 5,
    },
    checkIconRate: {
      position: "absolute",
      top: -spacing.multipleReg * 3.6,
      right: spacing.multipleReg * 2,
      width: spacing.multipleReg * 2.5,
      height: spacing.multipleReg * 2.5,
    },
    rateOptionsTop2Container: {
      marginTop: spacing.multipleReg * 4,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.multipleReg * 2,
    },
    rateOptionsBottomContainer: {
      marginTop: spacing.multipleReg * 2,
      marginBottom: spacing.multipleReg * 2,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.multipleReg * 2,
    },
    rateBoxAmountEmpty: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: blacks.blackAlpha90,
      textAlign: "center",
      marginTop: spacing.multipleReg * 2,
    },
    rateBoxAmount: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(20),
      color: blacks.blackAlpha90,
      textAlign: "left",
      marginTop: spacing.multipleReg * 3,
    },
    perRateContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.multipleS,
    },
    perRateText: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(10),
      color: blacks.blackAlpha70,
      marginTop: spacing.multipleReg * 3,
      letterSpacing: spacing.multipleXS,
      lineHeight: 12,
      textAlign: "center",
    },
    saveOrCancelContainer: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    saveButtonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: horizontalScale(spacing.multipleXL * 15),
      height: verticalScale(spacing.multipleReg * 5),
      position: "relative",
      top: spacing.multipleReg * 3.5,
      borderRadius: spacing.multipleReg * 4.5,
    },
    cancelButtonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: horizontalScale(spacing.multipleXL * 10),
      height: verticalScale(spacing.multipleReg * 4),
      borderBottomColor: grays.gray700,
      borderBottomWidth: spacing.multipleXS,
      marginTop: spacing.multipleReg * 3,
      position: "relative",
      top: spacing.multipleReg * 3.5,
      borderRadius: spacing.multipleReg * 4.5,
    },
    saveButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    saveButtonText: {
      position: "relative",
      top: spacing.multipleXS,
      color: "white",
      opacity: 0.75,
      fontFamily: typography.bold,
      fontSize: moderateScale(16),
    },
    cancelButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    cancelButtonText: {
      position: "relative",
      top: spacing.multipleXS,
      color: grays.gray600,
      opacity: 0.75,
      fontFamily: typography.bold,
      fontSize: moderateScale(12),
    },
    divider: {
      width: "100%",
      marginTop: spacing.multipleS,
      borderBottomColor: grays.gray300,
      borderBottomWidth: 2,
    },
  });
};
