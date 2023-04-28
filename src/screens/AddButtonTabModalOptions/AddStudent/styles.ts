/* eslint-disable */

import { StyleSheet } from "react-native";

import {
  DirectionalScale,
  CalculatedScale,
  FamilyTypeCheckboxesState,
  RateCheckboxesState,
} from "@src/types";

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
  faimlyTypeState: FamilyTypeCheckboxesState,
  rateState: RateCheckboxesState,
) => {
  const formContainerSpacing = spacing.multipleXL * 27;

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
    checkboxCardTextNewFamily: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: faimlyTypeState.NEW_FAMILY ? greens.green800 : blacks.blackAlpha50,
      textAlign: "center",
    },
    checkboxCardTextExistingFamily: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: faimlyTypeState.EXISTS ? greens.green800 : blacks.blackAlpha50,
      textAlign: "center",
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
    checkboxCardPerHour: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: rateState.PER_HOUR ? greens.green800 : blacks.blackAlpha50,
      textAlign: "left",
      paddingLeft: spacing.multipleL * 2,
    },
    checkboxCardPerLesson: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: rateState.PER_LESSON ? greens.green800 : blacks.blackAlpha50,
      textAlign: "left",
      paddingLeft: spacing.multipleL * 2,
    },
    checkboxCardPerMonth: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: rateState.PER_MONTH ? greens.green800 : blacks.blackAlpha50,
      textAlign: "left",
      paddingLeft: spacing.multipleL * 2,
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
      color: blacks.blackAlpha90,
      marginTop: spacing.multipleReg * 3,
      letterSpacing: spacing.multipleXS,
      textAlign: "center",
    },
    button: {
      marginTop: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "20%",
      height: 40,
      backgroundColor: "blue",
    },
    text: {
      color: "white",
    },
    divider: {
      width: "100%",
      marginTop: spacing.multipleS,
      borderBottomColor: grays.gray300,
      borderBottomWidth: 2,
    },
  });
};
