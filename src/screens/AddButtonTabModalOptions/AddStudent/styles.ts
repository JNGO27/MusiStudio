/* eslint-disable */

import { StyleSheet } from "react-native";

import {
  DirectionalScale,
  CalculatedScale,
  FamilyTypeCheckboxesState,
} from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  typography,
  spacing,
  colors: { lightPurples, whites, grays },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
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
      top: -spacing.multipleXL * 14,
      backgroundColor: whites.white300,
      borderTopRightRadius: spacing.multipleReg * 7,
      borderTopLeftRadius: spacing.multipleReg * 7,
      paddingTop: spacing.multipleL * 3,
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
