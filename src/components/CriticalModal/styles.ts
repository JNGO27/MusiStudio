/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { whites, lightPurples, purples, reds, grays },
  typography,
  getBreakpoints,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  modalVisible: boolean,
  isKeyboardVisible: boolean,
  dimensionWidth: number,
) => {
  const deviceSize = getBreakpoints(dimensionWidth);
  const isXS = deviceSize === "XS";

  return StyleSheet.create({
    modalContainer: modalVisible
      ? {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }
      : {},
    modalBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    modalCard: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: purples.purple100,
      borderRadius: spacing.multipleReg * 4,
      paddingVertical: verticalScale(spacing.multipleReg * 2),
      paddingHorizontal: horizontalScale(spacing.multipleReg),
      height: isKeyboardVisible && isXS ? "100%" : "90%",
      width: "95%",
    },
    innerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      gap: verticalScale(spacing.multipleReg),
    },
    optionsContainer: {
      display: "flex",
      flex: 1,
      gap: verticalScale(spacing.multipleReg),
    },
    headerText: {
      color: whites.white100,
      fontFamily: typography.medium,
      fontSize: moderateScale(16),
    },
    bodyText: {
      color: whites.white300,
      fontFamily: typography.medium,
      fontSize: moderateScale(14),
      opacity: 0.75,
    },
    userEmailText: {
      marginTop: -spacing.multipleReg,
      color: whites.white100,
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      opacity: 0.9,
    },
    buttonsGroup: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      bottom: spacing.multipleXL,
      gap: spacing.multipleReg * 2,
    },
    delteUserButton: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      height: verticalScale(spacing.multipleReg * 5),
      borderRadius: spacing.multipleReg * 4.5,
      borderWidth: spacing.multipleXS,
      borderColor: reds.red900,
      backgroundColor: reds.red700,
    },
    delteUserButtonDisabled: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      height: verticalScale(spacing.multipleReg * 5),
      borderRadius: spacing.multipleReg * 4.5,
      borderWidth: spacing.multipleXS,
      borderColor: reds.red900,
      backgroundColor: reds.red700,
      opacity: 0.3,
    },
    buttonCancel: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      height: verticalScale(spacing.multipleReg * 5),
      borderRadius: spacing.multipleReg * 4.5,
      borderWidth: spacing.multipleXS,
      borderColor: lightPurples.lightPurple100,
      opacity: 0.75,
    },
    buttonText: {
      position: "relative",
      top: spacing.multipleXS,
      fontFamily: typography.black,
      fontSize: moderateScale(16),
      color: whites.white300,
    },
    icon: {
      alignSelf: "center",
      width: moderateScale(spacing.multipleReg * 4, 0.75),
      height: moderateScale(spacing.multipleReg * 4, 0.75),
    },
    emailInput: {
      display: "flex",
      flex: 1,
      marginTop: verticalScale(spacing.multipleXL),
      marginBottom: verticalScale(spacing.multipleXL * 2),
      height: verticalScale(spacing.multipleXL),
      maxHeight: isXS ? spacing.multipleXL * 2.75 : spacing.multipleXL * 4,
      paddingLeft: moderateScale(spacing.multipleReg * 4, 0.25),
      paddingRight: horizontalScale(spacing.multipleReg * 2),
      borderWidth: spacing.multipleXS,
      borderColor: grays.gray300,
      borderRadius: spacing.multipleReg * 4.5,
      backgroundColor: whites.white300,
    },
  });
};
