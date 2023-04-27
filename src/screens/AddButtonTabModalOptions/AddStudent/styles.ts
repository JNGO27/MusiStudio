/* eslint-disable */

import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  typography,
  spacing,
  colors: { lightPurples },
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
      top: -spacing.multipleXL * 6,
      backgroundColor: "white",
      borderTopRightRadius: spacing.multipleReg * 7,
      borderTopLeftRadius: spacing.multipleReg * 7,
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    input: {
      width: "50%",
      height: 40,
      borderWidth: 2,
      borderColor: "black",
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
  });
};
