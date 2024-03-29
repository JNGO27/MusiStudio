/* eslint-disable */

import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  typography,
  spacing,
  colors: { lightPurples, whites, grays, blacks, greens, reds },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  dimensionHeight: number,
) => {
  const formContainerSpacing = verticalScale(spacing.multipleXL * 4);

  return StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
    },
    imageContainer: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      width: "100%",
      height: "24%",
    },
    editStudentImage: {
      display: "flex",
      width: "67%",
      height: spacing.multipleL * 30,
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
      marginTop: -formContainerSpacing,
      backgroundColor: whites.white300,
      borderTopRightRadius: spacing.multipleReg * 7,
      borderTopLeftRadius: spacing.multipleReg * 7,
      paddingTop: spacing.multipleL * 3,
      paddingBottom: verticalScale(spacing.multipleXL * 20),
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
    existingFamilyContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: verticalScale(spacing.multipleXL * 13.2),
    },
    existingFamilyContainerWithChosen: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: verticalScale(spacing.multipleXL * 13.2),
      gap: spacing.multipleXL * 2,
    },
    existingFamilyOptionsContainer: {
      alignItems: "center",
      width: "100%",
      minHeight: dimensionHeight * 2,
      borderRadius: spacing.multipleXL * 4,
      backgroundColor: whites.white300,
    },
    existingFamilyCardsContainer: {
      display: "flex",
      flex: 1,
      marginVertical: spacing.multipleReg,
    },
    existingFamilyCheckboxCard: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: horizontalScale(spacing.multipleXL * 24),
      height: verticalScale(spacing.multipleReg * 10),
      maxWidth: spacing.multipleXL * 30,
      maxHeight: spacing.multipleXL * 16,
      marginLeft: spacing.multipleM * 1,
      borderRadius: spacing.multipleReg * 2,
      backgroundColor: greens.green50,
      borderWidth: spacing.multipleXS,
      borderColor: greens.green500,
    },
    existingFamilyParentOne: {
      fontFamily: typography.bold,
      fontSize: moderateScale(18),
      paddingHorizontal: horizontalScale(spacing.multipleXL),
    },
    chooseFamilyButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      height: verticalScale(spacing.multipleReg * 4.5),
      position: "relative",
      borderRadius: spacing.multipleReg * 2.5,
    },
    chooseFamilyButtonTouchable: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    chooseFamilyButtonText: {
      position: "relative",
      top: spacing.multipleXS,
      color: "white",
      opacity: 0.75,
      fontFamily: typography.bold,
      fontSize: moderateScale(14),
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
      paddingLeft: spacing.multipleL,
    },
    errorInput: {
      width: "80%",
      height: verticalScale(35),
      backgroundColor: "white",
      borderRadius: spacing.multipleReg * 2,
      borderWidth: spacing.multipleXS,
      borderColor: reds.red700,
      paddingLeft: spacing.multipleL,
    },
    checkboxCardInner: {
      width: "100%",
      height: "100%",
      padding: spacing.multipleReg,
    },
    checkIcon: {
      alignSelf: "center",
      marginTop: spacing.multipleXL,
      width: verticalScale(spacing.multipleReg * 4),
      height: verticalScale(spacing.multipleReg * 4),
    },
    checkIconChosenFamily: {
      position: "absolute",
      top: spacing.multipleReg * 1.2,
      right: spacing.multipleReg * 2,
      width: spacing.multipleReg * 2.5,
      height: spacing.multipleReg * 2.5,
    },
    checkIconRate: {
      position: "absolute",
      top: horizontalScale(-spacing.multipleXL * 1.75),
      right: horizontalScale(spacing.multipleReg * 1.75),
      width: verticalScale(spacing.multipleReg * 2),
      height: verticalScale(spacing.multipleReg * 2),
    },
    checkIconRateLessonLength: {
      position: "absolute",
      top: horizontalScale(-spacing.multipleReg * 5),
      right: horizontalScale(spacing.multipleReg * 1.25),
      width: verticalScale(spacing.multipleReg * 2),
      height: verticalScale(spacing.multipleReg * 2),
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
    perRateContainerLessonLength: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: spacing.multipleS,
    },
    perRateInnerContainerLessonLength: {
      marginTop: -spacing.multipleReg * 2,
    },
    perRateText: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(10),
      color: blacks.blackAlpha70,
      marginTop: spacing.multipleReg * 3,
      letterSpacing: spacing.multipleXS,
      textAlign: "center",
    },
    perRateTextLessonLength: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(10),
      color: blacks.blackAlpha70,
      letterSpacing: spacing.multipleXS,
      textAlign: "center",
    },
    saveOrCancelContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "8%",
    },
    saveButtonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: horizontalScale(spacing.multipleXL * 15),
      height: verticalScale(spacing.multipleReg * 5),
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
    additionDetailsIcon: {
      position: "absolute",
      top: 20,
    },
    accordianFormSection: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.multipleReg,
      paddingTop: spacing.multipleReg * 2,
    },
  });
};
